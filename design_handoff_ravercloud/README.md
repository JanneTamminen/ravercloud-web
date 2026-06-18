# Handoff: RaverCloud — Virtual DJ Residency Landing Page

> Implementation brief for Cursor. A developer who was not part of the design conversation should be able to ship this from this document alone.

---

## 1. Overview

RaverCloud is a platform for DJs, collectives, and labels to run **premium recurring virtual shows** — branded event pages, a cinematic "virtual club" stream, an opt-in audience video wall, ticketing/tips, and a replay archive. This deliverable is the **marketing landing page** for the *Founding DJ Residency* program (Cohort 01), whose single conversion goal is **"Apply for a Founding DJ Residency"**.

It is a single long-scroll page with 11 sections + nav + footer.

## 2. About the design files

The files in this bundle are **design references authored in HTML/CSS/JS** — a working prototype that demonstrates the intended look, layout, motion, and copy. **They are not meant to be shipped verbatim.**

Your task: **recreate this design in the target codebase's environment** (e.g. Next.js/React, Astro, Vue, plain Vite) using its established conventions, component patterns, and styling solution. If no codebase exists yet, **Next.js (App Router) + CSS Modules or Tailwind** is a clean fit — this is a static marketing page with no backend logic beyond a form submit.

The prototype uses two prototype-only crutches you should replace:
- **`<image-slot>`** — a drag-and-drop placeholder web component. In production, replace every instance with a real `<img>` / `next/image` (see §10 Assets).
- **Tweaks panel** (`tweaks-panel.jsx`, `js/tweaks-app.jsx`) — a live theme switcher used during design to compare three aesthetic directions. **Do not ship it.** Pick ONE direction with the user (default is **Midnight**) and hardcode those tokens. The other two directions are documented in §9 for reference only.

## 3. Fidelity

**High-fidelity.** Final colors, type, spacing, layout, and interactions are all specified. Recreate pixel-faithfully. Exact tokens are in §9.

## 4. Tech notes / global structure

- **Fonts** (Google Fonts): `Oswald` (display, Midnight), `Anton` (display, Warehouse), `Saira Condensed` (display, Afterglow), `Space Grotesk` (body), `JetBrains Mono` (mono/labels/kickers). For the shipped Midnight direction you only need **Oswald + Space Grotesk + JetBrains Mono**.
- **Theme** is driven by `data-theme` on `<html>` and a large set of CSS custom properties (§9). Keep the token approach — it makes the dark UI consistent.
- **Layout container:** `.wrap` = `max-width: 1200px`, centered, horizontal padding `clamp(20px, 5vw, 64px)`.
- **Section vertical rhythm:** `.section` padding-block `clamp(80px, 11vw, 150px)`; `.section--tight` `clamp(64px, 8vw, 110px)`.
- **Two fixed background layers** behind all content (`z-index` 0 and 1), content sits at `z-index: 2`:
  - `.bg-field` — radial accent glows + base bg color.
  - `.grain` — SVG fractal-noise texture at `opacity:.5`, `mix-blend-mode: soft-light`.
- **Motion philosophy:** scroll-reveal entrances are *additive* — base state is **visible**; the reveal is a no-fill keyframe so content never gets stuck invisible if JS/observers don't fire. Respect `prefers-reduced-motion`. Honor this when porting (don't set elements to `opacity:0` as their resting state).

## 5. Screens / sections (in order)

All sections live inside `<main id="top">`. Each is tagged with `data-screen-label` in the prototype — keep semantic landmarks (`<section id="…">`) so the nav anchors work.

### NAV (fixed)
- Fixed top bar, transparent initially; on `scrollY > 24` gains class `.scrolled`: `background: color-mix(in oklab, var(--bg) 78%, transparent)`, `backdrop-filter: blur(16px) saturate(140%)`, bottom hairline border.
- Left: brand — accent dot (11px circle, glow shadow) + `RaverCloud` (display font, uppercase) + `/ Residency` (mono, faint).
- Center links (mono, uppercase, `.74rem`, letter-spacing `.12em`): Product · How it works · Formats · Founding. **Hidden below 880px.**
- Right: "Watch demo" text link (hidden ≤560px) + **Apply** primary button (compact: pad 11/18px).
- No mobile menu is built — add a hamburger/drawer for ≤880px in production (currently links just hide).

### 1 · HERO  (`#top`, `.hero`)
- Full-height (`min-height: 100svh`), 2-col grid `1.05fr / .95fr`, gap `clamp(32px,5vw,72px)`, collapses to 1 col ≤940px.
- **Decorative layers:** two blurred drifting light blobs (`.hero-lights .l1/.l2`, accent + accent-2, `filter: blur(60px)`, slow `drift1/drift2` animations); a faint 64px grid (`.hero-grid`) masked with a top radial fade.
- **Left copy column:**
  - Kicker: "Founding DJ Residency · Applications open"
  - H1 (`h1.display`, `clamp(3.1rem, 9vw, 7.4rem)`): "Launch your own **virtual DJ** residency." — the phrase "virtual DJ" uses `.soft` (muted color).
  - Sub (`clamp(1.05rem,1.45vw,1.28rem)`, muted, max 46ch): "Host premium virtual shows, sell tickets, bring fans on-screen, and build a replay archive from every set."
  - Actions: primary `Apply for a Founding DJ Residency` + ghost `Watch the Demo` (with ▶ play glyph).
  - Trust line (mono, faint): hairline + "Built on the Luminara / XCaster live media stack".
- **Right "stage" composite:**
  - `.stage-screen` — 16/10 framed panel, border + glow shadow. Contains: a `Live` pill (top-left, pulsing dot), the image (→ replace `<image-slot id="hero-stage">` with the DJ/club still), an animated light **sweep** overlay, and a bottom HUD with an animated **EQ bars** group + a "1,284 in the room" viewer count.
  - `.wall` — 6-col strip of `4/3` tiles below the screen, each a flickering radial "fan cam" with a circular avatar blob; bottom label "Audience video wall · fan cams · opt-in".

### 2 · PROBLEM (`#problem`, `.section`)
- 2-col grid (`1fr 1fr`, collapses ≤820px).
- Left: index eyebrow "02 / The gap"; big display line "Livestreaming is easy. Building a *memorable, monetizable* show format is hard." (`em` → accent); lede paragraph.
- Right: `.con-list` — 5 con items, each a top-bordered row: a 26px square `✕` box + `<h4>` + muted `<p>`. Items (heading / body):
  1. Twitch and YouTube are crowded / "You're one tile in an infinite grid…"
  2. Instagram Live disappears / "The set ends, the story expires…"
  3. Most DJ streams feel disposable / "A webcam in a corner doesn't feel like an event…"
  4. Fans stay passive / "They watch, maybe drop an emoji…"
  5. Promo & replay are left to you / "Every flyer, clip, and re-upload…"

### 3 · PRODUCT PROMISE (`#product`, `.section--tight`)
- Section head: kicker "03 / What you get", H2 "Your virtual residency, packaged.", lede.
- `.feat-grid` — 4-col grid, gap 14px (→ 2-col ≤1080px, 1-col ≤620px).
  - **Card 01 is a hero card** (`.feat--hero`, spans 2 cols): split into text half + visual half (`<image-slot id="feat-profile">`, "DJ profile" slot tag). Title "DJ Profile Page", body, tag `your-name.ravercloud.live`.
  - Cards 02–07 are standard `.feat` cards: numbered mono index (accent), display `<h3>`, muted body, mono tag. Hover: accent border, lift `-3px`, shadow.
  - Content: 02 Branded Event Page / 03 Virtual Club Stream / 04 Audience Video Wall / 05 Ticketing & Tips / 06 Replay Archive / 07 Promo Kit. (Exact copy in the HTML.)

### 4 · HOW IT WORKS (`#how`, `.section`)
- Head: "04 / The flow", H2 "How your first RaverCloud show works."
- `.steps` — 3-col grid of cells separated by 1px gridlines (gap:1px on a `var(--line)` background, so borders read as hairlines). → 2-col ≤900px, 1-col ≤560px.
- Each `.step`: a large outlined "ghost" number (display font, transparent fill, `-webkit-text-stroke: 1px`), `<h4>`, body, and a bottom-anchored mono caption (accent). Hover lightens bg to `--surface`.
- Steps 01–06: Apply for a residency / Choose your show format / Set up your stream (OBS) / Promote your event / Go live inside the club / Monetize the replay.

### 5 · FORMATS (`#formats`, `.section--tight`)
- Head: "05 / Recurring formats", H2 "Built for recurring shows, not one-off streams.", lede.
- `.format-grid` — 4-col (→2 ≤980px, →1 ≤480px). Each `.format` card: mono schedule label (accent) + display `<h4>` + muted body. Hover: accent border + faint accent bg wash.
- 8 cards: Weekly Friday Set (`Fri · Weekly`) / Underground Session (`Monthly`) / Label Showcase (`Showcase`) / Afterparty Series (`Late`) / Ambient Sunday (`Sun · Ambient`) / Guest DJ Takeover (`Guest`) / VIP Fan Club Event (`VIP`) / Release Party (`Release`).

### 6 · FAN PARTICIPATION (`#fans`, `.section`)
- `.fan-split` 2-col grid `.92fr / 1.08fr` (collapse ≤880px).
- Left visual: `.fan-wall` — 4×4 grid of square flickering fan-cam tiles, framed + shadowed. 3 tiles carry `.self` (accent outline) to read as "you're in the room".
- Right: head "06 / Participation", H2 "Let your fans become part of the room."; then `.fan-feats` — 2-col list of 8 items, each a small glowing accent square bullet + `<h4>` + muted body: Audience video wall · Fan camera opt-in · Live chat · VIP shoutouts · Request queue · Tip moments · Photo moments · Tip-triggered visuals (`soon` mono tag).

### 7 · MONETIZATION (`#money`, `.section--tight`)
- `.money-head` 2-col (`1fr auto`): head "07 / Monetization" + H2 "Your set should keep working after the stream ends." (note the `<br>`); right lede (max 34ch).
- `.money-grid` — 3-col (→2 ≤900px, →1 ≤520px). 6 `.money` cards: mono index + display `<h4>` + body + bottom mono "when" tag (accent; `.future` variant is faint). Cards: 01 Ticketed live events `live` / 02 Tips & donations `live` / 03 Replay access `after` / 04 Merch links `live + after` / 05 Sponsorship potential `opportunity` / 06 Memberships `future`.
- `.note-strip` below: dashed-border honesty note — mono "No hype" tag + "We don't promise income figures…". **Keep this; it is intentional positioning.**

### 8 · FOUNDING PROGRAM (`#founding`, `.founding`) — primary CTA
- `.ticket` — a "ticket" component: 2-col (`1.05fr / .95fr`), rounded, bordered, with an accent radial wash from the top-right corner. Collapses ≤860px.
- Left (`.ticket-l`): badge "Limited slots · Cohort 01" (pill, accent dot), index "08 / Founding DJ Residency Program", H2 "Help shape the next generation of virtual performance.", paragraph, and the **Apply** primary button.
- Right (`.ticket-r`): dashed divider from the left panel + two **notch circles** (`::before`/`::after`, bg-colored 22px discs centered on the seam) to sell the ticket-perforation look. Heading "Included in the program" + 9-item checklist (`.incl`, each accent ✓ in a circle): Branded DJ profile page · First virtual event page · Ticketing setup · OBS setup guide · 10-minute tech rehearsal · Audience video participation · Replay page · Basic promo kit · Post-event feedback session.

### 9-content · DEMO / PROOF (`#demo`, `.section--tight`)
- Head: "09 / Inside the product", H2 "See the room before you book it.", lede.
- `.gallery` — a 6-col masonry-ish grid of screenshots (→2-col ≤820px). Spans: `.big` (4 col, 16/9), `.tall` (2 col, 3/4), `.wide` (3 col, 16/10), `.sq` (3 col, 16/10). Each `.shot` wraps an `<image-slot>` + a mono `.slot-tag`. Slots: Virtual club / DJ feed + room / Audience video wall / Event page / DJ profile page / Promo kit.
- `.builton` footer row: "Built on the Luminara / XCaster live media stack" — hairline — "v0 · founding cohort".

### 10-content · FAQ (`#faq`, `.section`)
- Head: "10 / Questions", H2 "Before you apply."
- `.faq` — native `<details>/<summary>` accordion, single-open (JS closes siblings on open). Summary: display-font question + a circular `+` icon that rotates 135° to an `×` when open (CSS-drawn cross). 7 Q&As: Do I need VR? / Do I need OBS? / Can I perform from home? / Can I sell tickets? / Can fans appear in the virtual club? / What happens after the live event? / Is this fully self-serve? (full answers in HTML).

### 11-content · FINAL CTA (`.final`)
- Centered, tall (`padding-block: clamp(100px,16vw,220px)`), with a big centered blurred accent glow behind.
- Kicker "Founding DJ Residency · Cohort 01"; H2 "Not another livestream link. *Your own virtual residency.*" (`em` → accent); centered primary + ghost buttons.

### FOOTER (`.foot`)
- Top hairline. Brand on left; right meta row (mono, faint): "Built on Luminara / XCaster" · Apply · FAQ · "© 2026 RaverCloud".

## 6. Interactions & behavior

(All currently in `js/app.js` — port to your framework's idioms.)
1. **Nav scroll state** — toggle `.scrolled` on `scrollY > 24`.
2. **Scroll reveals** — elements with `.reveal` get `.in` when their top crosses `viewportHeight + 120px`. Stagger via `data-d="1..5"` (each adds `+.07s` animation-delay). Re-run on scroll, resize, RAF, a 250ms timeout, and `document.fonts.ready`. Animation: `reveal-in` `.72s cubic-bezier(.2,.7,.3,1)` (translateY 24px → 0, opacity 0 → 1). Base resting state stays visible.
3. **Video-wall flicker** — each `.wall .tile` / `.fan-wall .tile` gets a random negative `--d` animation-delay so tiles flicker out of sync.
4. **FAQ accordion** — on `toggle`, if a `<details>` opens, close all others.
5. **Smooth anchor scroll** — intercept `a[href^="#"]`, scroll to target with a **70px** offset for the fixed nav, update hash via `replaceState`.
6. **CTA buttons** — currently `href="#"` / `#founding`. Wire **Apply** buttons to the real application form/route and **Watch the Demo** to the demo (`#demo` anchor or video modal — confirm with user).

Key keyframes (durations/easings to preserve): `pulse` 1.6s (live dot), `drift1` 16s / `drift2` 20s / final-glow `drift1` 18s (light blobs), `eq` 1.1s (EQ bars), `flick` 3.4–4s (tiles), `sweep` 7s (stage light sweep).

## 7. Responsive breakpoints
`940/880px` (hero → 1col, nav links hide), `820px` (problem 1col, gallery 2col), `900px` (steps 2col, money 2col), `1080/620px` (feat grid 2col/1col), `980/480px` (formats), `560px` (steps 1col, hide "Watch demo"), `520px` (money/fan-feats 1col). **Build a mobile nav menu** — the prototype only hides links.

## 8. State management
Minimal. This is a static marketing page. The only real state is the **Apply form** (not designed here — collect DJ/project info, submit to backend/email/CRM). FAQ open/close is native `<details>`. No data fetching. (Drop all Tweaks-panel state — it is prototype-only.)

## 9. Design tokens

**Ship the `midnight` direction** (default). Tokens below are the source of truth.

### Midnight (SHIP THIS)
```
--bg:#06070e  --bg-2:#0a0b16  --surface:#0e1122  --surface-2:#14132b
--line:rgba(255,255,255,.09)  --line-strong:rgba(255,255,255,.16)
--text:#f3f4fb  --muted:#9a9fbe  --faint:#5c5f7e
--accent:#8b6cff (rgb 139,108,255)   --accent-2:#34e6e0 (rgb 52,230,224)   --on-accent:#0a0612
--font-display:'Oswald' (weight 700, tracking -0.012em, leading 0.92, transform none)
--font-body:'Space Grotesk'   --font-mono:'JetBrains Mono'
--glow:1   --radius:4px   --maxw:1200px   --gutter:clamp(20px,5vw,64px)
```

### Warehouse (reference only — alternate direction)
bg `#070707`/surface `#111113`; accent `#7fe3ff`, accent-2 `#d9dde0`, on-accent `#04141b`; display **Anton** (weight 400, leading 0.86, **uppercase**); `--glow:0.45`; `--radius:0px`.

### Afterglow (reference only — alternate direction)
bg `#0a0610`/surface `#160b21`; accent `#ff5c8a`, accent-2 `#ffb24d`, on-accent `#1a0410`; display **Saira Condensed** (weight 800, **uppercase**); `--glow:1.35`; `--radius:6px`.

> If the user wants the theme switcher to ship as a real feature, the three token sets + `data-theme` mechanism already work — but confirm before keeping it. Default plan: ship Midnight only.

### Type scale
- `h1.display` `clamp(3.1rem, 9vw, 7.4rem)` · `h2.display` `clamp(2.3rem, 5.4vw, 4.3rem)` · `h3.display` `clamp(1.5rem, 2.4vw, 2.1rem)`
- body 17px / line-height 1.6 · lede `clamp(1.05rem,1.5vw,1.3rem)`, muted, max 56ch
- kicker: mono `.72rem`, letter-spacing `.26em`, uppercase, accent, with a 26px gradient lead rule
- eyebrow-index: mono `.72rem`, `.22em`, faint
- Display headings use `text-wrap: balance`; ledes/paragraphs use `text-wrap: pretty`.

### Buttons
- `.btn` base: mono `.82rem`, uppercase, letter-spacing `.04em`, padding `16px 26px`, radius `var(--radius)`. `:active` → `translateY(1px)`.
- `.btn--primary`: bg accent, text `--on-accent`, weight 600, ring + glow shadow; hover lifts `-2px` + stronger glow.
- `.btn--ghost`: transparent w/ `--line-strong` border + blur; hover → accent border & text.
- `.btn--lg`: padding `19px 34px`, `.9rem`. `.play` = 20px circle with a CSS triangle.

### Spacing / radii / shadows
- Radius from `--radius` (4px Midnight). Ticket uses `calc(var(--radius)+4px)`.
- Card shadows on hover: `0 18px 50px rgba(0,0,0,.45)`. Stage/fan-wall: `0 24–30px 60–80px rgba(0,0,0,.5–.6)` + accent ring.
- Glow shadows scale with `--glow` (e.g. `0 10px 34px rgba(var(--accent-rgb), calc(.34*var(--glow)))`).

## 10. Assets

**No real images exist yet** — every `<image-slot>` is a placeholder the user fills. Replace each with a real image and use the listed `slot-tag` as the brief for what to shoot/render:

| Slot id | Where | Needs |
|---|---|---|
| `hero-stage` | Hero stage screen (16/10) | DJ feed / virtual club still |
| `feat-profile` | Product card 01 (hero feat) | DJ profile page mockup |
| `shot-club` | Demo gallery (16/9, big) | Virtual club screenshot |
| `shot-feed` | Demo gallery (3/4, tall) | DJ feed + room composite |
| `shot-wall` | Demo gallery (16/10, wide) | Audience video wall mockup |
| `shot-event` | Demo gallery (16/10) | Event page mockup |
| `shot-profile` | Demo gallery (16/10, wide) | DJ profile mockup |
| `shot-promo` | Demo gallery (16/10) | Promo kit mockup |

Fonts: Google Fonts (self-host for production perf). No icon library — all glyphs (play triangle, ✕, ✓, +, dots, EQ bars, fan-cam blobs) are CSS/inline; keep them CSS-drawn or swap for your icon set. The grain texture is an inline SVG data-URI in `.grain`.

There is **no logo file** — the brand is typographic (accent dot + "RaverCloud" wordmark in the display font). Build a real logo if desired.

## 11. Files in this bundle
- `RaverCloud Residency.html` — the full page markup (source of exact copy & structure).
- `styles/theme.css` — reset, tokens/themes, typography, buttons, motion primitives, image-slot styling.
- `styles/sections.css` — all section layouts & component styles.
- `js/app.js` — nav scroll, scroll-reveals, tile flicker, FAQ accordion, smooth anchors. **Port this.**
- `image-slot.js` — prototype drop-zone web component. **Do not ship** (replace with real images).
- `tweaks-panel.jsx`, `js/tweaks-app.jsx` — prototype theme switcher. **Do not ship.**

## 12. Open questions for the user before building
1. Ship **Midnight only**, or keep the 3-direction theme switcher as a real feature?
2. Where do **Apply** buttons go — hosted form, Typeform, custom route + backend/CRM?
3. Is **"Watch the Demo"** a real video (modal/route) or just the `#demo` gallery anchor?
4. Final real imagery for the 8 image slots.
5. Are "Luminara / XCaster" real partner brands to credit, or placeholder tech-stack naming?
