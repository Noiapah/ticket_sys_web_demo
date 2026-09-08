# Telefonhjelp – statisk UI-demo

Dette repositoriet er en interaktiv, statisk forhåndsvisning av Telefonhjelp-grensesnittet. Det finnes ingen backend, database, byggeverktøy eller lokal server.

## Åpne demoen

1. Last ned eller klon repositoriet.
2. Dobbeltklikk på `index.html`.

Siden åpnes direkte i nettleseren. Ingen installasjon eller kommandoer er nødvendig.

## Filer

- `index.html` er inngangen til demoen.
- `styles.css` gjenskaper utseendet fra originalprosjektet.
- `app.js` håndterer visninger og interaksjoner direkte i nettleseren.
- `mock-data.json` inneholder illustrasjonsdata med fire ansatte og 80 supportsaker (9 aktive og 71 lukkede).
- `mock-data.js` gjør de samme startdataene tilgjengelige når siden åpnes direkte med `file://`, der nettleseren ikke tillater at JavaScript henter en lokal JSON-fil.

Navigasjon, saksfaner, søk, ny sak, saksdetaljer, kommentarer, statusendringer, ansattinnstillinger og rapportvisningen fungerer uten server. Endringer lagres bare i nettleserminnet og nullstilles når siden oppdateres.

Ola Nordmann, Kari Nordmann og Peder Ås er aktive ansatte. Jan Johansen er deaktivert og finnes fortsatt i historiske demodata.

## GitHub Pages

`.github/workflows/deploy-pages.yml` publiserer de statiske filene direkte ved push til `main`.

Før første publisering åpner du **Settings → Pages** på GitHub og velger **GitHub Actions** som kilde. Siden blir deretter tilgjengelig på:

`https://noiapah.github.io/ticket_sys_web_demo/`

## Historikk og Excel-rapporter

Demodataene dekker omtrent to år bakover fra tidspunktet siden åpnes. Tidspunktene er relative, slik at de ni aktive sakene alltid er aktuelle. Velg et større datointervall under Rapporter for å se historiske saker; standardintervallet er inneværende måned.

`report-export.js` genererer en ekte `.xlsx`-fil lokalt, også når demoen åpnes med `file://`. Oppsettet følger [ReportService.java i originalprosjektet](https://github.com/Noiapah/ticket_sys_demo/blob/f1b49c5ebcc2acd725a1b6ec434b7532d3c10b53/src/main/java/no/telefonhjelp/service/ReportService.java): Sammendrag, Saker, Ansatte, Kategorier, Enheter, Produsenter og Trender, med formatering, diagrammer, filtre, fryste overskrifter og utskriftsoppsett. Kundeopplysninger og kommentarer eksporteres ikke.

Opprettede saker telles etter opprettelsesdato, lukkede etter lukkedato. Ansattfilteret bruker handlinger i historikken innenfor perioden. Trender viser dager for inntil 90 dager og måneder for lengre perioder.
