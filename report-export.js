(function () {
  'use strict'

  // Layout and report semantics mirror ticket_sys_demo's ReportService.java.
  // A small OOXML writer keeps file:// exports offline, including native Excel charts.
  const ns = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
  const rel = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
  const xml = value => String(value ?? '').replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
  const col = n => n < 26 ? String.fromCharCode(65 + n) : col(Math.floor(n / 26) - 1) + col(n % 26)
  const statuses = { IN_PROGRESS: 'Pågår', WAITING: 'Venter', ESCALATED: 'Eskalert', CLOSED: 'Lukket' }
  const day = value => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Oslo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value))
  const duration = ticket => Math.floor((new Date(ticket.closedAt) - new Date(ticket.createdAt)) / 60000)

  function data(tickets, filter) {
    const inRange = value => Boolean(value) && day(value) >= filter.from && day(value) <= filter.to
    const eligible = tickets.filter(t => (!filter.category || t.category === filter.category) &&
      (!filter.employeeId || t.history.some(h => h.actorEmployeeId === Number(filter.employeeId) && inRange(h.createdAt))))
    const created = eligible.filter(t => inRange(t.createdAt))
    const closed = eligible.filter(t => inRange(t.closedAt))
    const durations = closed.map(duration).sort((a, b) => a - b)
    const percent = fn => durations.length ? Math.round(100 * durations.filter(fn).length / durations.length) : 0
    const summary = {
      created: created.length, closed: closed.length, open: created.filter(t => t.status !== 'CLOSED').length,
      urgent: created.filter(t => t.urgent || t.history.some(h => h.eventType === 'URGENT' && h.summary === 'Markert som haster')).length,
      escalated: created.filter(t => t.status === 'ESCALATED' || t.history.some(h => h.summary.includes('Eskalert'))).length,
      average: durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0,
      within30: percent(n => n <= 30), within60: percent(n => n <= 60), over60: percent(n => n > 60)
    }
    return { created, closed, durations, summary, inRange }
  }

  function workbook(tickets, employees, filter) {
    const report = data(tickets, filter)
    const { created, closed, durations, summary: s, inRange } = report
    const sheets = []
    const sheet = name => {
      const result = { name, rows: [], merges: [], charts: [], widths: [], freeze: 1 }
      sheets.push(result)
      return result
    }
    const row = (sheet, r, values, style = 5, start = 0) => {
      sheet.rows[r] ||= []
      values.forEach((value, i) => { sheet.rows[r][start + i] = { value, style } })
    }
    const table = (name, headers, values) => {
      const result = sheet(name)
      row(result, 0, headers, 4)
      values.forEach((v, i) => row(result, i + 1, v, i % 2 ? 6 : 5))
      result.filter = values.length ? `A1:${col(headers.length - 1)}${values.length + 1}` : null
      result.widths = headers.map((h, i) => Math.min(42, Math.max(h.length, ...values.map(v => String(v[i] ?? '').length)) + 2))
      return result
    }
    const chart = (sheet, title, kind, category, series, first, last, bounds) => {
      if (last >= first) sheet.charts.push({ title, kind, category, series, first, last, bounds })
    }
    const overview = sheet('Sammendrag')
    overview.freeze = 2
    overview.widths = [18, 13, 13, 4, 18, 13, 18, 4, 18, 13]
    overview.merges.push('A1:J1', 'A2:J2', 'A10:J10')
    row(overview, 0, ['Telefonhjelp – rapportoversikt'], 1)
    const displayDate = d => d.split('-').reverse().join('.')
    row(overview, 1, [`Periode: ${displayDate(filter.from)} – ${displayDate(filter.to)}   |   Ansatt: ${employees.find(e => e.id === Number(filter.employeeId))?.name || 'Alle'}   |   Kategori: ${filter.category || 'Alle'}`], 2)
    const metric = (r, c, label, value) => {
      row(overview, r, [label], 7, c)
      row(overview, r + 1, [value], 8, c)
      overview.merges.push(`${col(c)}${r + 1}:${col(c + 1)}${r + 1}`, `${col(c)}${r + 2}:${col(c + 1)}${r + 2}`)
    }
    const days = Math.max(1, (Date.parse(filter.to) - Date.parse(filter.from)) / 86400000 + 1)
    ;[['Opprettet', s.created], ['Lukket', s.closed], ['Åpne', s.open], ['Haster', s.urgent], ['Eskalert', s.escalated]].forEach((v, i) => metric(3, i * 2, ...v))
    ;[['Gjennomsnitt', `${s.average} min`], ['Innen 30 min', `${s.within30} %`], ['Innen 60 min', `${s.within60} %`], ['Over 60 min', `${s.over60} %`], ['Snitt per dag', (s.created / days).toLocaleString('nb-NO', { minimumFractionDigits: 1, maximumFractionDigits: 1 })]].forEach((v, i) => metric(6, i * 2, ...v))
    row(overview, 9, ['Spredning i behandlingstid'], 3)
    const percentile = p => durations[Math.max(0, Math.ceil(p * durations.length) - 1)] || 0
    ;[['Raskest', percentile(0)], ['Median', percentile(.5)], ['Gjennomsnitt', s.average], ['90-persentil', percentile(.9)], ['Lengst', percentile(1)]].forEach((v, i) => metric(10, i * 2, v[0], `${v[1]} min`))
    row(overview, 14, ['Behandlingstid', 'Antall', 'Andel'], 4)
    ;[['0–30 min', durations.filter(n => n <= 30).length], ['31–60 min', durations.filter(n => n > 30 && n <= 60).length], ['Over 60 min', durations.filter(n => n > 60).length]].forEach(([label, count], i) => {
      row(overview, 15 + i, [label, count, count / Math.max(1, durations.length)], i % 2 ? 6 : 5)
      overview.rows[15 + i][2].style = 9
    })
    row(overview, 14, ['Status', 'Antall'], 4, 4)
    Object.entries(statuses).forEach(([key, label], i) => row(overview, 15 + i, [label, created.filter(t => t.status === key).length], i % 2 ? 6 : 5, 4))
    row(overview, 14, ['Signal', 'Antall'], 4, 8)
    row(overview, 15, ['Haster', s.urgent], 5, 8)
    row(overview, 16, ['Eskalert', s.escalated], 6, 8)
    chart(overview, 'Fordeling av behandlingstid', 'col', 0, [[1, 'Antall saker']], 15, 17, [0, 20, 5, 36])
    chart(overview, 'Status på opprettede saker', 'pie', 4, [[5, 'Status']], 15, 18, [5, 20, 10, 36])
    const time = value => value ? new Intl.DateTimeFormat('nb-NO', { timeZone: 'Europe/Oslo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(value)).replace(',', '') : ''
    const devices = { PHONE: 'Telefon', TABLET: 'Nettbrett', SMARTWATCH: 'Smartklokke', COMPUTER: 'Datamaskin', OTHER: 'Annet' }
    const os = { IOS: 'iOS', ANDROID: 'Android', OTHER: 'Annet' }
    table('Saker', ['Saksnummer', 'Opprettet', 'Lukket', 'Behandlingstid (min)', 'Status', 'Kategori', 'Enhetstype', 'Produsent', 'Modell', 'Operativsystem', 'Opprettet av', 'Tildelt', 'Haster'], [...created].sort((a, b) => a.createdAt.localeCompare(b.createdAt)).map(t => [t.id, time(t.createdAt), time(t.closedAt), t.closedAt ? duration(t) : '', statuses[t.status], t.category, devices[t.deviceType], t.manufacturer, t.deviceModel, os[t.operatingSystem] || t.operatingSystem, t.createdByName, t.assignedToName, t.urgent ? 'Ja' : 'Nei']))
    const handled = employees.filter(e => !filter.employeeId || e.id === Number(filter.employeeId)).map(e => [e.name, tickets.filter(t => (!filter.category || t.category === filter.category) && t.history.some(h => h.actorEmployeeId === e.id && inRange(h.createdAt))).length]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'nb'))
    const staff = table('Ansatte', ['Ansatt', 'Saker med handlinger'], handled)
    chart(staff, 'Saker per ansatt', 'bar', 0, [[1, 'Saker med handlinger']], 1, handled.length, [3, 1, 12, 20])
    ;[['Kategorier', 'Kategori', 'category'], ['Enheter', 'Modell', 'deviceModel'], ['Produsenter', 'Produsent', 'manufacturer']].forEach(([name, heading, key]) => {
      const counts = new Map()
      created.forEach(t => counts.set(t[key] || '', (counts.get(t[key] || '') || 0) + 1))
      const values = [...counts].sort((a, b) => b[1] - a[1])
      const grouped = table(name, [heading, 'Antall'], values)
      chart(grouped, `Fordeling per ${heading.toLocaleLowerCase('nb-NO')}`, 'bar', 0, [[1, 'Antall saker']], 1, values.length, [3, 1, 12, 20])
    })
    const daily = days <= 90
    const buckets = new Map()
    const cursor = new Date(`${daily ? filter.from : filter.from.slice(0, 7) + '-01'}T12:00:00Z`)
    while (cursor.toISOString().slice(0, 10) <= filter.to) {
      buckets.set(cursor.toISOString().slice(0, daily ? 10 : 7), [new Intl.DateTimeFormat('nb-NO', daily ? { day: '2-digit', month: 'short', timeZone: 'UTC' } : { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(cursor), 0, 0])
      if (daily) cursor.setUTCDate(cursor.getUTCDate() + 1)
      else cursor.setUTCMonth(cursor.getUTCMonth() + 1)
    }
    created.forEach(t => { const b = buckets.get(day(t.createdAt).slice(0, daily ? 10 : 7)); if (b) b[1]++ })
    closed.forEach(t => { const b = buckets.get(day(t.closedAt).slice(0, daily ? 10 : 7)); if (b) b[2]++ })
    const trends = table('Trender', ['Periode', 'Opprettet', 'Lukket'], [...buckets.values()])
    chart(trends, 'Utvikling over tid', 'line', 0, [[1, 'Opprettet'], [2, 'Lukket']], 1, buckets.size, [4, 1, 14, 22])
    chart(trends, 'Sammenligning: opprettet mot lukket', 'col', 0, [[1, 'Opprettet'], [2, 'Lukket']], 1, buckets.size, [4, 24, 14, 45])
    return packageWorkbook(sheets)
  }

  function styles() {
    const fonts = [[11, '000000', false], [20, '000080', true], [20, 'FFFFFF', true], [11, '000080', true], [12, 'FFFFFF', true], [11, 'FFFFFF', true], [10, 'FFFFFF', true], [17, '000080', true]]
    const fills = ['000080', 'CCCCFF', '008080', '99CCFF', 'CCFFFF']
    const specs = [[0, 0, 0], [2, 2, 0], [3, 3, 0], [4, 4, 0], [5, 2, 1], [0, 0, 1], [0, 5, 1], [6, 4, 1], [7, 6, 1], [0, 0, 1]]
    return `<styleSheet xmlns="${ns}"><fonts count="${fonts.length}">${fonts.map(([size, color, bold]) => `<font><sz val="${size}"/><color rgb="FF${color}"/><name val="Calibri"/>${bold ? '<b/>' : ''}</font>`).join('')}</fonts><fills count="7"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>${fills.map(c => `<fill><patternFill patternType="solid"><fgColor rgb="FF${c}"/><bgColor indexed="64"/></patternFill></fill>`).join('')}</fills><borders count="2"><border/><border>${['left', 'right', 'top', 'bottom'].map(s => `<${s} style="thin"><color rgb="FFC0C0C0"/></${s}>`).join('')}</border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="10">${specs.map(([font, fill, border], i) => `<xf numFmtId="${i === 9 ? 9 : 0}" fontId="${font}" fillId="${fill}" borderId="${border}" xfId="0" applyAlignment="1"><alignment vertical="center"${i === 7 || i === 8 ? ' horizontal="center"' : ''}/></xf>`).join('')}</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`
  }

  function chartXml(sheet, chart) {
    const { kind, first, last } = chart
    const formula = c => `'${sheet.name.replaceAll("'", "''")}'!$${col(c)}$${first + 1}:$${col(c)}$${last + 1}`
    const cache = (c, numeric) => `<c:${numeric ? 'num' : 'str'}Ref><c:f>${xml(formula(c))}</c:f><c:${numeric ? 'num' : 'str'}Cache>${numeric ? '<c:formatCode>General</c:formatCode>' : ''}<c:ptCount val="${last - first + 1}"/>${Array.from({ length: last - first + 1 }, (_, i) => `<c:pt idx="${i}"><c:v>${xml(sheet.rows[first + i]?.[c]?.value ?? (numeric ? 0 : ''))}</c:v></c:pt>`).join('')}</c:${numeric ? 'num' : 'str'}Cache></c:${numeric ? 'num' : 'str'}Ref>`
    const series = chart.series.map(([c, title], i) => `<c:ser><c:idx val="${i}"/><c:order val="${i}"/><c:tx><c:v>${xml(title)}</c:v></c:tx>${kind === 'line' ? `<c:marker><c:symbol val="${i ? 'diamond' : 'circle'}"/></c:marker>` : ''}<c:cat>${cache(chart.category, false)}</c:cat><c:val>${cache(c, true)}</c:val></c:ser>`).join('')
    const type = kind === 'pie' ? 'pieChart' : kind === 'line' ? 'lineChart' : 'barChart'
    const axes = kind === 'pie' ? '' : `<c:catAx><c:axId val="1"/><c:scaling><c:orientation val="minMax"/></c:scaling><c:axPos val="${kind === 'bar' ? 'l' : 'b'}"/><c:crossAx val="2"/><c:crosses val="autoZero"/></c:catAx><c:valAx><c:axId val="2"/><c:scaling><c:orientation val="minMax"/></c:scaling><c:axPos val="${kind === 'bar' ? 'b' : 'l'}"/><c:majorGridlines/><c:crossAx val="1"/><c:crosses val="autoZero"/><c:crossBetween val="between"/></c:valAx>`
    return `<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><c:chart><c:title><c:tx><c:rich><a:bodyPr/><a:lstStyle/><a:p><a:r><a:t>${xml(chart.title)}</a:t></a:r></a:p></c:rich></c:tx><c:overlay val="0"/></c:title><c:plotArea><c:layout/><c:${type}>${type === 'barChart' ? `<c:barDir val="${kind}"/><c:grouping val="clustered"/>` : kind === 'line' ? '<c:grouping val="standard"/>' : ''}<c:varyColors val="${kind === 'line' || chart.series.length > 1 ? 0 : 1}"/>${series}${kind === 'pie' ? '' : '<c:axId val="1"/><c:axId val="2"/>'}</c:${type}>${axes}</c:plotArea><c:legend><c:legendPos val="b"/><c:overlay val="0"/></c:legend><c:plotVisOnly val="1"/></c:chart></c:chartSpace>`
  }

  function packageWorkbook(sheets) {
    const files = []
    const overrides = []
    const add = (path, content, type) => { files.push([path, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + content]); if (type) overrides.push(`<Override PartName="/${path}" ContentType="application/vnd.openxmlformats-officedocument.${type}+xml"/>`) }
    const relationships = values => `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${values.map(([id, type, target]) => `<Relationship Id="rId${id}" Type="${rel}/${type}" Target="${target}"/>`).join('')}</Relationships>`
    add('_rels/.rels', relationships([[1, 'officeDocument', 'xl/workbook.xml']]))
    add('xl/workbook.xml', `<workbook xmlns="${ns}" xmlns:r="${rel}"><bookViews><workbookView activeTab="0"/></bookViews><sheets>${sheets.map((s, i) => `<sheet name="${xml(s.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets></workbook>`, 'spreadsheetml.sheet.main')
    add('xl/_rels/workbook.xml.rels', relationships([...sheets.map((s, i) => [i + 1, 'worksheet', `worksheets/sheet${i + 1}.xml`]), [8, 'styles', 'styles.xml']]))
    add('xl/styles.xml', styles(), 'spreadsheetml.styles')
    let chartId = 0
    sheets.forEach((s, i) => {
      const id = i + 1
      const rows = s.rows.map((cells, r) => `<row r="${r + 1}"${i === 0 && r === 0 ? ' ht="34" customHeight="1"' : ''}>${cells.map((c, n) => `<c r="${col(n)}${r + 1}" s="${c.style}" t="${typeof c.value === 'number' ? 'n' : 'inlineStr'}">${typeof c.value === 'number' ? `<v>${c.value}</v>` : `<is><t xml:space="preserve">${xml(c.value)}</t></is>`}</c>`).join('')}</row>`).join('')
      add(`xl/worksheets/sheet${id}.xml`, `<worksheet xmlns="${ns}" xmlns:r="${rel}"><sheetPr><pageSetUpPr fitToPage="1"/></sheetPr><sheetViews><sheetView workbookViewId="0" showGridLines="${i ? 1 : 0}"><pane ySplit="${s.freeze}" topLeftCell="A${s.freeze + 1}" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols>${s.widths.map((w, c) => `<col min="${c + 1}" max="${c + 1}" width="${w}" customWidth="1"/>`).join('')}</cols><sheetData>${rows}</sheetData>${s.filter ? `<autoFilter ref="${s.filter}"/>` : ''}${s.merges.length ? `<mergeCells count="${s.merges.length}">${s.merges.map(m => `<mergeCell ref="${m}"/>`).join('')}</mergeCells>` : ''}<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/><pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/><headerFooter><oddFooter>&amp;CTelefonhjelp – rapport&amp;RSide &amp;P av &amp;N</oddFooter></headerFooter>${s.charts.length ? '<drawing r:id="rId1"/>' : ''}</worksheet>`, 'spreadsheetml.worksheet')
      if (!s.charts.length) return
      add(`xl/worksheets/_rels/sheet${id}.xml.rels`, relationships([[1, 'drawing', `../drawings/drawing${id}.xml`]]))
      const chartRels = []
      const anchors = s.charts.map((c, n) => {
        chartId++
        add(`xl/charts/chart${chartId}.xml`, chartXml(s, c), 'drawingml.chart')
        chartRels.push([n + 1, 'chart', `../charts/chart${chartId}.xml`])
        const [left, top, right, bottom] = c.bounds
        const point = (name, x, y) => `<xdr:${name}><xdr:col>${x}</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>${y}</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:${name}>`
        return `<xdr:twoCellAnchor>${point('from', left, top)}${point('to', right, bottom)}<xdr:graphicFrame macro=""><xdr:nvGraphicFramePr><xdr:cNvPr id="${n + 1}" name="Chart ${n + 1}"/><xdr:cNvGraphicFramePr/></xdr:nvGraphicFramePr><xdr:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></xdr:xfrm><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart"><c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:r="${rel}" r:id="rId${n + 1}"/></a:graphicData></a:graphic></xdr:graphicFrame><xdr:clientData/></xdr:twoCellAnchor>`
      }).join('')
      add(`xl/drawings/drawing${id}.xml`, `<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">${anchors}</xdr:wsDr>`, 'drawing')
      add(`xl/drawings/_rels/drawing${id}.xml.rels`, relationships(chartRels))
    })
    add('[Content_Types].xml', `<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${overrides.join('')}</Types>`)
    return zip(files)
  }

  // ZIP STORE entries: no compression dependency, UTF-8 names and CRC-32 checksums.
  function zip(files) {
    const encoder = new TextEncoder()
    const parts = [], directory = []
    let offset = 0
    const header = size => { const bytes = new Uint8Array(size); return [bytes, new DataView(bytes.buffer)] }
    files.forEach(([path, text]) => {
      const name = encoder.encode(path), body = encoder.encode(text)
      let crc = 0xffffffff
      for (const byte of body) { crc ^= byte; for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0) }
      crc = (crc ^ 0xffffffff) >>> 0
      const [local, l] = header(30)
      l.setUint32(0, 0x04034b50, true); l.setUint16(4, 20, true); l.setUint16(6, 0x800, true); l.setUint16(12, 33, true)
      l.setUint32(14, crc, true); l.setUint32(18, body.length, true); l.setUint32(22, body.length, true); l.setUint16(26, name.length, true)
      parts.push(local, name, body)
      const [central, c] = header(46)
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x800, true); c.setUint16(14, 33, true)
      c.setUint32(16, crc, true); c.setUint32(20, body.length, true); c.setUint32(24, body.length, true); c.setUint16(28, name.length, true); c.setUint32(42, offset, true)
      directory.push(central, name)
      offset += local.length + name.length + body.length
    })
    const [end, e] = header(22)
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true)
    e.setUint32(12, directory.reduce((n, p) => n + p.length, 0), true); e.setUint32(16, offset, true)
    return new Blob([...parts, ...directory, end], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  }

  window.TelefonhjelpReport = { data, workbook }
})()
