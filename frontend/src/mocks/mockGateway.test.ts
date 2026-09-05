import { beforeEach, describe, expect, it, vi } from 'vitest'

const reference = new Date('2026-09-05T12:00:00.000Z')

async function freshGateway() {
  vi.resetModules()
  return (await import('./mockGateway')).gateway
}

describe('JSON-backed demo gateway', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(reference)
  })

  it('hydrates the required employee roster and relative ticket times', async () => {
    const gateway = await freshGateway()
    const bootstrap = await gateway.bootstrap()

    expect(bootstrap.currentEmployeeId).toBe(1)
    expect(bootstrap.employees).toEqual([
      { id: 1, name: 'Ola Nordmann', active: true },
      { id: 2, name: 'Kari Nordmann', active: true },
      { id: 3, name: 'Peder Ås', active: true },
      { id: 4, name: 'Jan Johansen', active: false }
    ])

    const ticket = await gateway.getTicket(201)
    expect(ticket.createdAt).toBe('2026-09-05T11:48:00.000Z')
    expect(ticket.updatedAt).toBe('2026-09-05T11:55:00.000Z')
  })

  it('separates active and closed tickets and searches the seeded content', async () => {
    const gateway = await freshGateway()

    expect(await gateway.listTickets({ scope: 'active' })).toHaveLength(4)
    expect(await gateway.listTickets({ scope: 'closed' })).toHaveLength(2)
    expect((await gateway.listTickets({ query: 'Mona Eriksen' })).map(ticket => ticket.id)).toEqual([203])
  })

  it('keeps mutations in the current in-memory gateway instance', async () => {
    const gateway = await freshGateway()
    const ticket = await gateway.getTicket(201)
    const changed = await gateway.setUrgent(ticket.id, true, 1, ticket.version)

    expect(changed.urgent).toBe(true)
    expect((await gateway.getTicket(201)).urgent).toBe(true)

    const reloadedGateway = await freshGateway()
    expect((await reloadedGateway.getTicket(201)).urgent).toBe(false)
  })

  it('prevents assigning a ticket to the deactivated employee', async () => {
    const gateway = await freshGateway()
    const ticket = await gateway.getTicket(201)

    await expect(gateway.assign(ticket.id, 4, 1, ticket.version))
      .rejects.toThrow('Kan ikke tildele til en deaktivert ansatt.')
  })
})
