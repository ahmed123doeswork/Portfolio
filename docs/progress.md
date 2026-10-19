# Progress

## 2026-10-19 — Job Hunt project + UI/UX refresh

**Done**
- Added Job Hunt (`ahmed123doeswork/ats-cv-job-hunt`) as the featured project on the home page and a full entry on `/projects`, with optimised screenshots (fictional demo data from the repo). Status is "Open source, runs locally": it has no hosted demo by design.
- Project data moved to one source: `src/content/projects.ts` (used by home and `/projects`). Avatar guide's project answer mentions Job Hunt.
- Visual refresh: new tokens (`src/styles/tokens.css`) with AA-contrast text colours in both themes, Bricolage Grotesque + Instrument Sans, inline Lucide icons (`src/components/Icon.astro`, `icons.ts`).
- Hero "What the code does" feed (`src/components/ProofFeed.astro`): auto-advancing, pauses on hover/focus/offscreen/hidden tab and via a pause button; static under reduced motion or without JS.
- `/projects` language filter with `?lang=` URL state, animated via the View Transitions API when available.
- Nav: glass bar with scroll edge shadow, always-visible Contact, animated mobile menu (Escape closes, focus returns). Theme toggle morphs sun/moon with a circular reveal.
- Switched `ViewTransitions` to `ClientRouter`; theme is re-applied on each client-side swap; page scripts init on `astro:page-load`.

**Checks run (2026-10-19, Windows 11, Node 24, local `astro preview`)**
- `npm run build`: passes (4 pages).
- `npx tsc --noEmit`: 3 errors in `src/components/Avatar.tsx` (ref typing, lines 121/143/144) that predate this change.
- Playwright (Chromium) script: no console/page errors; no horizontal overflow at 375px or 1440px, light and dark, on /, /projects, /about, /404; feed advances and pauses; theme persists across client navigation; `?lang=python` deep link filters correctly; mobile menu Escape returns focus; reduced motion keeps the feed static; with JS disabled all content is visible.
- Not run: Lighthouse, automated axe audit, real-device touch testing, 200% zoom.

**Next**
- Owner approval of new copy (see `docs/content-checklist.md`).
- Fix the pre-existing `Avatar.tsx` type errors.
