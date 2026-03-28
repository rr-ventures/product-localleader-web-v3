# Local Leader — V4 Build Plan

> **For:** Gemini 3.1 Pro build agent
> **Goal:** Build a complete, production-quality landing page at `/v4` using the reference screenshots as visual inspiration and this document as the content/structural guide.
> **Important:** You have full creative control over the visual design. Derive layout, colours, typography scale, spacing, and visual rhythm from the reference images. This document only specifies content, conversion strategy, and technical constraints.

---

## 1. BUILD TARGET

| Item | Value |
|------|-------|
| Version | v4 |
| Route | `/v4` |
| Layout | `src/layouts/LayoutV4.astro` (already exists with Plus Jakarta Sans + Crimson Pro loaded) |
| Page | `src/pages/v4/index.astro` (replace current scaffold content) |
| Components | `src/components/v4/` (create component files here) |
| Thank-you page | `src/pages/v4/thank-you.astro` (create this) |
| Font pairing | Plus Jakarta Sans (sans) + Crimson Pro (serif) — already configured in the layout |

The layout scaffold at `src/layouts/LayoutV4.astro` already has fonts, meta tags, a warm off-white background (`#fcfbf8`), and the HTML shell. Do not modify it unless you need to add something to the `<head>`. Build everything else as components imported into the page file.

---

## 2. REFERENCE IMAGES

**Folder:** `_staging/references/v4/`

Files: `v4a.png`, `v4b.png`, `v4c.png`, `v4d.png`

**Instructions:**
- Review every image in this folder before you start building.
- Use them as design inspiration for layout direction, visual rhythm, spacing, section structure, card styles, and overall aesthetic.
- Do not copy them literally — adapt the visual patterns to fit Local Leader's brand and the content wireframe below.
- If the references show a dark theme, build it as light-themed instead (light backgrounds, dark text).

---

## 3. BUSINESS CONTEXT

- **Company:** Local Leader
- **Website:** localleader.au
- **Service:** Local SEO for Australian service providers
- **Target audience:** Local service businesses — trades, professional services, and any business that serves a geographic area. Plumbers, electricians, accountants, physios, landscapers, cleaners, lawyers, dentists — anyone who needs local customers to find them on Google.
- **Pain point:** Service providers are chasing work instead of choosing it. They rely on word of mouth or expensive ads while their competitors dominate Google.
- **Dream outcome:** Become the #1 service provider in your area. Your phone rings with customers you actually want. No ad spend. No chasing leads.
- **Tone:** Professional, confident, results-focused. Speak directly to the business owner. Avoid marketing jargon. Be Australian.
- **Founder:** Reece (the guide — frame him as the expert helping the business owner succeed, not the hero of the story).

### Three Pillars

**Pillar 1: Top of Google Maps**
- Headline direction: "Show up first when locals search for your service."
- Outcome: When someone searches "[your service] near me," Google shows 3 businesses on the map. If you're not in those top 3, you're invisible. We get you there and keep you there.
- Light how: Full Google Business Profile optimisation, 50+ directory listings, ongoing Maps ranking management across your whole service area.

**Pillar 2: First Page of Google Search**
- Headline direction: "Your business on Page 1 — not your competitors, not some directory. You."
- Outcome: Organic traffic that comes to you every day without spending a cent on ads.
- Light how: SEO-optimised pages targeting the exact words your customers type. Technical fixes. Suburb expansion as rankings grow.

**Pillar 3: 5-Star Review Engine**
- Headline direction: "Build a wall of 5-star reviews — without lifting a finger."
- Outcome: More reviews means more trust means more calls. The obvious choice before anyone picks up the phone.
- Light how: Automated review requests after every job. Happy customers go to Google. Concerns go to a private feedback form. Every review gets a professional response.

---

## 4. CTA STRATEGY

**Primary CTA:** "Book a Free Strategy Session"
- Links to: `https://calendar.app.google/ceK9b3Jr3KGD9cCs5`
- Opens in a new tab (`target="_blank"`)
- This is the #1 conversion goal

**Secondary CTA:** "Request a Local Ranking Audit"
- Links to: `/v4/thank-you`
- Lower friction entry point for prospects not ready to book a call

**Thank-you page (`src/pages/v4/thank-you.astro`):**
- Create this page matching the v4 design aesthetic
- Confirm the audit request was received
- Present the Google Calendar booking link prominently so they can book a strategy call while waiting for the audit
- Include a "Back to home" link to `/v4`

**CTA placement rules:**
- Primary CTA in the hero section
- CTA after the three pillars section
- CTA in or after the pricing section
- CTA after the proof/testimonials section
- Final CTA block as the last content before the footer
- Never have more than 2 CTAs competing for attention on any single screen

---

## 5. CONTENT WIREFRAME

Build these sections in this order. The copy direction below is guidance — write the actual copy to match your design's tone and rhythm.

### Hero
- **Headline:** Variation of "Become the #1 service provider in your area"
- **Subheadline:** Supporting angle + risk reduction. Something like: "We get you to the top of Google Maps, first page of Google, and build your 5-star reputation — no ad spend required."
- **Primary CTA:** "Book a Free Strategy Session"
- **Secondary CTA (optional):** "Request a Local Ranking Audit"
- **Visual:** Choose a supporting proof stack from the asset bucket or build a visual element that reinforces proof/results
- **Hero art direction:** Do not sit the hero proof visual inside a large parent card, browser frame, or device mockup. The page background should show through immediately around and between the proof elements so the stack feels integrated with the page rather than boxed in.
- **Background treatment:** Use a visible premium texture or pattern behind the hero and upper page. It should read clearly as intentional atmosphere, not disappear into a mostly flat white background.

### Social Proof Strip
- Lightweight trust signal directly after or near the hero
- Placeholder stats: "50+ local businesses ranked", "4.9 average rating", "#1 in Maps results"
- Can be star ratings, stat counters, or a logo cloud strip

### Three Pillars
- The three pillars from Section 3 above
- Outcome-led with a light "how" underneath each
- Frame as what the prospect gets, not what we do

### Pricing
- **Tier 1:** **Local Leader Package** — ~~$2,000/month~~ → **$500/month** — EARLY BIRD OFFER
- Early bird treatment should be visually prominent.
- Framing: Limited spots. Founding client pricing. You keep that rate as long as you stay.
- Clean presentation: "Everything above. One price. No surprises."
- No ad spend required. No lock-in after initial 3-month commitment. Month-to-month after that.
- ROI framing: "What's your average job worth? One extra customer from Google more than covers it."
- **Tier 2:** **Brand & Authority Package** — custom pricing
- Tier 2 includes website design/refresh, logos and branding assets, social media post design, graphic design support, email signatures, and professional business email setup.
- Presentation: Use two pricing cards. The Local Leader Package should be the more prominent primary offer, while the Brand & Authority Package should read as a secondary custom-scope upsell.

### Testimonials
- Placeholder testimonials (3-4)
- Use initials-based avatars or simple icon placeholders — no AI-generated headshots
- Include name / business type / location (all placeholder)
- Label as placeholders in code comments so they're easy to find and replace
- Example: "Since working with Local Leader, we've gone from invisible to the top of Google Maps. The phone hasn't stopped." — J.M., Plumbing, Sydney

### FAQ
- Accordion format
- Objection-handling questions:
  - "How long until I see results?"
  - "Do I need to spend money on ads?"
  - "What if I'm already with another SEO company?"
  - "Is there a lock-in contract?"
  - "What exactly do I get for $500/month?"
  - "How is this different from other SEO companies?"

### Final CTA Block
- Repeat primary CTA with urgency framing
- "Limited early bird spots available."
- This is the last thing they see before the footer

---

## 6. ASSET BUCKET

### Graphics
**Folder:** `_staging/graphics/` (38 files)

Browse this folder and choose whichever graphics best support the design direction you derive from the reference screenshots. These include:
- Before/after Google Maps proof graphics
- Explainer and pillar graphics
- Review/trust proof graphics
- Hero card-stack visuals
- Generated illustrative assets (dashboard mockups, gradient backgrounds, icon illustrations)

Copy your chosen assets to `public/images/` with version-prefixed names (e.g., `v4-hero-proof.jpg`).

### Logos
**Folder:** `_staging/logos/` (6 files)

Pick the logo that best fits your design aesthetic:
- `logo-map-pin-wordmark.jpg` — Map pin icon + wordmark (literal, location-forward)
- `logo-monogram-wordmark.jpg` — Stylised monogram (brand-forward)
- `logo-wordmark-minimal-thin-domain.jpg` — Thin minimal with .au (premium/editorial)
- `logo-wordmark-rounded-bold-domain.jpg` — Rounded bold with .au (confident/strong)
- `logo-wordmark-rounded-medium-domain.jpg` — Rounded medium with .au (balanced)
- `logo-wordmark-brand-preview-mockup.jpg` — Mockup scene (internal reference only)

Copy your chosen logo to `public/images/` with a version-prefixed name (e.g., `v4-logo.jpg`).

---

## 7. TECHNICAL CONSTRAINTS

- **Framework:** Astro 4.x with file-based routing
- **Styling:** Tailwind CSS 3.x — use utility classes exclusively
- **Architecture:** Self-contained version. Own layout, own components in `src/components/v4/`. Do not import from `src/components/sections/`, `src/components/v2/`, or `src/components/v3/` — those belong to other versions.
- **Layout:** The layout scaffold already exists at `src/layouts/LayoutV4.astro` with fonts loaded. Replace the page content, do not modify the layout unless you need to add something to the `<head>`.
- **Theme:** Light mode only. No dark mode toggle.
- **Mobile-first:** Design and build for mobile viewport first. Most visitors will be on phones.
- **Page speed:** Keep it fast. Optimise images. No heavy assets.
- **Placeholder testimonials:** Label as placeholders in code comments so they're easy to find and replace later.

### After Building

1. Update `VERSIONS.md` in the project root:
   - Change v4 status from "Scaffold" to "Complete"
   - Add build date, style description, design inspiration, and note that you are "Cursor Agent + Gemini 3.1 Pro"

2. Update the hub page `src/pages/index.astro`:
   - Change the v4 card badge from "Scaffolded" to "Live"
   - Update the description to reflect the actual design you built

3. Verify the build passes: `npm run build`

---

*This plan is self-contained. You do not need any other documents to build this version. If you want additional context on the previous prescriptive asset planning approach, see `_staging/archived-asset-planning-notes.md`.*
