(function () {
  'use strict'

  const categories = [
    'Dataoverføring / sikkerhetskopi / oppsett',
    'Nettverk / tilkobling',
    'Konto / brukernavn / passord',
    'E-post',
    'Virus / skadevare',
    'App-problemer',
    'Systemproblemer',
    'Annet'
  ]
  const statusLabels = {
    IN_PROGRESS: 'Pågår',
    WAITING: 'Venter',
    ESCALATED: 'Eskalert',
    CLOSED: 'Lukket'
  }
  const deviceTypeLabels = {
    PHONE: 'Telefon',
    TABLET: 'Nettbrett',
    SMARTWATCH: 'Smartklokke',
    COMPUTER: 'Datamaskin',
    OTHER: 'Annet'
  }
  const deviceModels = [
    'iPhone 15 Pro',
    'iPhone 16 Pro',
    'iPhone 17 Pro',
    'Samsung Galaxy S24',
    'Samsung Galaxy S25',
    'Google Pixel 9',
    'Google Pixel 10',
    'Doro Smartphone',
    'Nokia Button Phone'
  ]

  const root = document.getElementById('app')
  const source = window.MOCK_DATA
  if (!root || !source) {
    document.body.innerHTML = '<main class="page"><div class="alert alert--error">Kunne ikke laste demodata.</div></main>'
    return
  }

  const clone = value => JSON.parse(JSON.stringify(value))
  const referenceTime = Date.now()
  const minutesAgo = minutes => new Date(referenceTime - minutes * 60_000).toISOString()
  const localDateValue = date => [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0')
  ].join('-')
  const today = new Date()
  const seed = clone(source)
  const state = {
    employees: seed.employees,
    currentEmployeeId: seed.currentEmployeeId,
    tickets: seed.tickets.map(ticket => ({
      ...ticket,
      createdAt: minutesAgo(ticket.createdMinutesAgo),
      updatedAt: minutesAgo(ticket.updatedMinutesAgo),
      closedAt: ticket.closedMinutesAgo == null ? null : minutesAgo(ticket.closedMinutesAgo),
      comments: ticket.comments.map(comment => ({ ...comment, createdAt: minutesAgo(comment.minutesAgo) })),
      history: ticket.history.map(event => ({ ...event, createdAt: minutesAgo(event.minutesAgo) }))
    })),
    dashboardScope: 'active',
    editingTicketId: null,
    credentials: {},
    report: {
      from: localDateValue(new Date(today.getFullYear(), today.getMonth(), 1)),
      to: localDateValue(today),
      employeeId: '',
      category: ''
    }
  }
  let hasAcceptedDisclaimer = false

  let nextTicketId = Math.max(...state.tickets.map(ticket => ticket.id)) + 1
  let nextCommentId = Math.max(...state.tickets.flatMap(ticket => ticket.comments.map(comment => comment.id)), 0) + 1
  let nextHistoryId = Math.max(...state.tickets.flatMap(ticket => ticket.history.map(event => event.id)), 0) + 1

  const escapeHtml = value => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

  const selected = (value, expected) => String(value) === String(expected) ? ' selected' : ''
  const checked = value => value ? ' checked' : ''
  const currentEmployee = () => state.employees.find(employee => employee.id === state.currentEmployeeId)
  const ticketById = id => state.tickets.find(ticket => ticket.id === Number(id))
  const normalizePhone = value => {
    const digits = String(value).replace(/\D/g, '')
    return digits.length === 8 ? `+47${digits}` : digits.startsWith('47') ? `+${digits}` : digits
  }
  const formatPhone = value => {
    return value ? '99999999' : value
  }
  const dateTime = value => new Intl.DateTimeFormat('nb-NO', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Europe/Oslo'
  }).format(new Date(value))
  const timeOnly = value => new Intl.DateTimeFormat('nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Oslo'
  }).format(new Date(value))

  function addHistory(ticket, actorId, eventType, summary) {
    const actor = state.employees.find(employee => employee.id === actorId)
    const createdAt = new Date().toISOString()
    ticket.history.push({
      id: nextHistoryId++,
      actorEmployeeId: actor.id,
      actorName: actor.name,
      eventType,
      summary,
      createdAt
    })
    ticket.updatedAt = createdAt
    ticket.version++
  }

  function ageMarkup(ticket) {
    if (ticket.status === 'CLOSED') return '<span class="muted">—</span>'
    const total = Math.max(0, Math.floor((Date.now() - new Date(ticket.createdAt).getTime()) / 60_000))
    const label = total < 60 ? `${total}m` : `${Math.floor(total / 60)}t${total % 60 ? ` ${total % 60}m` : ''}`
    const level = ticket.urgent || total >= 60 ? 'red' : total >= 30 ? 'yellow' : 'green'
    return `<span class="age age--${level}"><i class="age-dot"></i><strong>${label}</strong>${ticket.urgent ? '<small>Haster</small>' : ''}</span>`
  }

  function employeeOptions(includeInactiveId) {
    return state.employees
      .filter(employee => employee.active || employee.id === includeInactiveId)
      .map(employee => `<option value="${employee.id}"${selected(employee.id, includeInactiveId)}${employee.active ? '' : ' disabled'}>${escapeHtml(employee.name)}${employee.active ? '' : ' (deaktivert)'}</option>`)
      .join('')
  }

  function shell(content, section = 'tickets', wide = false) {
    const employee = currentEmployee()
    return `
      <div class="app-shell">
        <header class="topbar">
          <div class="brand-area">
            <span class="app-version" title="Versjon 1.0.3">v1.0.3</span>
            <a class="brand" href="#/" aria-label="Gå til aktive saker">
              <span class="brand-mark">T</span>
              <span><strong>Telefonhjelp</strong><small>Butikkstøtte</small></span>
            </a>
          </div>
          <nav aria-label="Hovedmeny">
            <a class="${section === 'tickets' ? 'active' : ''}" href="#/">Saker</a>
            <a class="${section === 'reports' ? 'active' : ''}" href="#/reports">Rapporter</a>
          </nav>
          <div class="employee-switcher">
            <label for="current-employee">Nåværende ansatt</label>
            <select id="current-employee" data-action="current-employee">
              ${state.employees.filter(item => item.active).map(item => `<option value="${item.id}"${selected(item.id, employee.id)}>${escapeHtml(item.name)}</option>`).join('')}
            </select>
            <a class="settings-link" href="#/employees">⚙ Ansattinnstillinger</a>
          </div>
          <button class="exit-button" type="button" title="Avslutt Telefonhjelp" data-action="exit"><span aria-hidden="true">⏻</span> Avslutt</button>
        </header>
        <main class="page${wide ? ' page--wide' : ''}">
          ${content}
        </main>
      </div>
    `
  }

  function disclaimerView() {
    return `
      <main class="disclaimer-page">
        <section class="card disclaimer-card" aria-labelledby="disclaimer-title">
          <div class="disclaimer-brand" aria-hidden="true">T</div>
          <p class="eyebrow">Telefonhjelp</p>
          <h1 id="disclaimer-title">Viktig før du fortsetter</h1>
          <p class="disclaimer-intro" id="disclaimer-description">Dette systemet lagrer ingen data utenfor den nåværende økten. Alle opplysninger og endringer forsvinner når siden lastes inn på nytt eller fanen lukkes.</p>
          <div class="disclaimer-warning" role="note">
            <strong>Dette er kun en demo.</strong>
            <p>Ikke legg inn ekte kundeopplysninger, passord eller annen sensitiv informasjon.</p>
          </div>
          <form data-form="disclaimer">
            <label class="disclaimer-consent">
              <input type="checkbox" name="accepted" required data-action="disclaimer-consent" aria-describedby="disclaimer-description" />
              <span>Jeg forstår at dette kun er en demo, og at ingen data lagres etter denne økten.</span>
            </label>
            <button class="button button--primary button--large button--block" disabled data-disclaimer-submit>Fortsett til demoen</button>
          </form>
        </section>
      </main>
    `
  }

  function ticketRows(tickets) {
    if (!tickets.length) {
      return '<div class="empty-state"><span>⌕</span><h2>Ingen saker</h2><p>Prøv et annet søk eller velg en annen fane.</p></div>'
    }
    return `
      <div class="ticket-table card">
        <table>
          <thead><tr><th>Alder</th><th>Kunde</th><th>Enhet</th><th>Kategori</th><th>Tildelt</th><th>Status</th><th><span class="sr-only">Åpne</span></th></tr></thead>
          <tbody>
            ${tickets.map(ticket => `
              <tr class="${ticket.urgent ? 'urgent' : ''}" data-search="${escapeHtml([ticket.id, ticket.customerName, ticket.customerPhoneNormalized, ticket.deviceModel, ticket.description].join(' ').toLowerCase())}">
                <td>${ageMarkup(ticket)}</td>
                <td><strong>${escapeHtml(ticket.customerName)}</strong><small>${escapeHtml(formatPhone(ticket.customerPhoneNormalized))}</small></td>
                <td><strong>${escapeHtml(ticket.deviceModel)}</strong><small>Sak #${ticket.id}</small></td>
                <td>${escapeHtml(ticket.category)}</td>
                <td>${escapeHtml(ticket.assignedToName)}</td>
                <td><span class="status status--${ticket.status.toLowerCase().replace('_', '-') }">${statusLabels[ticket.status]}</span></td>
                <td><a class="icon-button" href="#/ticket/${ticket.id}" aria-label="Åpne sak ${ticket.id}">→</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `
  }

  function dashboardView() {
    const closed = state.dashboardScope === 'closed'
    const tickets = state.tickets
      .filter(ticket => closed ? ticket.status === 'CLOSED' : ticket.status !== 'CLOSED')
      .sort((a, b) => Number(b.urgent) - Number(a.urgent) || new Date(a.createdAt) - new Date(b.createdAt))
    return shell(`
      <section class="workspace-header">
        <div><p class="eyebrow">Arbeidskø</p><h1>${closed ? 'Tidligere saker' : 'Aktive saker'}</h1><p>Få oversikt, finn kunden og fortsett der dere slapp.</p></div>
        <a class="button button--primary button--large" href="#/new"><span>+</span> Ny sak</a>
      </section>
      <section class="toolbar card">
        <div class="tabs" role="tablist">
          <button type="button" class="${closed ? '' : 'active'}" data-action="dashboard-tab" data-scope="active">Aktive saker</button>
          <button type="button" class="${closed ? 'active' : ''}" data-action="dashboard-tab" data-scope="closed">Tidligere saker</button>
        </div>
        <label class="search"><span aria-hidden="true">⌕</span><input data-action="ticket-search" placeholder="Søk på telefon, navn, saksnummer, enhet eller problem…" aria-label="Søk i saker" /></label>
      </section>
      <div id="ticket-results">${ticketRows(tickets)}</div>
    `, 'tickets', true)
  }

  function newTicketView() {
    return shell(`
      <a class="back-link" href="#/">← Aktive saker</a>
      <section class="form-card card">
        <div class="form-heading">
          <div><p class="eyebrow">Rask registrering</p><h1>Ny supportsak</h1><p>Det viktigste først. Detaljer kan legges til senere.</p></div>
          <span class="employee-pill">Opprettes av ${escapeHtml(currentEmployee().name)}</span>
        </div>
        <form data-form="new-ticket">
          <fieldset><legend>1. Kategori</legend><label>Hva gjelder saken?<select name="category" required autofocus><option value="" disabled selected>Velg kategori</option>${categories.map(category => `<option>${escapeHtml(category)}</option>`).join('')}</select></label></fieldset>
          <fieldset><legend>2. Enhetstype</legend><div class="choice-grid">${Object.entries(deviceTypeLabels).map(([value, label], index) => `<label class="choice"><input type="radio" name="deviceType" value="${value}"${checked(index === 0)} />${label}</label>`).join('')}</div></fieldset>
          <fieldset><legend>3. Enhet</legend><div class="field-row"><label class="grow">Enhetsmodell<input name="deviceModel" list="device-models" placeholder="Søk, f.eks. ip 15 pro" required /><datalist id="device-models">${deviceModels.map(model => `<option value="${model}"></option>`).join('')}</datalist></label><label class="check other-check"><input type="checkbox" /> Annen modell</label></div><label class="secondary-device-field" data-transfer-field hidden>Enhetsmodell (ny enhet)<input name="newDeviceModel" placeholder="F.eks. iPhone 17 Pro" /></label></fieldset>
          <fieldset><legend>4. Kunde</legend><div class="two-columns"><label>Telefonnummer<input name="customerPhone" inputmode="tel" placeholder="99999999" required /></label><label>Navn<input name="customerName" placeholder="Kundens navn" required /></label></div></fieldset>
          <fieldset><legend>5. Problem</legend><label>Kort beskrivelse<textarea name="description" rows="3" maxlength="500" placeholder="F.eks. kommer ikke inn på Apple-konto" required></textarea></label></fieldset>
          <div class="form-actions"><a class="button button--ghost" href="#/">Avbryt</a><button class="button button--primary button--large">Opprett sak</button></div>
        </form>
      </section>
    `)
  }

  function ticketFacts(ticket) {
    if (state.editingTicketId === ticket.id) {
      return `
        <form class="edit-form" data-form="edit-ticket" data-ticket-id="${ticket.id}">
          <div class="two-columns"><label>Navn<input name="customerName" value="${escapeHtml(ticket.customerName)}" required /></label><label>Telefon<input name="customerPhone" value="${escapeHtml(formatPhone(ticket.customerPhone))}" required /></label></div>
          <label>Enhetsmodell<input name="deviceModel" value="${escapeHtml(ticket.deviceModel)}" required /></label>
          <label>Kategori<select name="category">${categories.map(category => `<option${selected(category, ticket.category)}>${escapeHtml(category)}</option>`).join('')}</select></label>
          <label>Problem<textarea name="description" rows="3" required>${escapeHtml(ticket.description)}</textarea></label>
          <div class="button-row"><button class="button button--primary">Lagre endringer</button><button class="button button--ghost" type="button" data-action="cancel-edit">Avbryt</button></div>
        </form>
      `
    }
    return `
      <dl class="facts">
        <div><dt>Kategori</dt><dd>${escapeHtml(ticket.category)}</dd></div>
        ${ticket.newDeviceModel ? `<div><dt>Ny enhet</dt><dd>${escapeHtml(ticket.newDeviceModel)}</dd></div>` : ''}
        <div><dt>Problem</dt><dd>${escapeHtml(ticket.description)}</dd></div>
        <div><dt>Opprettet</dt><dd>${dateTime(ticket.createdAt)} av ${escapeHtml(ticket.createdByName)}</dd></div>
      </dl>
    `
  }

  function ticketView(id) {
    const ticket = ticketById(id)
    if (!ticket) return shell('<div class="alert alert--error">Fant ikke saken.</div>')
    const active = ticket.status !== 'CLOSED'
    const credentials = state.credentials[ticket.id] || {}
    return shell(`
      <a class="back-link" href="#/">← Aktive saker</a>
      <section class="ticket-hero card ${ticket.urgent ? 'urgent' : ''}">
        <div class="ticket-title">${active ? ageMarkup(ticket) : ''}<div><p class="eyebrow">Sak #${ticket.id}</p><h1>${escapeHtml(ticket.customerName)}</h1><p>${escapeHtml(formatPhone(ticket.customerPhoneNormalized))} · ${escapeHtml(ticket.deviceModel)}</p></div></div>
        ${active ? `<button class="urgent-toggle ${ticket.urgent ? 'active' : ''}" type="button" data-action="toggle-urgent" data-ticket-id="${ticket.id}"><span>●</span> ${ticket.urgent ? 'Haster' : 'Marker som haster'}</button>` : ''}
      </section>
      <div class="detail-grid">
        <div class="detail-main">
          <section class="card section-card">
            <div class="section-heading"><h2>Saksinformasjon</h2>${active && state.editingTicketId !== ticket.id ? `<button class="text-button" data-action="edit-ticket" data-ticket-id="${ticket.id}">Rediger</button>` : ''}</div>
            ${ticketFacts(ticket)}
          </section>
          <section class="card section-card comments">
            <h2>Kommentarer</h2>
            ${ticket.comments.length ? ticket.comments.map(comment => `<article><header><strong>${escapeHtml(comment.employeeName)}</strong><time>${dateTime(comment.createdAt)}</time></header><p>${escapeHtml(comment.text)}</p></article>`).join('') : '<div class="muted">Ingen kommentarer ennå.</div>'}
            ${active ? `<form class="comment-form" data-form="comment" data-ticket-id="${ticket.id}"><label><span class="sr-only">Ny kommentar</span><textarea name="comment" rows="2" placeholder="Legg til informasjon…" required></textarea></label><button class="button button--primary">Legg til kommentar</button></form>` : ''}
          </section>
          <section class="card section-card">
            <h2>Historikk</h2>
            <ol class="timeline">${[...ticket.history].reverse().map(event => `<li><time>${timeOnly(event.createdAt)}</time><span></span><div><strong>${escapeHtml(event.summary)}</strong><small>${escapeHtml(event.actorName)} · ${dateTime(event.createdAt)}</small></div></li>`).join('')}</ol>
          </section>
        </div>
        <aside class="detail-side">
          <section class="card section-card">
            <h2>Behandling</h2>
            <label>Tildelt til<select data-action="assign-ticket" data-ticket-id="${ticket.id}"${active ? '' : ' disabled'}>${employeeOptions(ticket.assignedToId)}</select></label>
            <label>Status<select data-action="ticket-status" data-ticket-id="${ticket.id}"${active ? '' : ' disabled'}>${Object.entries(statusLabels).map(([status, label]) => `<option value="${status}"${selected(status, ticket.status)}${status === 'CLOSED' ? ' disabled' : ''}>${label}</option>`).join('')}</select></label>
            ${active ? `<button class="button button--danger button--block" data-action="close-ticket" data-ticket-id="${ticket.id}">Lukk saken</button>` : `<button class="button button--primary button--block" data-action="reopen-ticket" data-ticket-id="${ticket.id}">Åpne saken igjen</button>`}
          </section>
          <section class="card section-card sensitive">
            <div class="section-heading"><div><p class="eyebrow">Midlertidig</p><h2>Sensitiv informasjon</h2></div><span>ⓘ</span></div>
            <p class="sensitive-note">Dette er kun demodata og forsvinner når siden oppdateres.</p>
            <form data-form="credentials" data-ticket-id="${ticket.id}">
              <label>Konto<input name="account" value="${escapeHtml(credentials.account || '')}"${active ? '' : ' disabled'} /></label>
              <label>Skjermkode<input name="code" value="${escapeHtml(credentials.code || '')}"${active ? '' : ' disabled'} /></label>
              <label>SIM-PIN<input name="simPin" value="${escapeHtml(credentials.simPin || '')}"${active ? '' : ' disabled'} /></label>
              <label>Midlertidig passord<input name="temporaryPassword" value="${escapeHtml(credentials.temporaryPassword || '')}"${active ? '' : ' disabled'} /></label>
              ${active ? '<button class="button button--dark sensitive-save">Lagre midlertidig</button>' : ''}
            </form>
          </section>
        </aside>
      </div>
    `)
  }

  function employeesView() {
    return shell(`
      <a class="back-link" href="#/">← Aktive saker</a>
      <section class="card form-card">
        <p class="eyebrow">Innstillinger</p><h1>Ansatte</h1><p>Deaktiver ansatte i stedet for å slette dem, slik at historikken bevares.</p>
        <form class="inline-form" data-form="add-employee"><label class="grow">Navn<input name="name" placeholder="Navn på ny ansatt" required /></label><button class="button button--primary">Legg til</button></form>
        <ul class="employee-list">
          ${state.employees.map(employee => `<li class="${employee.active ? '' : 'inactive'}"><div><span class="avatar">${escapeHtml(employee.name.charAt(0))}</span><span><strong>${escapeHtml(employee.name)}</strong><small>${employee.active ? 'Aktiv' : 'Deaktivert'}</small></span></div><div><button class="text-button" data-action="rename-employee" data-employee-id="${employee.id}">Gi nytt navn</button><button class="text-button ${employee.active ? 'danger' : ''}" data-action="toggle-employee" data-employee-id="${employee.id}">${employee.active ? 'Deaktiver' : 'Aktiver'}</button></div></li>`).join('')}
        </ul>
      </section>
    `)
  }

  function reportSummary() {
    return window.TelefonhjelpReport.data(state.tickets, state.report).summary
  }

  function reportsView() {
    const summary = reportSummary()
    const metrics = [
      ['Opprettet', summary.created],
      ['Lukket', summary.closed],
      ['Åpne', summary.open],
      ['Gj.snitt', `${summary.average} min`],
      ['Innen 30 min', `${summary.within30} %`],
      ['Innen 60 min', `${summary.within60} %`],
      ['Over 60 min', `${summary.over60} %`],
      ['Haster / eskalert', `${summary.urgent} / ${summary.escalated}`]
    ]
    return shell(`
      <section class="workspace-header">
        <div><p class="eyebrow">Innsikt</p><h1>Rapporter</h1><p>Se aktivitet og behandlingstid uten kundeopplysninger.</p></div>
        <button class="button button--ghost" data-action="backup">Sikkerhetskopier data</button>
      </section>
      <form class="card report-filter" data-form="report">
        <label>Fra<input name="from" type="date" required value="${state.report.from}" /></label>
        <label>Til<input name="to" type="date" required value="${state.report.to}" /></label>
        <label>Ansatt<select name="employeeId"><option value="">Alle</option>${state.employees.map(employee => `<option value="${employee.id}"${selected(employee.id, state.report.employeeId)}>${escapeHtml(employee.name)}</option>`).join('')}</select></label>
        <label>Kategori<select name="category"><option value="">Alle</option>${categories.map(category => `<option${selected(category, state.report.category)}>${escapeHtml(category)}</option>`).join('')}</select></label>
        <button class="button button--primary">Vis rapport</button>
      </form>
      <section class="metric-grid">${metrics.map(([label, value]) => `<article><small>${label}</small><strong>${value}</strong></article>`).join('')}</section>
      <div class="report-actions"><button class="button button--dark button--large" data-action="export-report">Generer Excel-rapport</button><small>Dette er en lokal demonstrasjon basert på eksempeldata.</small></div>
    `, 'reports')
  }

  function parseRoute() {
    const path = location.hash.replace(/^#/, '') || '/'
    const ticketMatch = path.match(/^\/ticket\/(\d+)$/)
    if (ticketMatch) return { name: 'ticket', id: Number(ticketMatch[1]) }
    if (path === '/new') return { name: 'new' }
    if (path === '/employees') return { name: 'employees' }
    if (path === '/reports') return { name: 'reports' }
    return { name: 'dashboard' }
  }

  function render() {
    if (!hasAcceptedDisclaimer) {
      root.innerHTML = disclaimerView()
      window.scrollTo(0, 0)
      return
    }
    const route = parseRoute()
    root.innerHTML =
      route.name === 'ticket' ? ticketView(route.id) :
      route.name === 'new' ? newTicketView() :
      route.name === 'employees' ? employeesView() :
      route.name === 'reports' ? reportsView() :
      dashboardView()
    window.scrollTo(0, 0)
  }

  function setTicketStatus(ticket, status) {
    const old = ticket.status
    ticket.status = status
    ticket.closedAt = status === 'CLOSED' ? new Date().toISOString() : null
    addHistory(ticket, state.currentEmployeeId, status === 'CLOSED' ? 'CLOSED' : old === 'CLOSED' ? 'REOPENED' : 'STATUS', `${statusLabels[old]} → ${statusLabels[status]}`)
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('[data-action]')
    if (!target) return
    const action = target.dataset.action
    const ticket = target.dataset.ticketId ? ticketById(target.dataset.ticketId) : null
    if (action === 'exit') {
      alert('Dette er en nettleserdemo. Du kan lukke fanen når du er ferdig.')
    } else if (action === 'dashboard-tab') {
      state.dashboardScope = target.dataset.scope
      render()
    } else if (action === 'toggle-urgent' && ticket) {
      ticket.urgent = !ticket.urgent
      addHistory(ticket, state.currentEmployeeId, 'URGENT', ticket.urgent ? 'Markert som haster' : 'Haster-markering fjernet')
      render()
    } else if (action === 'edit-ticket' && ticket) {
      state.editingTicketId = ticket.id
      render()
    } else if (action === 'cancel-edit') {
      state.editingTicketId = null
      render()
    } else if (action === 'close-ticket' && ticket) {
      setTicketStatus(ticket, 'CLOSED')
      render()
    } else if (action === 'reopen-ticket' && ticket) {
      setTicketStatus(ticket, 'IN_PROGRESS')
      render()
    } else if (action === 'rename-employee') {
      const employee = state.employees.find(item => item.id === Number(target.dataset.employeeId))
      const name = prompt('Nytt navn', employee.name)
      if (name && name.trim()) {
        employee.name = name.trim()
        render()
      }
    } else if (action === 'toggle-employee') {
      const employee = state.employees.find(item => item.id === Number(target.dataset.employeeId))
      if (employee.id === state.currentEmployeeId && employee.active) {
        alert('Velg en annen ansatt før denne deaktiveres.')
      } else {
        employee.active = !employee.active
        render()
      }
    } else if (action === 'backup') {
      alert('Sikkerhetskopiering krever ingen handling i denne demoen. Alle data er eksempler.')
    } else if (action === 'export-report') {
      const link = document.createElement('a')
      const blob = window.TelefonhjelpReport.workbook(state.tickets, state.employees, state.report)
      link.href = URL.createObjectURL(blob)
      link.download = `telefonhjelp-rapport-${state.report.from}-${state.report.to}.xlsx`
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(link.href), 1000)
    }
  })

  document.addEventListener('change', event => {
    const target = event.target
    const action = target.dataset.action
    if (action === 'disclaimer-consent') {
      const submit = target.form.querySelector('[data-disclaimer-submit]')
      submit.disabled = !target.checked
    } else if (action === 'current-employee') {
      state.currentEmployeeId = Number(target.value)
      render()
    } else if (target.name === 'category' && target.closest('[data-form=new-ticket]')) {
      const transferField = target.closest('form').querySelector('[data-transfer-field]')
      transferField.hidden = target.value !== categories[0]
    } else if (action === 'assign-ticket') {
      const ticket = ticketById(target.dataset.ticketId)
      const employee = state.employees.find(item => item.id === Number(target.value))
      const old = ticket.assignedToName
      ticket.assignedToId = employee.id
      ticket.assignedToName = employee.name
      addHistory(ticket, state.currentEmployeeId, 'ASSIGNED', `Tildelt endret: ${old} → ${employee.name}`)
      render()
    } else if (action === 'ticket-status') {
      const ticket = ticketById(target.dataset.ticketId)
      setTicketStatus(ticket, target.value)
      render()
    }
  })

  document.addEventListener('input', event => {
    if (event.target.dataset.action !== 'ticket-search') return
    const needle = event.target.value.toLocaleLowerCase('nb-NO').trim()
    document.querySelectorAll('#ticket-results tbody tr').forEach(row => {
      row.hidden = Boolean(needle) && !row.dataset.search.includes(needle)
    })
  })

  document.addEventListener('submit', event => {
    const form = event.target
    if (!form.dataset.form) return
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form))
    if (form.dataset.form === 'disclaimer') {
      if (!form.reportValidity()) return
      hasAcceptedDisclaimer = true
      render()
    } else if (form.dataset.form === 'new-ticket') {
      const actor = currentEmployee()
      const now = new Date().toISOString()
      const deviceModel = String(data.deviceModel)
      const ticket = {
        id: nextTicketId++,
        version: 2,
        customerName: String(data.customerName),
        customerPhone: String(data.customerPhone),
        customerPhoneNormalized: normalizePhone(data.customerPhone),
        deviceType: String(data.deviceType),
        manufacturer: deviceModel.startsWith('iPhone') ? 'Apple' : deviceModel.startsWith('Samsung') ? 'Samsung' : deviceModel.startsWith('Google') ? 'Google' : '',
        deviceModel,
        newDeviceModel: String(data.newDeviceModel || ''),
        operatingSystem: deviceModel.startsWith('iPhone') ? 'IOS' : deviceModel.match(/Samsung|Google|Doro/) ? 'ANDROID' : 'OTHER',
        category: String(data.category),
        description: String(data.description),
        createdById: actor.id,
        createdByName: actor.name,
        assignedToId: actor.id,
        assignedToName: actor.name,
        status: 'IN_PROGRESS',
        urgent: false,
        createdAt: now,
        updatedAt: now,
        closedAt: null,
        comments: [],
        history: []
      }
      state.tickets.push(ticket)
      addHistory(ticket, actor.id, 'CREATED', 'Saken ble opprettet')
      addHistory(ticket, actor.id, 'STATUS', 'Status satt til Pågår')
      location.hash = `#/ticket/${ticket.id}`
    } else if (form.dataset.form === 'comment') {
      const ticket = ticketById(form.dataset.ticketId)
      const actor = currentEmployee()
      ticket.comments.push({ id: nextCommentId++, employeeId: actor.id, employeeName: actor.name, text: String(data.comment), createdAt: new Date().toISOString() })
      addHistory(ticket, actor.id, 'COMMENT', 'Kommentar lagt til')
      render()
    } else if (form.dataset.form === 'edit-ticket') {
      const ticket = ticketById(form.dataset.ticketId)
      ticket.customerName = String(data.customerName)
      ticket.customerPhone = String(data.customerPhone)
      ticket.customerPhoneNormalized = normalizePhone(data.customerPhone)
      ticket.deviceModel = String(data.deviceModel)
      ticket.category = String(data.category)
      ticket.description = String(data.description)
      addHistory(ticket, state.currentEmployeeId, 'EDITED', 'Saksinformasjon oppdatert')
      state.editingTicketId = null
      render()
    } else if (form.dataset.form === 'add-employee') {
      state.employees.push({ id: Math.max(...state.employees.map(employee => employee.id)) + 1, name: String(data.name), active: true })
      render()
    } else if (form.dataset.form === 'credentials') {
      state.credentials[form.dataset.ticketId] = data
      alert('De midlertidige demoverdiene er lagret for denne nettleserøkten.')
    } else if (form.dataset.form === 'report') {
      if (String(data.from) > String(data.to)) {
        alert('Fra-dato må være før eller lik til-dato.')
        return
      }
      state.report = { from: String(data.from), to: String(data.to), employeeId: String(data.employeeId), category: String(data.category) }
      render()
    }
  })

  window.addEventListener('hashchange', render)
  if (!location.hash) location.hash = '#/'
  else render()
})()
