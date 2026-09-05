import rawMockData from '../data/mock-data.json'
import { TRANSFER_CATEGORY } from '../data/categories'
import { normalizePhone, normalizeText } from '../domain/format'
import { statusLabels, type Comment, type Employee, type HistoryEvent, type TemporaryCredential, type Ticket, type TicketDraft, type TicketPatch } from '../domain/types'
import type { TicketGateway, TicketQuery } from '../gateway/TicketGateway'

interface DemoCommentSeed extends Omit<Comment, 'createdAt'> { minutesAgo: number }
interface DemoHistorySeed extends Omit<HistoryEvent, 'createdAt'> { minutesAgo: number }
interface DemoTicketSeed extends Omit<Ticket, 'createdAt' | 'updatedAt' | 'closedAt' | 'comments' | 'history'> {
  createdMinutesAgo: number
  updatedMinutesAgo: number
  closedMinutesAgo?: number
  comments: DemoCommentSeed[]
  history: DemoHistorySeed[]
}
interface DemoDataSeed { currentEmployeeId: number; employees: Employee[]; tickets: DemoTicketSeed[] }

const seed = structuredClone(rawMockData) as unknown as DemoDataSeed
const reference = new Date()
const isoMinutesAgo = (minutes: number) => new Date(reference.getTime() - minutes * 60_000).toISOString()
const employees = seed.employees
const tickets: Ticket[] = seed.tickets.map(item => {
  const { createdMinutesAgo, updatedMinutesAgo, closedMinutesAgo, comments, history, ...ticket } = item
  return {
    ...ticket,
    createdAt: isoMinutesAgo(createdMinutesAgo),
    updatedAt: isoMinutesAgo(updatedMinutesAgo),
    closedAt: closedMinutesAgo === undefined ? null : isoMinutesAgo(closedMinutesAgo),
    comments: comments.map(({ minutesAgo, ...comment }) => ({ ...comment, createdAt: isoMinutesAgo(minutesAgo) })),
    history: history.map(({ minutesAgo, ...event }) => ({ ...event, createdAt: isoMinutesAgo(minutesAgo) }))
  }
})
let currentEmployeeId = seed.currentEmployeeId
let nextTicketId = Math.max(...tickets.map(ticket => ticket.id)) + 1
let nextEventId = Math.max(0, ...tickets.flatMap(ticket => ticket.history.map(event => event.id))) + 1
let nextCommentId = Math.max(0, ...tickets.flatMap(ticket => ticket.comments.map(comment => comment.id))) + 1
const secrets = new Map<number, TemporaryCredential[]>()
const copy = <T>(value: T): T => structuredClone(value)
const employee = (id: number) => employees.find(item => item.id === id) ?? (() => { throw new Error('Fant ikke den ansatte.') })()
const ticket = (id: number) => tickets.find(item => item.id === id) ?? (() => { throw new Error('Fant ikke saken.') })()

function ensureWritable(item: Ticket, version: number) {
  if (item.status === 'CLOSED') throw new Error('Åpne saken igjen før du gjør endringer.')
  if (item.version !== version) throw new Error('Saken er endret. Last den inn på nytt.')
}

function history(item: Ticket, actorId: number, eventType: string, summary: string): HistoryEvent {
  const actor = employee(actorId)
  const event = { id: nextEventId++, actorEmployeeId: actor.id, actorName: actor.name, eventType, summary, createdAt: new Date().toISOString() }
  item.history.push(event)
  item.updatedAt = event.createdAt
  item.version++
  return event
}

function filtered(query: TicketQuery = {}) {
  const needle = normalizeText(query.query ?? '')
  return tickets.filter(item => {
    if (query.scope === 'active' && item.status === 'CLOSED') return false
    if (query.scope === 'closed' && item.status !== 'CLOSED') return false
    if (query.employeeId && item.assignedToId !== query.employeeId) return false
    if (query.category && item.category !== query.category) return false
    if (!needle) return true
    const haystack = normalizeText([item.id, item.customerName, item.customerPhone, item.customerPhoneNormalized, item.deviceModel, item.newDeviceModel, item.description].join(' '))
    return needle.split(' ').every(token => haystack.includes(token))
  })
}

export const gateway: TicketGateway = {
  async bootstrap() { return { employees: copy(employees), currentEmployeeId } },
  async setCurrentEmployee(id) { const selected = employee(id); if (!selected.active) throw new Error('Kan ikke velge en deaktivert ansatt.'); currentEmployeeId = id },
  async matchCustomer(phone) { const normalized = normalizePhone(phone).normalized; const matches = tickets.filter(item => item.customerPhoneNormalized === normalized); return matches.length ? { id: matches[0].id, name: matches[0].customerName, phoneNormalized: normalized, previousTickets: matches.length } : null },
  async listTickets(query) { return copy(filtered(query)) },
  async getTicket(id) { return copy(ticket(id)) },
  async createTicket(draft: TicketDraft, actorId: number) {
    const actor = employee(actorId)
    if (!actor.active) throw new Error('En deaktivert ansatt kan ikke opprette saker.')
    const phone = normalizePhone(draft.customerPhone)
    const now = new Date().toISOString()
    const item: Ticket = { ...draft, newDeviceModel: draft.category === TRANSFER_CATEGORY ? draft.newDeviceModel.trim() : '', id: nextTicketId++, version: 0, customerPhoneNormalized: phone.normalized, createdById: actor.id, createdByName: actor.name, assignedToId: actor.id, assignedToName: actor.name, status: 'IN_PROGRESS', urgent: false, createdAt: now, updatedAt: now, closedAt: null, comments: [], history: [] }
    tickets.push(item)
    history(item, actorId, 'CREATED', 'Saken ble opprettet')
    history(item, actorId, 'STATUS', 'Status satt til Pågår')
    return copy(item)
  },
  async updateTicket(id: number, patch: TicketPatch, actorId: number) {
    const item = ticket(id); ensureWritable(item, patch.version)
    const labels: Array<[keyof TicketDraft, string]> = [['customerName', 'Kundenavn'], ['customerPhone', 'Telefonnummer'], ['deviceModel', 'Enhet'], ['newDeviceModel', 'Ny enhet'], ['category', 'Kategori'], ['description', 'Problem']]
    for (const [key, label] of labels) {
      if (patch[key] !== undefined && patch[key] !== item[key]) {
        const old = String(item[key]); (item as unknown as Record<string, unknown>)[key] = patch[key]
        history(item, actorId, 'EDITED', `${label} endret: ${old} → ${patch[key]}`)
      }
    }
    if (item.category !== TRANSFER_CATEGORY) item.newDeviceModel = ''
    if (patch.customerPhone) item.customerPhoneNormalized = normalizePhone(patch.customerPhone).normalized
    return copy(item)
  },
  async addComment(id, text, actorId, version) {
    const item = ticket(id); ensureWritable(item, version); const actor = employee(actorId)
    item.comments.push({ id: nextCommentId++, employeeId: actor.id, employeeName: actor.name, text: text.trim(), createdAt: new Date().toISOString() })
    history(item, actorId, 'COMMENT', 'Kommentar lagt til')
    return copy(item)
  },
  async assign(id, employeeId, actorId, version) {
    const item = ticket(id); ensureWritable(item, version); const target = employee(employeeId)
    if (!target.active) throw new Error('Kan ikke tildele til en deaktivert ansatt.')
    const old = item.assignedToName; item.assignedToId = target.id; item.assignedToName = target.name
    history(item, actorId, 'ASSIGNED', `Tildelt endret: ${old} → ${target.name}`)
    return copy(item)
  },
  async setStatus(id, status, actorId, version) {
    const item = ticket(id)
    if (item.version !== version) throw new Error('Saken er endret. Last den inn på nytt.')
    if (item.status === 'CLOSED' && status !== 'IN_PROGRESS') throw new Error('En lukket sak kan bare åpnes igjen.')
    const old = item.status; item.status = status; item.closedAt = status === 'CLOSED' ? new Date().toISOString() : null
    history(item, actorId, status === 'CLOSED' ? 'CLOSED' : old === 'CLOSED' ? 'REOPENED' : 'STATUS', `${statusLabels[old]} → ${statusLabels[status]}`)
    return copy(item)
  },
  async setUrgent(id, urgent, actorId, version) {
    const item = ticket(id); ensureWritable(item, version); item.urgent = urgent
    history(item, actorId, 'URGENT', urgent ? 'Markert som haster' : 'Haster-markering fjernet')
    return copy(item)
  },
  async listEmployees() { return copy(employees) },
  async addEmployee(name) { const item = { id: Math.max(0, ...employees.map(e => e.id)) + 1, name: name.trim(), active: true }; employees.push(item); return copy(item) },
  async updateEmployee(id, changes) { const item = employee(id); Object.assign(item, changes); return copy(item) },
  async getTemporaryInfo(ticketId) {
    const now = Date.now(); const values = (secrets.get(ticketId) ?? []).filter(value => new Date(value.expiresAt).getTime() > now); secrets.set(ticketId, values); return copy(values)
  },
  async saveTemporaryInfo(ticketId, values) {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60_000).toISOString()
    const saved = new Map((secrets.get(ticketId) ?? []).map(item => [item.key, item]))
    values.forEach(item => item.value.trim() ? saved.set(item.key, { ...item, value: item.value.trim(), expiresAt }) : saved.delete(item.key))
    secrets.set(ticketId, [...saved.values()]); return copy([...saved.values()])
  },
  async clearTemporaryInfo(ticketId, key) {
    if (!key) secrets.delete(ticketId); else secrets.set(ticketId, (secrets.get(ticketId) ?? []).filter(item => item.key !== key))
  }
}
