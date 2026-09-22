# Telefonhjelp – statisk UI-demo

Dette repositoriet er en interaktiv, statisk forhåndsvisning av Telefonhjelp for butikkstøtte. Demoen er laget med HTML, CSS og JavaScript og kjører direkte i nettleseren, uten backend, database, byggeverktøy eller behov for lokal server.

[Åpne demoen på GitHub Pages](https://noiapah.github.io/ticket_sys_web_demo/).

## Åpne demoen lokalt

1. Last ned eller klon repositoriet.
2. Dobbeltklikk på `index.html`.
3. Les demovarselet, kryss av for at du har forstått det, og velg **Fortsett til demoen**.

Bruk en moderne nettleser med JavaScript aktivert. Ingen installasjon eller kommandoer er nødvendig for å bruke demoen.

## Demo og lagring

**Dette er kun en demo. Ikke legg inn ekte kundeopplysninger, passord eller annen sensitiv informasjon.**

Saker, kommentarer, ansattendringer og midlertidige verdier finnes bare i minnet i den åpne fanen. Når siden lastes inn på nytt, starter demoen med de opprinnelige eksempeldataene og viser demovarselet igjen. Endringene forsvinner også når fanen lukkes. Appen bruker verken `localStorage`, `sessionStorage` eller en server til å lagre dem.

Excel-rapporter som du laster ned, blir liggende som filer på maskinen selv om økten avsluttes.

## Funksjoner

- **Saksoversikt:** Bytt mellom aktive og tidligere saker, og søk på telefon, navn, saksnummer, enhet eller problem. Aktive saker viser alder og eventuell haster-markering.
- **Saksbehandling:** Opprett og rediger saker, legg til kommentarer, bytt tildelt ansatt, marker saker som haster, og endre status mellom Pågår, Venter og Eskalert. Saker kan lukkes og åpnes igjen, og handlingene vises i historikken.
- **Enheter:** Registrer enhetstype og modell. Kategorien «Dataoverføring / sikkerhetskopi / oppsett» viser også et felt for ny enhet.
- **Ansatte:** Bytt nåværende ansatt, legg til ansatte, endre navn og aktiver eller deaktiver ansatte. Velg en annen nåværende ansatt før du deaktiverer den du bruker. Ansattvelgeren er en del av demoen og krever ingen innlogging.
- **Rapporter:** Filtrer på periode, ansatt og kategori, se nøkkeltall og last ned en Excel-rapport.

Feltene under **Sensitiv informasjon** demonstrerer midlertidig lagring av fiktive verdier i økten. **Sikkerhetskopier data** viser bare en melding og lager ingen sikkerhetskopi. **Avslutt** viser en melding om at du kan lukke fanen.

## Demodata

Startdataene inneholder fire ansatte og 80 supportsaker: 9 aktive og 71 lukkede. Ola Nordmann, Kari Nordmann og Peder Ås er aktive ansatte. Jan Johansen er deaktivert og finnes fortsatt i historiske demodata. Telefonnummer vises som `99999999` i grensesnittet.

Demodataene dekker omtrent to år bakover fra tidspunktet siden åpnes. Tidspunktene er relative, slik at de ni aktive sakene alltid er aktuelle.

De fiktive dataene viser økende saksmengde mot nåtid, en ekstra travel periode omtrent fire måneder tilbake og kortere behandlingstid i nyere saker. De 71 lukkede sakene er fordelt over 24 perioder på 31 dager, med 1–2 saker per periode lengst tilbake og 9 i den nyeste perioden. Den travle perioden har 8 saker og lengre behandlingstid. Velg de siste to årene i rapportfilteret for å se utviklingen i Excel-arket **Trender**, eller sammenlign eldre og nyere perioder i **Sammendrag**. Kalenderbaserte månedstall varierer med datoen demoen åpnes.

Modellene har også ulike fiktive støttebehov: iPhone 13 har flest saker om dataoverføring og oppsett, Samsung Galaxy S23 om nettverk, Google Pixel 7 om apper og Lenovo ThinkPad T14 om e-post. Hver av disse modellene har også saker i andre kategorier. Systemproblemer på Doro Smartphone og skadevaresaker på HP Pavilion 15 har ekstra behandlingstid. Dette er konstruerte demomønstre, ikke faktiske produktdata. Filtrer rapporten på kategori og se arket **Enheter** for å sammenligne modellene; arket **Saker** viser kategori og behandlingstid per sak.

## Historikk og Excel-rapporter

1. Åpne **Rapporter** og velg fra- og til-dato, eventuelt ansatt og kategori.
2. Velg **Vis rapport** for å bruke filtrene og oppdatere nøkkeltallene.
3. Velg **Generer Excel-rapport** for å laste ned `telefonhjelp-rapport-<fra>-<til>.xlsx` med de sist brukte filtrene.

Standardintervallet er fra første dag i inneværende måned til i dag. Velg et større datointervall for å se historiske saker. Rapporten bruker sakene i den aktuelle økten, inkludert endringer du har gjort.

`report-export.js` genererer en ekte `.xlsx`-fil lokalt, også når demoen åpnes med `file://`. Oppsettet følger [ReportService.java i originalprosjektet](https://github.com/Noiapah/ticket_sys_demo/blob/f1b49c5ebcc2acd725a1b6ec434b7532d3c10b53/src/main/java/no/telefonhjelp/service/ReportService.java): Sammendrag, Saker, Ansatte, Kategorier, Enheter, Produsenter og Trender, med formatering, diagrammer, filtre, fryste overskrifter og utskriftsoppsett. Kundeopplysninger og kommentarer eksporteres ikke.

Opprettede saker telles etter opprettelsesdato, lukkede etter lukkedato. «Åpne» teller saker opprettet i perioden som fortsatt er åpne. Arket **Saker** viser sakene opprettet i perioden. Ansattfilteret bruker handlinger i historikken innenfor perioden, og datofiltrering og eksporterte tidspunkter bruker `Europe/Oslo`. Trender viser dager for inntil 90 dager og måneder for lengre perioder.

## Filer og videreutvikling

| Fil | Innhold |
| --- | --- |
| `index.html` | Inngangsside som laster stilarket og JavaScript-filene. |
| `styles.css` | Layout og visuell utforming. |
| `app.js` | Demovarsel, navigasjon, visninger og interaksjoner i nettleseren. |
| `report-export.js` | Rapportberegninger og lokal generering av `.xlsx`-filer uten eksterne biblioteker. |
| `mock-data.json` | Eksempeldata for ansatte, saker, kommentarer og historikk. |
| `mock-data.js` | De samme eksempeldataene som `window.MOCK_DATA`, som appen laster også ved åpning via `file://`. |
| `tests/report.test.cjs` | Tester for demodata, rapportfiltrering og Excel-eksport. |
| `tests/ticket.test.cjs` | Tester for konsistente enhetsopplysninger ved oppretting og redigering av saker. |
| `.github/workflows/deploy-pages.yml` | Publisering av de statiske filene til GitHub Pages. |

Rediger filene direkte og last siden inn på nytt for å se endringene. Navigasjonen bruker URL-fragmenter som `#/`, `#/new`, `#/ticket/201`, `#/employees` og `#/reports`.

Hold `mock-data.json` og objektet i `mock-data.js` synkronisert når du endrer eksempeldataene. Appen leser `mock-data.js`; en endring bare i JSON-filen vises derfor ikke i demoen. Testene kontrollerer at filene inneholder de samme dataene.

## Tester

Med Node.js installert kan du kjøre de eksisterende testene fra rotmappen, uten å installere pakker:

```sh
node --test
```

Testene kontrollerer konsistens i demodataene, filtrering på lukkedato og ansatthandlinger, Excel-eksport med fulle, filtrerte og tomme resultater, og at produsent og operativsystem følger enhetsmodellen ved oppretting og redigering.

## GitHub Pages

`.github/workflows/deploy-pages.yml` publiserer de statiske filene direkte ved push til `main` og kan også startes manuelt med `workflow_dispatch`. Ingen byggesteg er nødvendig.

Før første publisering åpner du **Settings → Pages** på GitHub og velger **GitHub Actions** som kilde. Arbeidsflyten publiserer `index.html`, `styles.css`, `app.js`, `report-export.js`, `mock-data.js` og `mock-data.json`.

Demoens adresse er [noiapah.github.io/ticket_sys_web_demo](https://noiapah.github.io/ticket_sys_web_demo/).
