# Klinik for Ortopædkirurgi

Website for Klinik for Ortopædkirurgi ved Sinan Said & Jan Beck Mikkelsen i Odense.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) / Workers
- **Styling**: Pure CSS med CSS Custom Properties
- **i18n**: Struktureret indhold i `/src/i18n/` (dansk som standard, klar til oversættelse)

## Projekt Struktur

```
src/
├── components/          # Genbrugelige komponenter
│   ├── Header.astro    # Navigation og logo
│   ├── Footer.astro    # Footer med kontaktinfo
│   └── BaseHead.astro  # SEO og meta tags
├── i18n/               # Oversættelser og indhold
│   ├── da.ts          # Dansk indhold (primær)
│   └── index.ts       # i18n utilities
├── layouts/            # Side layouts
│   └── BaseLayout.astro
├── pages/              # Sider (file-based routing)
│   ├── index.astro    # Forside
│   ├── om-klinikken.astro
│   ├── ansatte.astro
│   ├── kontakt.astro
│   ├── henvisning.astro
│   ├── patientvejledninger.astro
│   ├── behandlinger/   # Behandlingssider
│   └── api/           # API endpoints
│       └── contact.ts # Kontaktformular API
├── styles/
│   └── global.css     # Global styling
└── consts.ts          # Site konfiguration
```

## Kommandoer

| Kommando | Beskrivelse |
|:---------|:------------|
| `npm install` | Installer dependencies |
| `npm run dev` | Start lokal dev server på `localhost:4321` |
| `npm run build` | Byg produktionssite til `./dist/` |
| `npm run preview` | Preview build lokalt |
| `npm run deploy` | Deploy til Cloudflare |

## Deployment til Cloudflare Pages

### 1. Opret Cloudflare Pages projekt

1. Log ind på [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Gå til **Workers & Pages** > **Create** > **Pages**
3. Forbind dit GitHub repository
4. Konfigurer build:
   - Build command: `npm run build`
   - Build output directory: `dist`

### 2. Konfigurer Email (Kontaktformular)

Kontaktformularen bruger [Resend](https://resend.com/) til at sende emails. For at aktivere:

1. Opret en konto på [resend.com](https://resend.com/)
2. Verificer dit domæne
3. Opret en API nøgle
4. Tilføj environment variable i Cloudflare Pages:
   - Gå til **Settings** > **Environment variables**
   - Tilføj `RESEND_API_KEY` med din API nøgle

Alternativt kan du bruge en anden email service ved at modificere `/src/pages/api/contact.ts`.

### 3. Custom Domain

1. Gå til dit Cloudflare Pages projekt
2. Klik på **Custom domains**
3. Tilføj `klinikforortopaedkirurgi.dk`
4. Følg DNS instruktionerne

## Indhold og Oversættelser

Alt indhold er struktureret i `/src/i18n/da.ts`. Dette gør det nemt at:

- Opdatere tekst centralt
- Tilføje nye sprog (kopier `da.ts` til fx `en.ts`)
- Holde indhold konsistent på tværs af sider

### Tilføj et nyt sprog

1. Kopier `src/i18n/da.ts` til fx `src/i18n/en.ts`
2. Oversæt indholdet
3. Opdater `src/i18n/index.ts`:
```typescript
import { en } from './en';
export const languages = {
  da: 'Dansk',
  en: 'English',
};
const translations = { da, en };
```

## Udvikling

### Rediger indhold

- **Tekster**: Rediger `/src/i18n/da.ts`
- **Kontaktinfo**: Opdater `contact` objekt i i18n filen
- **Åbningstider/Ferier**: Opdater `hours` og `holidays` objekter
- **Behandlinger**: Tilføj/rediger i `treatments.categories`

### Tilføj ny side

1. Opret ny `.astro` fil i `/src/pages/`
2. Importer `BaseLayout` og `i18n`
3. Tilføj navigation link i `/src/components/Header.astro`

### Styling

Global styling er i `/src/styles/global.css` med CSS Custom Properties for farver, spacing, osv.

## Kontakt

- **Telefon**: 66 13 41 42
- **Adresse**: Skt. Anne Plads 2-4, 4. sal, 5000 Odense C
- **Ydernummer**: 244333
