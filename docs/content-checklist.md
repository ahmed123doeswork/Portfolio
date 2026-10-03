# Content Checklist — Items Needing Owner Confirmation

Items below must be resolved before production deployment. Draft placeholders are used in code.

## Identity

| Field | Status | Notes |
|-------|--------|-------|
| Full legal name | ⚠️ Draft | Only first name "Ahmed" confirmed. Last name needed for full display. |
| Personal GitHub URL | ⚠️ Missing | No GitHub URL found in resume. Add to `src/content/profile.ts` → `github`. |
| Preferred contact email | ⚠️ Pending | Resume lists `ahm3dxb@gmail.com`; work email `ahmed@studynetglobal.com` is used. Confirm which to publish. |
| Site canonical URL | ⚠️ Draft | Set to `https://ahmed.dev` as placeholder. Update in `astro.config.ts` → `site`. |
| LinkedIn URL | ✅ Confirmed | `https://www.linkedin.com/in/onlyahmed/` — from resume. |

## Professional content

| Item | Status | Notes |
|------|--------|-------|
| Professional headline | ⚠️ Draft | Current: "PHP · Python · JavaScript developer". Confirm wording. |
| Summary paragraph | ⚠️ Draft | Derived from resume. Owner should review and approve before publishing. |
| Employer project descriptions | ⚠️ Pending | Scholly / Bitrix24 / CRM work is described using resume wording. Confirm no confidential details exposed. |
| Experience bullet points | ⚠️ Pending | Copied verbatim from resume. Owner to confirm accuracy and disclosure limits. |

## Projects

| Item | Status |
|------|--------|
| WorkflowDesk case study | 🟡 Hosted demo and source linked; a written case study page (problem, tradeoffs, limitations) is still to do |
| DataBridge Inspector case study | 🔴 Not started — only card stub exists |
| TimeSlot case study | 🔴 Not started — only card stub exists |
| Any existing GitHub project URL | ⚠️ Missing — resume shows a collaborator repo (Tonmoy-saha18/Musicity), not owner repo |

## Legal / privacy

| Item | Status |
|------|--------|
| Phone number display | ⚠️ Omitted from site — available in resume only. Confirm if it should appear. |
| Photo consent | ✅ Owner provided the photo. |
| Resume download link | ✅ Resume is served from `/public/assets/Resume.pdf`. |

## Before going live

- [ ] Confirm full name
- [ ] Add personal GitHub URL (or set to `null` to hide link)
- [ ] Confirm preferred public email
- [ ] Register domain and update `astro.config.ts` + `public/robots.txt`
- [ ] Review and approve all copy in `src/content/profile.ts`
- [ ] Confirm that employer project descriptions do not disclose confidential details
