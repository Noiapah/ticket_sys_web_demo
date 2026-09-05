# Telefonhjelp – nettbasert demo

Dette repositoriet inneholder en frontend-only demonstrasjon av Telefonhjelp, et norskspråklig supportsystem for en telefonbutikk. Løsningen er bygget med Vue 3, TypeScript og Vite, og kan publiseres direkte på GitHub Pages.

Demoen har ingen database eller backend. Eksempeldata lastes fra `frontend/src/data/mock-data.json`, kopieres til minnet når siden åpnes og nullstilles når nettleseren oppdateres. Ikke legg inn ekte kundeopplysninger.

## Lokal utvikling

Forutsetning: Node.js 24.

```powershell
npm ci
npm run dev
```

Vite viser den lokale adressen i terminalen. Appen bruker basebanen `/ticket_sys_web_demo/`, den samme som på GitHub Pages.

## Kontroller og produksjonsbygg

```powershell
npm test
npm run typecheck
npm run build
npm run preview
```

Produksjonsbygget legges i `dist/`. Denne mappen er generert og skal ikke legges inn i Git.

## Demodata

JSON-filen inneholder fire ansatte og seks supportsaker. Ola Nordmann, Kari Nordmann og Peder Ås er aktive. Jan Johansen er deaktivert, men er beholdt i historikken på en tidligere sak.

Aktive saker, lukkede saker, søk, kommentarer, statusendringer, tildeling, ansattinnstillinger og midlertidige demoverdier fungerer i den åpne nettleserøkten. Alle endringer forsvinner ved oppdatering av siden.

## GitHub Pages

Arbeidsflyten i `.github/workflows/deploy-pages.yml` tester, bygger og publiserer `dist/` ved push til `main`. Den kan også startes manuelt fra fanen **Actions**.

Før første publisering:

1. Åpne **Settings → Pages** i GitHub-repositoriet.
2. Velg **GitHub Actions** under **Build and deployment → Source**.
3. Push til `main`, eller start arbeidsflyten manuelt.

Nettsiden blir tilgjengelig på:

`https://noiapah.github.io/ticket_sys_web_demo/`
