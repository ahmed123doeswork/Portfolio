# Senior Software Engineer Portfolio — Build Plan

Prepared: 1 October 2026. Status: implementation brief; no hosting or domain purchased.

## 1. Goal and positioning

Build a polished, interactive personal portfolio that helps recruiters and engineering managers assess readiness for Senior Software Engineer roles. Show technical ownership, architecture decisions, reliability, testing, delivery, and clear communication alongside practical experience in several languages and frameworks.

Suggested positioning, subject to the owner's confirmation:
> Software engineer building reliable business applications, integrations, and data workflows.

The owner has experience in CRM development, integrations, infrastructure, and QA leadership. Use these areas as inspiration, but obtain approved wording before publishing employer work. Do not infer years of experience, job titles, project ownership, performance results, or seniority. Distinguish professional work from independently built demonstrations.

Success means a visitor can identify the owner's strengths in 30 seconds, explore a meaningful demo in two minutes, and find technical evidence and contact details without speaking to the avatar.

## 2. Scope and priorities

### P0: portfolio release
- Responsive, accessible portfolio, public project case studies, interactive avatar, working project filters, contact links, theme preference, SEO, and deployment instructions.
- One completed flagship project with a reproducible backend and browser demo.
- Other projects appear only if meaningful content exists; label incomplete work as in development, and never supply fake demo links.
- Static content and browser demos work without a paid backend or third-party AI.

### P1: complete showcase
- Three finished flagship projects across PHP, Python, and C#, with TypeScript used for the portfolio and interactive frontends.
- Each project has source code, architecture notes, tests, screenshots, and a short walkthrough.
- Add live backend hosting selectively if it improves the interview experience.

### P2: optional enhancements
- Small Node.js/TypeScript integration project, technical articles, optional lightweight 3D avatar, privacy-conscious analytics, optional contact form.
- Paid LLM chat, voice input, vector databases, Kubernetes, and elaborate microservices are outside the initial scope.

## 3. Recommended architecture

| Layer | Choice | Reason |
| --- | --- | --- |
| Portfolio | Astro static output, TypeScript, React islands | Searchable HTML with interactivity limited to components that need it |
| Styling | CSS variables and scoped CSS; optional utility CSS if it reduces work | Consistent visual system with a small dependency footprint |
| Content | Validated JSON/TypeScript plus Markdown case studies | No CMS subscription or always-on database |
| Avatar | React component with an original SVG character and CSS animation | Interactive, inexpensive, accessible, and easy to customize |
| Demo frontends | React + TypeScript for .NET and Python; Vue + TypeScript for Laravel | Useful framework breadth tied to real applications |
| Backend development | Independent applications, Docker Compose for local orchestration | Languages stay authentic without creating a distributed dependency chain |
| Hosting | Static portfolio and browser demos on Cloudflare Pages; optional backend host | Portfolio remains available when a demo backend sleeps |
| Delivery | GitHub repositories and CI | Reviewable source, checks, and repeatable builds |

Pin supported stable versions and compatible dependencies when implementation starts. Do not use prerelease packages by default. The portfolio must build to static files; no server-only endpoints, runtime database connection, or SSR dependency in its default build.

Keep a portfolio repository separate from flagship repositories. Share design conventions and API contracts, not databases or runtime coupling. Begin with the portfolio and a browser demo; scaffold backend repositories only when their phase starts.

Suggested portfolio layout:
- `src/pages/`: home, projects index, individual case-study routes, about, 404.
- `src/components/`: navigation, project cards, filters, avatar, demo shell.
- `src/content/`: approved profile, validated project metadata, case studies, guide responses.
- `src/styles/`: tokens, global styles, component styles.
- `public/`: optimized images, original avatar assets, approved resume.
- `tests/`: meaningful component and browser tests.
- `docs/`: architecture decisions, deployment, budget, content checklist, progress.

## 4. Website experience

### Visual direction
Use a professional editorial layout, generous spacing, clear typography, and one restrained accent color. Default to deep navy, neutral surfaces, and muted teal. Offer dark/light themes with sufficient contrast. Use locally hosted fonts or system fonts. Avoid a loading intro, excessive particles, scrolling gimmicks, skill percentage bars, and a full-screen avatar.

### Routes and content
1. **Home:** concise positioning, verified specialisms, featured projects, avatar, and visible View Projects / Contact actions.
2. **Projects:** filter by language, framework, and engineering theme; encode filters in the URL; useful empty state and reset.
3. **Project case study:** problem, constraints, contribution, implementation, architecture, alternatives, tradeoffs, test evidence, known limitations, source, and demo.
4. **About:** approved experience timeline, technical ownership examples, approach to mentoring/review/QA, resume if supplied.
5. **Contact:** verified email, GitHub, and LinkedIn. Use mailto initially. Never claim a message was sent without a functioning endpoint.

Use `PROFILE_NAME`, `PROFILE_EMAIL`, `GITHUB_URL`, `LINKEDIN_URL`, and `RESUME_PATH` as clearly marked draft configuration. Hide unavailable links rather than rendering `#` or fake URLs. Show development placeholders only in development; unresolved essential identity content blocks production readiness.

### Recruiter interactions
- Project filters and search operate on validated metadata.
- A "Start a two-minute tour" action highlights the strongest case study and explains where to find architecture and test evidence.
- Keyboard access, obvious focus states, responsive navigation, shareable project URLs.
- Each demo includes three sample scenarios, Reset Demo, and a visible mode badge.
- No login required to explore the portfolio or its browser simulations.

## 5. Interactive avatar specification

The avatar is a helpful portfolio guide, not a paid chatbot. Initial character: original stylized engineer mascot; avoid claiming it resembles the owner until a reference is supplied. Keep character colors consistent with the site.

### Required interactions
- Idle blink and gentle breathing; bounded pointer-following eyes/head on devices with a fine pointer.
- Click or keyboard activation opens a compact guide panel; show a text label such as "Portfolio guide".
- Buttons: "Introduce yourself", "Show backend projects", "Explain an architecture decision", "Take a quick tour", "How can I contact you?".
- Answers are deterministic, sourced from approved site content, and link to the relevant section or case study.
- Selecting a question plays a brief speaking animation. It must not imply actual microphone listening.
- Collapse, pause animation, and mute controls; persist preferences locally.
- Mobile: smaller avatar, tap interactions, no overlap with navigation or contact actions.

### State model
`idle`, `greeting`, `guiding`, `speaking`, `paused`, `collapsed`.

Use explicit events and transitions. Cancel outstanding timers and animation frames when the panel closes or the component unmounts. Pause when the page is hidden or avatar is offscreen. Pointer tracking must be throttled through requestAnimationFrame and change transforms rather than layout properties.

### Accessibility and cost
- The essential content exists outside the avatar and is readable without JavaScript.
- Honor `prefers-reduced-motion`; disable tracking and continuous animations in that mode.
- Manage panel focus, support Escape, restore focus to the trigger, and announce responses politely without repeating them.
- No autoplay audio, no camera access, and no microphone permission request.
- Optional browser speech synthesis only after an explicit Speak action; text stays available if unsupported.
- No external model API, avatar SaaS subscription, or paid asset required for v1.
- Optional 3D is a later opt-in enhancement with lazy loading and a static SVG fallback; do not delay launch for it.

## 6. Flagship projects

Build small but complete slices of business applications. Three deep case studies are more useful than many unfinished CRUD tutorials.

| Project | Languages and frameworks | Interactive scenario | Senior engineering evidence |
| --- | --- | --- | --- |
| WorkflowDesk | PHP/Laravel, Vue/TypeScript, MySQL | Assign an enquiry, advance its state, inspect audit history | Server-enforced tenant boundaries and roles, transactions, pagination, conflict handling |
| DataBridge Inspector | Python/FastAPI, React/TypeScript | Load synthetic CSV data, normalize contact fields, review duplicates, export results | Validation rules, explainable decisions, input limits, deterministic tests |
| TimeSlot | C#/ASP.NET Core, React/TypeScript, PostgreSQL | Book across time zones, simulate a conflict, reschedule | UTC storage plus IANA zone identity, concurrency, idempotency, cancellation semantics |

### A. WorkflowDesk — build first
Scope: two synthetic organizations; admin, counsellor, and viewer roles; enquiry list and detail; assignment; allowed state transitions; audit history; filters and pagination that retain position.

Implement role and tenant checks in the backend, not only in the UI. Use a transaction for state changes and audit entries. Show a stale-update conflict rather than silently overwriting. Exclude real outbound email, payments, and actual student data.

Acceptance: viewer cannot mutate through direct API calls; tenant A cannot access tenant B records; invalid transition is rejected; audit event records actor and change; returning from detail retains list filters/page.

### B. DataBridge Inspector
Scope: select supplied synthetic CSV fixtures, map columns, validate required fields, flag duplicates, suggest contact normalization, review proposed changes, export a cleaned CSV and error report.

Preserve original values and report uncertainty. Never guess country codes from ambiguous numbers. Set file size/row count limits; validate content; neutralize spreadsheet formula injection in exported cells. Default to browser fixtures; backend uploads are processed in memory with no retention unless explicitly designed and documented otherwise.

Acceptance: duplicates have reasons; ambiguous contacts are flagged; invalid columns yield useful errors; export matches reviewed changes; malicious formula cells are escaped; excessive input is rejected.

### C. TimeSlot
Scope: choose a sample student's and counsellor's time zones, find available slots, book, cancel, and reschedule. Use UTC instants plus time-zone identifiers. Display the viewer zone and original appointment zone explicitly.

Use database constraints/transactions to prevent overlapping bookings. Repeated requests with an idempotency key return the same result. Rescheduling closes the old booking and creates the new one atomically. Inject the clock for repeatable tests.

Acceptance: two concurrent bookings cannot both reserve the same slot; daylight-saving gaps/overlaps are handled explicitly; cancellation and retries behave consistently; rescheduling cannot leave a half-completed change.

### Optional D. WebhookLab
Node.js/TypeScript integration receiver with signed synthetic events, timestamp/replay checks, idempotency, bounded retries, failed-event inspection, and replay. Use a local simulator instead of real StudyLink, WhatsApp, or employer credentials. Add only after the first three case studies are finished.

### Evidence pack for every project
- README with prerequisites, exact startup/test commands, seeded credentials where relevant, and a three-minute demo script.
- System diagram and two short architecture decision records explaining alternatives.
- Relevant API documentation, migrations, synthetic seed data, `.env.example`, and container instructions.
- Tests exercising important failure paths, plus CI results.
- Approved screenshots and a 60–120 second recording if feasible.
- Honest limitations and a measured result only when the measurement method and environment are documented.

## 7. Demo strategy and runtime boundaries

Every project card distinguishes these modes:
1. **Browser simulation:** interactive synthetic fixtures, state held in memory/localStorage. Clearly label it "Browser simulation — no backend".
2. **Live API demo:** browser calls the real language-specific backend; show a badge only when configured and operational.
3. **Local full stack:** reproducible repository and Docker Compose instructions demonstrating the genuine backend implementation.

Do not describe browser simulations as proof of backend execution. Use typed adapters with matching DTOs and shared contract fixtures, but implement each backend's real rules in its own language. Browser mode must not require an API key or account.

Live failures must show an honest message and a separate "Open browser simulation" action. Never silently substitute fake responses for a failing live backend. The portfolio itself does not wait for backend health checks.

For public live demos: read-only seeded tours by default. If write interactions are enabled, create isolated, bounded demo sessions with expiry/reset. Never let arbitrary visitors alter shared showcase data or send outbound messages. Limit request sizes and rate, and constrain CORS to approved origins. Avoid public admin endpoints.

## 8. Hosting decision and budget

### Screenshot assessment
The supplied image advertises 5 GB NVMe, unlimited bandwidth, SSL, CloudLinux, LiteSpeed, JetBackup, cPanel, 10 MB/s I/O, five subdomains, five addon domains, five SQL databases, five branded email accounts, and Node.js/Laravel/Python apps.

It does **not** show the provider, price, renewal price, CPU, RAM, process limits, runtime versions, Docker support, or .NET support. Storage alone does not establish suitability for multiple backends. "Unlimited bandwidth" does not establish unlimited compute. Backup retention and restore availability need confirmation.

Before buying this plan, obtain:
- Annual total including VAT/tax, domain, setup fee, and renewal; cancellation/refund terms.
- CPU, RAM, entry-process and persistent-process limits, inode quota, and concurrent app limit.
- Supported PHP/Node/Python versions and Laravel/FastAPI deployment instructions; SSH, Composer, cron, and worker support.
- WebSocket/background process restrictions, database type/version, backup retention and restore terms.
- Explicit .NET support if TimeSlot is expected to run there; it is not established by the screenshot.

### Cost comparison
All amounts below are **planning allowances in USD**, not vendor quotes or currency conversions. Recheck actual checkout and renewal prices before purchase.

| Option | Expected recurring spend | Suitability and tradeoff |
| --- | --- | --- |
| A. Domain + free static hosting, local backends | Hosting $0 within free limits; reserve $10–20/year for a non-premium domain | Recommended starting point; interactive browser demos, genuine backends available locally |
| B. A + selective free Render services | Hosting can remain $0 within allowances; same domain reserve | Real API demonstrations can sleep and cold-start; not a guarantee of reliable persistent storage |
| C. A + screenshot shared plan | Unknown until quoted; plus domain unless included | Could host Laravel and possibly Python/Node; .NET and worker support unconfirmed |
| D. A + one small Linux VPS | Budget target $5–12/month, plus domain/backups/tax; not a verified offer | More runtime control for Docker and all backends, but requires administration and sizing |

Example annual allowances: A approximately $10–20; D approximately $70–164 before backup/tax extras. A VPS range is an affordability target, not a claim that a specific provider currently offers suitable capacity at that price. Measure memory use with all selected services running before choosing a size; 2–4 GB RAM is only a starting investigation range, not a guarantee.

### Recommended sequence
1. Build locally and use a free provider subdomain initially. No purchase is required to validate design.
2. Register one professional domain when the portfolio is ready. Prefer a sensible non-premium name; compare registration and renewal. Cloudflare Registrar sells at cost but requires Cloudflare nameservers.
3. Deploy static portfolio and browser demos to Cloudflare Pages. Separate demo subdomains can point to other providers; another domain purchase is unnecessary.
4. Host at most one live backend initially. Render free is suitable for a disposable showcase, with an explicit cold-start notice and browser alternative.
5. Add a persistent paid backend or a VPS only when the need and monthly budget are clear. Keep portfolio hosting independent.

### Free-tier facts checked on 1 October 2026
- Cloudflare Pages free-plan documentation lists 500 builds/month, 20,000 files/site, 25 MiB maximum per asset, and 100 custom domains/project. Pages Functions have separate Workers quotas.
- Cloudflare Workers Static Assets documentation offers free static-asset requests; Worker execution has separate quotas and billing. Static hosting does not imply Laravel/ASP.NET support.
- Render free web services sleep after 15 idle minutes and can take about a minute to restart; free instance hours are 750 per workspace/month, shared across services.
- Render free services have ephemeral filesystems. Do not rely on local SQLite or uploads surviving a restart. Free Render Postgres expires after 30 days; it is unsuitable as the portfolio's lasting database.
- Free-tier billing/overage settings and terms must be rechecked at deployment. Do not use keep-alive pings to hide sleep behavior.

For free live demos, use disposable synthetic state that can be reseeded, or separately select persistent storage after verifying its plan. Paid persistence is optional; a browser demo and local full stack already satisfy the initial release.

### Domain and deployment map
- `example.com`: portfolio; use `www` as a redirect or select it as canonical.
- `workflow.example.com`, `data.example.com`, `slots.example.com`: optional standalone demo frontends.
- `api-workflow.example.com`, etc.: optional backends on a compatible host.

These are examples, not registered names. Provider URLs work until a domain is purchased. Verify DNS and TLS independently for every host. A registrar, DNS provider, and application host can be separate services. Branded mailbox hosting is not needed for launch; use the owner's existing verified contact address.

## 9. Content and professional credibility

Before publication, collect name, preferred headline, verified role history, GitHub/LinkedIn/email, resume, approved project descriptions, contribution boundaries, and evidence for claimed outcomes.

Professional case studies can cover CRM integration, cross-branch synchronization, webhook reliability, reporting, and QA coordination if the owner approves what can be disclosed. Describe the problem and engineering decisions without exposing source, student records, credentials, private URLs, or confidential diagrams. Build independent public demos using synthetic data; do not copy employer repositories.

Use capability categories rather than unsupported proficiency ratings. Separate "professional experience", "independent project", and "currently learning". Never present a proposed project as an already completed accomplishment.

## 10. Phased delivery

Indicative schedule for one developer working roughly 8–12 hours/week: 8–12 weeks, adjusted after the first project. Publish a useful initial portfolio sooner; all projects need not be complete before launch.

| Phase | Indicative timing | Deliverable and exit condition |
| --- | --- | --- |
| 0. Grounding | First session | Inspect repo; confirm content gaps; record hosting mode and dependencies; no invented facts |
| 1. Portfolio shell | Weeks 1–2 | Responsive routes, validated content, keyboard navigation, theme, project filters; static build passes |
| 2. Avatar and browser demo | Week 3 | Guide state machine, reduced motion, functional WorkflowDesk simulation, clear mode badges |
| 3. WorkflowDesk backend | Weeks 4–5 | Laravel application, tenant/role checks, audit tests, local full stack, first complete case study |
| 4. DataBridge | Weeks 6–7 | FastAPI implementation, CSV safety tests, browser demo and evidence pack |
| 5. TimeSlot | Weeks 8–9 | ASP.NET implementation, timezone/concurrency tests, browser demo and evidence pack |
| 6. Publication and polish | Weeks 10–12 or earlier for initial release | Approved profile, verified URLs, deployment guide, mobile QA, source links, optional live API |

Work vertically: one finished visitor journey before expanding infrastructure. Keep `docs/progress.md` with completed work, evidence, remaining tasks, and the next action. Stop adding scope when the release criteria are met.

## 11. Quality and release gates

### Functional
- Filters/search/reset, direct case-study URLs, theme persistence, avatar controls, and demo reset work.
- Essential information is visible without JavaScript; no broken or pretend buttons.
- Live demo errors, browser simulation, and backend implementation are clearly distinguished.

### Accessibility and performance
- Manual keyboard checks and automated accessibility scan; target WCAG 2.2 AA.
- Test 360 px phone, tablet, desktop, 200% zoom, light/dark mode, reduced motion, and touch.
- Targets: LCP <= 2.5 seconds and CLS <= 0.1 under a documented test profile; INP <= 200 ms when field data exists. Lab tests cannot establish field INP before sufficient traffic.
- Aim for mobile Lighthouse performance >= 90 and no serious accessibility findings; record environment/results, not an unsupported universal score.
- Suggested budgets: initial compressed JavaScript <= 150 KB and avatar assets <= 200 KB; lazy-load demos. Document a justified exception rather than hiding it.

### Engineering and deployment
- Clean install, lint/type checks, tests, production build, and preview pass from documented commands.
- Cover domain rules and failure paths; do not add tests that merely reproduce implementation details.
- CI runs relevant checks; backend integration tests use real isolated databases where database behavior matters.
- Public assets contain no secrets; `.env.example` has placeholders only; synthetic fixtures are recognizable.
- Verify canonical URLs, social preview, sitemap, robots, 404, direct-route refresh, HTTPS, CSP, and contact/source links.
- Document deploy and rollback. A failed deployment must not be described as successful.

## 12. Starting instruction for Codex

Put `plan.md` and `AGENTS.md` in the repository root. `agent.md` is an identical convenience copy; `AGENTS.md` is the automatically discovered instruction file. Keep them synchronized.

Suggested prompt:
> Read AGENTS.md and plan.md. Implement Phase 0 and Phase 1, then continue to the avatar and the first browser demo. Keep a runnable static build throughout. Use draft configuration for missing personal details, record content gaps, and do not invent achievements. Follow the free-hosting architecture. Do not buy a domain or paid service. Report the preview command and completed checks.

## 13. Official references

Reviewed on 1 October 2026; quotas and prices can change. The budgets above remain planning allowances.
- Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Cloudflare Pages Functions pricing: https://developers.cloudflare.com/pages/functions/pricing/
- Cloudflare Workers Static Assets billing: https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- Cloudflare Workers pricing: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare Registrar overview: https://developers.cloudflare.com/registrar/
- Cloudflare Registrar registration/nameservers: https://developers.cloudflare.com/registrar/get-started/register-domain/
- Render free-service limits: https://render.com/docs/free
- Render paid pricing, if evaluating an upgrade: https://render.com/pricing
