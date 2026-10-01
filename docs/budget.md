# Budget — Hosting & Services

Last verified: 2026-10-01. All amounts are planning allowances, not confirmed quotes.

## Current spend

**$0/month** — development only, nothing deployed yet.

## Target architecture (Option A from plan.md)

| Service | Provider | Plan | Cost estimate | Status |
|---------|----------|------|---------------|--------|
| Static portfolio hosting | Cloudflare Pages | Free tier | $0 | Not deployed |
| Domain | TBD (Cloudflare Registrar recommended) | Annual | $10–20/year | Not purchased |
| Backend hosting (optional) | Render | Free web service | $0 (cold-start caveat) | Not deployed |

## Cloudflare Pages free tier (checked 2026-10-01)

- 500 builds/month
- 20,000 files/site
- 25 MiB max per asset
- 100 custom domains/project
- Pages Functions billed separately (Workers quotas)

**Verdict:** Sufficient for the static portfolio and browser demos. No backend support.

## Render free tier caveats

- Free web services sleep after 15 minutes idle; cold-start ~60 seconds
- Ephemeral filesystem: local SQLite and uploads do not survive restarts
- Free PostgreSQL expires after 30 days — not suitable for permanent portfolio data
- 750 free instance hours/month across all services in workspace

**Verdict:** Acceptable for a disposable showcase backend with explicit cold-start notice. Not for persistent data.

## Excluded from current scope

- Paid LLM or avatar SaaS
- Kubernetes / Redis / message broker
- Periodic pings to hide sleep behavior (not permitted per AGENTS.md)

## When to revisit

- Before deploying any live backend: verify Render free-tier quotas at that date
- Before domain purchase: compare Cloudflare Registrar vs Namecheap renewal prices
- If adding a VPS: size after measuring memory usage of all services together (2–4 GB RAM starting estimate only)
