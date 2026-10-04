# Portfolio Build Progress

Last updated: 2026-10-04 (DataBridge Inspector hosted demo and source linked)

## Phase status

| Phase | Status | Evidence |
|-------|--------|----------|
| 0. Grounding | ✅ Complete | Resume extracted; content gaps documented; hosting plan noted |
| 1. Portfolio shell | 🟡 In progress | All pages scaffolded; dependencies not yet installed |
| 2. Avatar and browser demo | 🟡 Partial | Avatar component built; browser demo for projects not started |
| 3. WorkflowDesk | 🟢 Hosted demo and public source linked (2026-10-03) | Linked from /projects and home. Hosted app runs in browser mode (no server calls, checked in headless Chrome). Repo is public; its latest CI run passed (GitHub Actions API); 66 backend tests per its README, not re-run locally (no PHP installed here). No live API is hosted |
| 4. DataBridge | 🟢 Hosted demo and public source linked (2026-10-04) | Linked from /projects and home. Hosted app is a deployed React/Vite SPA (verified: served HTML references a built `index-*.js`/`index-*.css` bundle); demo runs in browser mode on synthetic fixtures. Repo is public (verified via GitHub API: `private: false`). FastAPI backend source and tests not yet re-run locally |
| 5. TimeSlot | 🔴 Not started | |
| 6. Publication | 🔴 Not started | |

## What's built

### Phase 0 — Grounding
- [x] Resume extracted and parsed: name, experience, skills, education all captured
- [x] Content gaps documented in `docs/content-checklist.md`
- [x] Profile data written to `src/content/profile.ts` with explicit DRAFT markers
- [x] Profile photo copied to `public/assets/profile.png`
- [x] Resume copied to `public/assets/Resume.pdf`

### Phase 1 — Portfolio shell
- [x] Astro project scaffolded (`package.json`, `astro.config.ts`, `tsconfig.json`)
- [x] Design tokens (`src/styles/tokens.css`) — midnight/periwinkle palette, Plus Jakarta Sans + JetBrains Mono, light/dark themes
- [x] Global CSS (`src/styles/global.css`) — reset, editorial typography, buttons, badges, cards
- [x] `BaseLayout.astro` — HTML shell, SEO meta, OG tags, skip link, theme flash prevention
- [x] `Nav.astro` — sticky nav with mobile hamburger, keyboard accessible
- [x] `Footer.astro` — social links from profile data
- [x] `ThemeToggle.tsx` — light/dark persisted in localStorage, SSR-safe
- [x] `Avatar.tsx` — state machine (idle/greeting/guiding/speaking/paused/collapsed), guide panel with 5 topics, screen reader announcements, Escape dismissal, IntersectionObserver pause
- [x] `src/pages/index.astro` — redesigned: large display hero, editorial skills table, "Currently" spotlight, horizontal-rule project list, clean contact section
- [x] `src/pages/about.astro` — redesigned: editorial two-column timeline, skills table, education list, no card-everywhere
- [x] `src/pages/projects/index.astro` — redesigned: horizontal-rule list layout, no card grid
- [x] `src/pages/404.astro` — useful not-found page
- [x] `public/favicon.svg` — teal "A" monogram
- [x] `public/robots.txt`
- [x] `.gitignore`, `.env.example`

## Content gaps (see docs/content-checklist.md)

1. Full last name — only "Ahmed" confirmed
2. Personal GitHub URL — not in resume; `github` field is `null`, link is hidden
3. Preferred public email — work email used as default; confirm
4. Canonical site URL — placeholder `https://ahmed.dev` in astro.config.ts

## Assumptions

- Email used: `ahmed@studynetglobal.com` (from system context). Personal `ahm3dxb@gmail.com` also in resume; owner to confirm.
- The resume states "Mid-Level PHP Developer". The site describes Ahmed as "PHP · Python · JavaScript developer" without an explicit seniority claim, consistent with AGENTS.md constraint.
- Employer work (Scholly, Bitrix24 integration, CRM) described using resume wording only. Owner to confirm no confidential disclosure before publishing.
- Projects section shows three cards marked "In development" — no fake links or descriptions used.

## Next concrete actions

1. Run `npm install` in the Portfolio directory to install Astro and dependencies.
2. Run `npm run dev` and verify all pages render correctly.
3. Resolve the two blocking content gaps (last name, GitHub URL) with owner.
4. Begin Phase 3: WorkflowDesk Laravel backend.

## Checks pending

- [ ] `npm run dev` — dev server not yet launched (dependencies not installed at time of writing)
- [ ] `npm run build` — production build not verified
- [ ] Keyboard navigation manual test
- [ ] Light/dark theme manual test
- [ ] Mobile layout manual test (360 px viewport)
- [ ] Avatar Escape dismissal and focus management
- [ ] Reduced-motion (check with prefers-reduced-motion: reduce)
