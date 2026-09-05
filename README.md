# Telefonhjelp – statisk UI-demo

Dette repositoriet er en statisk forhåndsvisning av Telefonhjelp-grensesnittet. Det finnes ingen backend, database, byggeverktøy eller lokal server.

## Åpne demoen

1. Last ned eller klon repositoriet.
2. Dobbeltklikk på `index.html`.

Siden åpnes direkte i nettleseren. Ingen installasjon eller kommandoer er nødvendig.

## Filer

- `index.html` inneholder den statiske visningen.
- `styles.css` gjenskaper utseendet fra originalprosjektet.
- `mock-data.json` inneholder illustrasjonsdata med fire ansatte og seks supportsaker.

Knappene og feltene er visuelle elementer og trenger ikke å utføre handlinger. Ola Nordmann, Kari Nordmann og Peder Ås er aktive ansatte. Jan Johansen er deaktivert og finnes fortsatt i historiske demodata.

## GitHub Pages

`.github/workflows/deploy-pages.yml` publiserer de statiske filene direkte ved push til `main`.

Før første publisering åpner du **Settings → Pages** på GitHub og velger **GitHub Actions** som kilde. Siden blir deretter tilgjengelig på:

`https://noiapah.github.io/ticket_sys_web_demo/`
