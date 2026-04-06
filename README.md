# Local Leader — marketing site

Static marketing and funnel pages for **Local Leader** (local SEO / Google Maps / Search / reviews positioning for Australian trade and related audiences). Built with **Astro 4**, **Tailwind CSS**, and **TypeScript**.

**Related product:** the **Local Leader Content Engine** lives in `product-localleader-contentcreator-app/` — an AI social content pipeline (Next.js). This site focuses on **organic local visibility and strategy calls**, not that SaaS UI.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Main landing (tradie audience) — Hero, testimonials, solutions, pricing, FAQ, CTA |
| `/ranking` | Same layout, **business** audience copy |
| `/agency` | Same layout, **real estate agency** audience copy |
| `/localagency` | Agency funnel variant (see `src/pages/localagency.astro`) |
| `/call` | Long-form tradie funnel (`FunnelLayout`, `noindex`) |
| `/thank-you`, `/ranking/thank-you` | Calendly booking landers |

## Stack

- Astro `^4.2.6`, `@astrojs/tailwind`, TypeScript
- `sharp` (used by Astro for image processing)
- Site URL in config: `https://localleader.au` (`astro.config.mjs`)

## Lead capture (current behaviour)

- **No embedded lead form** in the codebase; submissions do not hit this app.
- **Conversion:** links to **Calendly** (`reece-localleader/30min`) and **thank-you** pages that embed the Calendly widget.
- **CRM / analytics:** not wired in this repo — see **`IMPROVEMENTS.md`** for gaps and integration options.

## Images

- Hero and logo use **`astro:assets` `<Image />`** with build-time optimization (e.g. WebP output in `dist/_astro/`).
- Raster files live under `public/images/` today; see `IMPROVEMENTS.md` for optional migration to `src/assets/`.

## Quick start

```bash
npm install
npm run dev
```

Dev server binds `0.0.0.0:4321` per `astro.config.mjs`.

```bash
npm run build
npm run preview
```

## Docs

- **`IMPROVEMENTS.md`** — audit findings (lead capture, analytics, images, messaging vs content app, Astro 5 notes).
