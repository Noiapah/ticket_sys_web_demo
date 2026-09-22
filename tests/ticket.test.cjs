const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { test } = require('node:test')
const read = name => fs.readFileSync(path.join(__dirname, '..', name), 'utf8')

function app() {
  const handlers = {}
  let tickets
  const context = vm.createContext({
    window: { scrollTo() {}, addEventListener() {} },
    document: {
      getElementById: () => ({ innerHTML: '' }),
      addEventListener: (type, handler) => { handlers[type] = handler }
    },
    location: { hash: '#/reports' },
    FormData: class { constructor(form) { return Object.entries(form.values || {}) } },
    Blob, TextEncoder, Intl
  })
  vm.runInContext(read('mock-data.js'), context)
  vm.runInContext(read('report-export.js'), context)
  const report = context.window.TelefonhjelpReport
  const reportData = report.data
  report.data = (values, filter) => {
    tickets = values
    return reportData(values, filter)
  }
  vm.runInContext(read('app.js'), context)
  const submit = (type, values = {}, ticketId) => handlers.submit({
    preventDefault() {},
    target: { dataset: { form: type, ticketId }, values, reportValidity: () => true }
  })
  submit('disclaimer')
  return {
    tickets, report,
    employees: context.window.MOCK_DATA.employees,
    create: deviceModel => {
      submit('new-ticket', { deviceModel, deviceType: 'PHONE', customerName: 'Demo', customerPhone: '99999999', category: 'Annet', description: 'Demo' })
      return tickets.at(-1)
    },
    edit: (ticket, deviceModel) => submit('edit-ticket', { ...ticket, deviceModel }, ticket.id)
  }
}

test('changing an iPhone to Samsung updates metadata used by reports and exports', async () => {
  const demo = app()
  const ticket = demo.create('iPhone 17 Pro')
  demo.edit(ticket, 'Samsung Galaxy S25')
  assert.equal(ticket.manufacturer, 'Samsung')
  assert.equal(ticket.operatingSystem, 'ANDROID')
  const filter = { from: '2000-01-01', to: '2100-01-01', employeeId: '', category: '' }
  assert.equal(demo.report.data([ticket], filter).created[0].manufacturer, 'Samsung')
  const bytes = Buffer.from(await demo.report.workbook([ticket], demo.employees, filter).arrayBuffer())
  assert.ok(bytes.includes(Buffer.from('Samsung Galaxy S25')))
  assert.ok(bytes.includes(Buffer.from('Android')))
  assert.ok(!bytes.includes(Buffer.from('Apple')))
})

test('unknown replacement models clear the previous manufacturer and OS', () => {
  const demo = app()
  const ticket = demo.create('iPhone 17 Pro')
  demo.edit(ticket, 'Unknown device')
  assert.equal(ticket.manufacturer, '')
  assert.equal(ticket.operatingSystem, 'OTHER')
})

test('creation and editing use the same metadata for known and suggested models', () => {
  const demo = app()
  const edited = demo.create('iPhone 17 Pro')
  for (const [model, manufacturer, os] of [
    ['Lenovo ThinkPad T14', 'Lenovo', 'OTHER'],
    ['Nokia Button Phone', 'Nokia', 'OTHER'],
    ['Doro Smartphone', 'Doro', 'ANDROID'],
    [' google pixel 10 ', 'Google', 'ANDROID'],
    ['iPhone 16 Pro', 'Apple', 'IOS']
  ]) {
    const created = demo.create(model)
    demo.edit(edited, model)
    for (const ticket of [created, edited]) {
      assert.equal(ticket.manufacturer, manufacturer)
      assert.equal(ticket.operatingSystem, os)
    }
  }
})

test('editing other ticket fields preserves existing device metadata', () => {
  const demo = app()
  const ticket = demo.tickets.find(ticket => ticket.deviceModel === 'HP Pavilion 15')
  demo.edit(ticket, ticket.deviceModel)
  assert.equal(ticket.manufacturer, 'HP')
  assert.equal(ticket.operatingSystem, 'OTHER')
})
