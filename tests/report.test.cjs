const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { test } = require('node:test')
const read = name => fs.readFileSync(path.join(__dirname, '..', name), 'utf8')
const context = vm.createContext({ window: {}, Blob, TextEncoder, Intl })
vm.runInContext(read('mock-data.js'), context)
vm.runInContext(read('report-export.js'), context)
const seed = JSON.parse(read('mock-data.json'))
const api = context.window.TelefonhjelpReport
const ago = minutes => new Date(Date.parse('2026-09-08T12:00:00Z') - minutes * 60000).toISOString()
const tickets = seed.tickets.map(t => ({ ...t, createdAt: ago(t.createdMinutesAgo), closedAt: t.closedMinutesAgo == null ? null : ago(t.closedMinutesAgo), history: t.history.map(h => ({ ...h, createdAt: ago(h.minutesAgo) })) }))
const filter = { from: '2024-01-01', to: '2026-09-08', employeeId: '', category: '' }

test('80 consistent tickets, 9 active, with two years of history', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.MOCK_DATA)), seed)
  assert.equal(tickets.length, 80)
  assert.equal(tickets.filter(t => t.status !== 'CLOSED').length, 9)
  assert.equal(new Set(tickets.map(t => t.id)).size, 80)
  assert.ok(Math.max(...tickets.map(t => t.createdMinutesAgo)) > 730 * 1440)
  assert.ok(!read('mock-data.json').includes('?'))
  for (const t of tickets) {
    assert.equal(t.status === 'CLOSED', t.closedAt !== null)
    for (const event of [...t.history, ...t.comments]) {
      assert.ok(event.minutesAgo <= t.createdMinutesAgo && event.minutesAgo >= t.updatedMinutesAgo)
    }
  }
  const s = api.data(tickets, filter).summary
  assert.deepEqual([s.created, s.closed, s.open], [80, 71, 9])
})

test('closure dates and employee actions determine report inclusion', () => {
  const fixture = { ...tickets[0], createdAt: '2026-08-31T12:00:00Z', closedAt: '2026-09-01T12:00:00Z', status: 'CLOSED', assignedToId: 2, history: [{ actorEmployeeId: 1, createdAt: '2026-09-01T11:00:00Z', summary: 'Pågår → Lukket' }] }
  const result = api.data([fixture], { ...filter, from: '2026-09-01', employeeId: '1' }).summary
  assert.equal(result.created, 0)
  assert.equal(result.closed, 1)
  assert.equal(api.data([fixture], { ...filter, employeeId: '2' }).summary.closed, 0)
})

test('full, filtered and empty exports are XLSX ZIP files', async () => {
  for (const f of [filter, { ...filter, employeeId: '4' }, { ...filter, from: '2020-01-01', to: '2020-01-31' }]) {
    const blob = api.workbook(tickets, seed.employees, f)
    assert.equal(blob.type, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    const bytes = Buffer.from(await blob.arrayBuffer())
    assert.equal(bytes.readUInt32LE(0), 0x04034b50)
    assert.equal(bytes.readUInt32LE(bytes.length - 22), 0x06054b50)
    assert.ok(bytes.includes(Buffer.from('Telefonhjelp – rapportoversikt')))
    assert.ok(!bytes.includes(Buffer.from(tickets[0].customerName)))
  }
})
