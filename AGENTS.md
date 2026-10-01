# Codex instructions — Senior Software Engineer Portfolio

This document is provided as `agent.md` and `AGENTS.md` with identical contents. Codex discovers `AGENTS.md` automatically when it is placed in the repository root. Keep both copies synchronized after editing instructions.

## Mission

Implement the portfolio described in `plan.md`. The outcome is a professional, interactive website, an accessible animated portfolio guide, and credible multi-language project demonstrations. Optimize for recruiting usefulness, honest technical evidence, small recurring cost, and maintainable implementation.

Read the plan before coding. Current task scope controls which phases to implement. When the user authorizes the complete build, work through its phases; when they request an individual phase, finish that phase without assuming unrelated purchases or publication.

## Grounding and workflow

1. Inspect the repository, existing instructions, package manifests, and available tools. Preserve unrelated work. Use existing coherent infrastructure where possible.
2. Create `docs/progress.md` recording phase status, assumptions, content gaps, checks, and the next concrete action.
3. Default to Astro static output with TypeScript and React islands. Use supported stable versions, verify official compatibility documentation when selecting dependencies, and commit a lockfile.
4. Implement one functional visitor journey at a time. Keep the site runnable between phases. Finish the portfolio shell before scaffolding every backend.
5. Make reversible implementation decisions autonomously. Missing identity details do not block local development; use explicit draft configuration and hide unavailable links.
6. Keep changes scoped. Do not replace existing projects, delete data, rewrite history, or add subscriptions without task authorization.
7. Check relevant code and browser behavior before reporting completion. Report actual commands and results, including skipped checks and their reason.
8. Update progress and documentation when implementation changes the plan. Do not mark a checklist complete merely because a component exists.

Do not purchase a domain, enter a paid plan, connect an employer system, or change public DNS under this implementation brief alone. Prepare deployment artifacts and exact instructions. Publish only when the user's active task authorizes publication and the essential profile content is approved.

## Default stack and boundaries

- Portfolio: Astro static build, strict TypeScript, React islands for avatar/filter/demo components.
- Content: validated structured metadata and Markdown; no runtime CMS/database required.
- Styling: design tokens, responsive layout, light/dark themes, restrained accent.
- Avatar: original SVG plus CSS/React behavior; no paid AI API.
- Projects: Laravel/PHP + Vue/TypeScript, FastAPI/Python + React/TypeScript, ASP.NET Core/C# + React/TypeScript.
- Backend databases: MySQL for Laravel, PostgreSQL for TimeSlot. DataBridge can process bounded fixtures in memory.
- Deploy portfolio and browser demos as static assets on Cloudflare Pages by default. Keep source portable to another static host.
- Authentic backends live in independent repositories when available; develop locally with reproducible container setup. Do not create remote repositories without the relevant authorization.
- No microservice framework, Kubernetes, Redis, message broker, LLM, vector store, or user-account system for the portfolio unless a specific demonstrated requirement warrants it.

The static portfolio must not require an always-on Node process. Cloudflare static hosting must not be represented as a general Laravel or ASP.NET server. Choose a real compatible runtime for live backends.

## Design and content

- Convey the owner’s technical focus in the first viewport. Projects and contact actions are always visible independently of the avatar.
- Build responsive home, project index, case studies, about, contact section, and useful 404.
- Use clean typography, generous spacing, consistent spacing/color tokens, and modest motion.
- Avoid fake skill percentages, meaningless counters, invented testimonials, and decorative controls that do nothing.
- Configure identity in one validated source. Draft placeholders are acceptable locally, but essential unresolved identity fields block production readiness.
- Never invent employment dates, title, seniority, years of experience, business impact, qualifications, repository links, or resume contents.
- Distinguish professional work, independent demonstrations, and work in progress. Use only owner-approved descriptions of employer work.
- Never include private CRM data, employer source, student records, access tokens, private endpoints, or screenshots containing personal data.
- Hide missing resume/contact/source actions or show an explicit unavailable state. Never use `href="#"` as a pretend link.
- Case studies explain problem, constraints, implementation, tradeoffs, contribution boundaries, testing, and limitations.

## Avatar implementation contract

Build an accessible React island with explicit `idle`, `greeting`, `guiding`, `speaking`, `paused`, and `collapsed` states.

Required behavior:
- Gentle idle movement and blink; bounded pointer tracking only for fine-pointer devices.
- Clearly labelled button opens a guide with Introduction, Backend Projects, Architecture, Quick Tour, and Contact topics.
- Deterministic approved answers with direct links. No free-text LLM or invented answer generation.
- A speaking animation when an answer is shown; no implication that a microphone is listening.
- Keyboard activation, Escape dismissal, sensible focus management, and response announcements.
- Pause/collapse controls, reduced-motion support, mobile layout, and persisted user preferences.
- Cancel timers and animation frames on unmount. Pause background work when hidden/offscreen.
- Optional user-triggered speech synthesis must degrade to readable text; no autoplay audio.
- No camera/microphone request, paid character SDK, externally required animation service, or heavy 3D library in v1.

Essential project/profile content must remain accessible when the avatar is disabled or JavaScript fails. The guide must not cover mobile navigation or CTAs.

## Project and demo contracts

Build the projects in the order in `plan.md`; each needs a functional browser simulation and genuine language-specific backend code before it is labelled complete.

### WorkflowDesk
- Enquiry list/detail, assignment, state transitions, audit history, and retained pagination/filter position.
- Backend-enforced role/tenant checks, transactional changes, stale-update handling.
- Verify forbidden mutations, cross-tenant reads, invalid transitions, and audit correctness.

### DataBridge Inspector
- Synthetic CSV mapping, validation, explainable duplicate detection, normalization preview, reviewed export.
- Preserve originals; flag ambiguous contacts; do not invent country codes.
- Limit upload size/rows; safe CSV export; no default server retention.
- Verify ambiguous data, malicious formula cells, invalid schemas, and excessive input.

### TimeSlot
- Explicit timezone displays, booking/cancel/reschedule, UTC instants with IANA zone identifiers.
- Database-backed conflict protection, idempotent requests, atomic rescheduling.
- Test daylight-saving boundaries, concurrent booking, retries, and rollback on failed rescheduling.

### Demo modes
- Typed service adapters expose `browser`, `live`, and `unavailable` modes.
- Browser simulation uses synthetic fixtures and bounded local state with Reset Demo.
- Live mode uses the actual backend. Configure endpoint URLs per project and validate responses.
- Always display the mode. Never silently switch a failed API call to a successful fixture response.
- On live failure, show an error and explicit browser-simulation action. Avoid blocking portfolio rendering on API availability.
- Source links and local startup instructions demonstrate the authentic implementation; simulation alone is not backend proof.
- Shared public data is read-only. If writes are enabled, isolate and expire demo sessions; prevent outbound messaging and uncontrolled storage growth.

## Security and budget

- Secrets stay server-side and out of committed files/static bundles. Use `.env.example` with placeholders.
- Validate backend inputs and outputs; enforce authorization server-side; rate-limit public write endpoints; use explicit CORS origins.
- Use synthetic seed data. Do not call real Scholly, StudyLink, CRM, SES, WhatsApp, or employer services.
- Start with free static hosting and no paid avatar service. Domain purchase is optional until release.
- Treat the supplied shared-hosting image as an incomplete capability list. It does not establish price, CPU/RAM, .NET, Docker, or reliable worker support.
- Recheck provider limits at deployment and record them in `docs/budget.md`. Label estimates as estimates.
- Render free backends may sleep; local files are ephemeral and free Postgres expires after 30 days. Do not store lasting portfolio content there.
- No periodic pings to conceal provider sleep behavior. No automatic paid upgrade or uncontrolled billable integration.

## Tooling and checks

Expose documented package scripts for development, lint/type checks, tests, build, and preview. Choose one package manager and retain its lockfile.

A representative portfolio check sequence, once those scripts exist:
1. Clean dependency install using the lockfile.
2. Lint and strict type/content checks.
3. Relevant unit/component tests.
4. Production static build.
5. Playwright smoke journeys and accessibility checks against the built preview.

Test important behavior rather than duplicating implementation. Cover filters/URL state, avatar keyboard flow, reduced motion, demo reset, live failure, and direct case-study routes. Backend tests must cover their listed domain and failure cases; use isolated actual databases for concurrency/transaction constraints.

Manually inspect phone/tablet/desktop, light/dark mode, 200% zoom, keyboard focus, touch, and layout with long content. Record performance under a stated environment. Aim for the budgets in `plan.md`; never fabricate Lighthouse or field metrics.

If execution tools lack a required runtime/browser, finish independent work, document the limitation and precise command to verify later, and do not claim the check passed.

## Delivery documentation

Maintain:
- `README.md`: prerequisites, setup, scripts, preview, content editing, and demo modes.
- `docs/progress.md`: evidence-backed phase status and remaining work.
- `docs/architecture.md`: site boundaries, avatar state model, demo adapters.
- `docs/decisions/`: short records of consequential tradeoffs.
- `docs/deployment.md`: exact output directory/build command, DNS/TLS, environment configuration, rollback.
- `docs/budget.md`: recurring services, estimates vs confirmed quotes, quota checks, date verified.
- `docs/content-checklist.md`: personal details and professional descriptions needing approval.

At each handover state what works, how to run it, what was verified, and what remains. Do not describe infrastructure, unavailable demos, unapproved content, or untested deployment as complete.

## Definition of done

The authorized phase is finished when its plan exit conditions pass and documentation reflects actual behavior. Full showcase completion additionally requires all three independent projects, honest source/demo links, accessible avatar interactions, functioning browser fallback paths, approved profile content, static-host deployment instructions, and successful relevant checks.
