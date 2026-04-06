# Local Leader web — audit notes & recommended actions

Audit date: April 2026. Stack: Astro 4.x, Tailwind, TypeScript (`astro.config.mjs`, `@astrojs/tailwind`).

## 1. Lead capture & CRM

### What exists today

- **No HTML `<form>`** anywhere in `src/`. There is **no POST endpoint**, **no Formspree/Netlify Forms/HubSpot embed**, and **no API route** for leads.
- **Primary conversion:** outbound links to **Calendly** (`https://calendly.com/reece-localleader/30min`) from the navbar, hero, pricing, CTA, and inline widgets on thank-you pages.
- **Secondary path:** buttons/links pointed at `/thank-you` (and `/ranking/thank-you` for the `/ranking` variant). Those pages embed the same Calendly widget; they are **booking landers**, not post-submit confirmations.

### CRM integration

- **None.** Calendly may sync to a calendar or third-party CRM if configured **inside Calendly**, but this repo does not reference any CRM SDK or webhook.

### Changes made in this audit

- Thank-you copy was updated so it **no longer claims a “request was received”** or that a report is being prepared without a real submission. CTAs were relabeled to match the Calendly-first flow.

### Recommended wiring (if you want real lead capture)

1. **Option A — Calendly-only (simplest):** Add Calendly routing questions (name, email, phone, business) and use Calendly’s integrations (e.g. Zapier, native CRM) for pipeline.
2. **Option B — Form + CRM:** Add a small form (email, phone, business name) with `action` pointing to Formspree, Basin, Netlify Forms, or a serverless function that posts to HubSpot/Pipedrive/etc.; redirect to `/thank-you` after success.
3. **Option C — Marketing automation:** Embed a Mailchimp/ConvertKit snippet or use their hosted forms linked from the secondary CTA.

---

## 2. Images & `astro:assets`

### Current state

- **Raster images using `<Image />` from `astro:assets`:** hero before/after PNG (`HeroV1A.astro`), logo (`BrandLogo.astro`). Build output shows **WebP generation** (e.g. before/after ~247kB → ~26kB).
- **No raw `<img>`** for those assets; funnel pages use **SVG/CSS mockups**, not raster photos.
- **Favicons** in `public/` (`favicon.ico`, `favicon-512.png`, `favicon.svg`) are served as static files (expected).

### Gaps

- Imports reference **`public/images/*.png`**. Astro still optimizes them when imported into `<Image />`, but the **recommended pattern** is `src/assets/` so assets are clearly “processed” and not double-served from `public/`.
- **`public/images/localleader-map-pin-mark.png`** appears **unused** in the repo (candidate to delete or wire into UI).
- **Hero/logo:** explicit `width`, `height`, `sizes`, and LCP hints (`loading="eager"`, `fetchpriority="high"` on hero) were added to reduce layout shift and help the optimizer.

### Follow-ups

- Move PNGs to `src/assets/images/` and update imports; keep `public/` for truly static files only.
- Consider **AVIF** in addition to WebP if you need further byte savings (Astro supports `formats` on `<Image />` where applicable).
- Run **Lighthouse** on `/` and `/call` after deploy to validate LCP and CLS.

---

## 3. Analytics & tags

- **No Google Analytics (gtag / GTM), Plausible, Fathom, Mixpanel, Segment, or similar** scripts appear in `LayoutV1A.astro`, `FunnelLayout.astro`, or shared layouts.
- **Third-party scripts present:** Google Fonts, Calendly widget JS on thank-you pages only.

### Recommendation

- Add `PUBLIC_GA_ID` or `PUBLIC_PLAUSIBLE_DOMAIN` (or GTM container ID) and inject one small script in `LayoutV1A` / `FunnelLayout` when the env var is set — keeps keys out of git and avoids shipping dead trackers in dev.

*(Note: “Plaid” in the original brief is a payments/fintech product and is not relevant here; if you meant **Plausible** analytics, it is not installed.)*

---

## 4. Messaging alignment: this site vs `product-localleader-contentcreator-app`

| Area | This repo (`product-localleader-web`) | Content creator app README |
|------|--------------------------------------|----------------------------|
| **Positioning** | Local SEO / Google Maps / Search / reviews for tradies (and variants for generic “business” + real estate **agency**). | **AI-powered social content generation** for Australian trade businesses (Next.js app, Prisma, R2, Claude/Gemini). |
| **Offer** | Done-for-you local visibility + optional “professional package” branding list in pricing. | Software pipeline: brand kit, calendar, design prompts, image gen, ZIP export. |

These are **complementary** (organic local demand vs social content engine) but **not the same product**. The marketing site does not mention the content engine; the content app README does not mention the Calendly-led SEO service.

### Recommendation

- Add a **single sentence** on the main README (and optionally a discreet footer or “Also from Local Leader” strip) pointing operators to the content product when relevant, with clear wording so visitors are not confused about what they are buying.

---

## 5. Copy / data consistency fixes (done)

- **FAQ** in `src/utils/data.ts` referenced **“$1,499 a month”** while the pricing card highlights a **$499/mo founding rate** and strikethrough **$1,499**. FAQs were broadened to “monthly fee” and cross-reference the pricing section.
- **Services bullet** incorrectly said **“$999/month”**; replaced with non-specific wording.

---

## 6. README accuracy

The previous README listed **founder block, features grid, brand logos, services** sections that **do not exist** on the current `index.astro` composition. The live V1A page is: **Hero → Testimonials → Solutions → Pricing → FAQ → CTA**. Additional routes: `/ranking`, `/agency`, `/localagency`, `/call`, thank-you variants.

---

## 7. Astro 5 upgrade feasibility

Official guide: [Upgrade to Astro v5](https://docs.astro.build/en/guides/upgrade-to/v5).

**Likely impact on this project (low–medium):**

- **Vite 6** ships with Astro 5; verify `@astrojs/tailwind` and any Vite plugins after upgrade.
- **Content collections:** this repo does **not** use `src/content/` or collections — **no migration** there.
- **MDX:** not used — N/A.
- **Recommended process:** `npx @astrojs/upgrade`, then `npm run build` and visual smoke-test all routes (`/`, `/call`, `/agency`, `/ranking`, thank-you pages).

Risk is **moderate but contained** for a mostly static, integration-light site.

---

## 8. Other quick wins

- **`/call` funnel** (`FunnelLayout.astro`): `meta name="robots" content="noindex, nofollow"` — intentional for a paid/traffic funnel; keep or align with sitemap strategy.
- **Agency pricing FAQ** (`src/components/funnel-agency/FaqSection.astro`) still states **$1,499/month** as core package; align with whatever public pricing you want for the agency line.
- **Environment-based Calendly URL** if you ever use staging vs production links.

---

## Summary checklist

| Item | Status |
|------|--------|
| Lead form / server action | **Missing** — Calendly only unless configured externally |
| CRM in repo | **None** |
| `astro:assets` on key PNGs | **Yes** + dimensions/sizes/LCP hints added |
| Analytics | **Not configured** |
| Messaging vs content app | **Different products** — cross-link in docs/UI optional |
| Astro 5 | **Feasible** — run official upgrade tool + regression test |
