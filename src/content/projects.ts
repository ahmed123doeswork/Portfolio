// Project metadata shared by the home page and /projects.
// Descriptions must stay factual: only behaviour that exists in each repository.
import type { IconName } from '../components/icons.ts';
import {
  WORKFLOWDESK_DEMO_URL, WORKFLOWDESK_SOURCE_URL,
  DATABRIDGE_DEMO_URL, DATABRIDGE_SOURCE_URL,
  TIMESLOT_DEMO_URL, TIMESLOT_SOURCE_URL,
  JOBHUNT_SOURCE_URL,
  MUSICITY_SOURCE_URL,
} from './profile.ts';

/** demo: hosted browser demo · local: open source, runs on the user's machine · team: contributor to someone else's repo */
export type ProjectStatus = 'demo' | 'local' | 'team';

export type Language = 'C#' | 'Python' | 'PHP' | 'TypeScript' | 'JavaScript';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  icon: IconName;
  status: ProjectStatus;
  demoUrl: string | null;
  sourceUrl: string | null;
  languages: Language[];
  stack: string[];
  /** One or two sentences for the home page list. */
  summary: string;
  description: string;
  highlights: string[];
  demoNote: string;
  limitations?: string;
  isNew?: boolean;
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  demo: 'Hosted demo',
  local: 'Open source, runs locally',
  team: 'Team contribution',
};

export const PROJECTS: Project[] = [
  {
    id: 'jobhunt',
    name: 'Job Hunt',
    tagline: 'ATS-friendly CV builder and job search',
    icon: 'briefcase',
    status: 'local',
    demoUrl: null,
    sourceUrl: JOBHUNT_SOURCE_URL,
    languages: ['Python', 'JavaScript'],
    stack: ['Python', 'SQLite', 'JavaScript', 'HTML/CSS', 'BeautifulSoup'],
    isNew: true,
    summary:
      'A free, open-source app that builds an ATS-friendly CV, scores it, then searches LinkedIn, BDjobs, Remotive and Jobicy and ranks every job by how well it fits you.',
    description:
      'A free, open-source app for job seekers that runs on their own computer. It walks them through building a CV, scores it from 0 to 100 the way applicant tracking systems read it, then searches four job sites at once and ranks the results by fit. It is built for freshers and anyone who finds writing a CV hard.',
    highlights: [
      'Step-by-step CV builder with a live preview. The ATS check flags missing contact details, bullets without action verbs or numbers, too few skills and missing dates, and each item has a Fix button',
      'Exports a single-column PDF (fpdf2) or Word file (python-docx) with standard headings and real text that ATS software can parse',
      'One search covers LinkedIn, BDjobs, Remotive and Jobicy. Each site is its own module behind a common fetch interface, so adding a site means one new file and a registration',
      'Explainable matching: jobs at the wrong level, in the wrong city or containing excluded words are skipped and the reason is recorded; the rest get a 0–100 score from role match, skill overlap, level fit and eligibility',
      'Tracks each job through saved, applied, interview, rejected and hidden, with notes, in a local SQLite database that adds new columns to its own schema on startup',
      'Private by design: a Python standard-library HTTP server on localhost, no account, no uploads, and a one-click script that makes a shareable copy without the user’s CV or saved jobs',
      'Built-in delays between requests keep the load on each job site low',
    ],
    demoNote:
      'There is no hosted demo. The app runs on your own computer so your CV never leaves it. On Windows, download the repository and double-click Start Job Hunt.bat; the README has the macOS and Linux steps. Screenshots use a fictional profile and sample listings.',
    limitations:
      'The job-site scrapers depend on each site’s public pages and need updating when their markup changes. The repository does not yet include an automated test suite.',
  },
  {
    id: 'workflowdesk',
    name: 'WorkflowDesk',
    tagline: 'Multi-tenant enquiry queue',
    icon: 'inbox',
    status: 'demo',
    demoUrl: WORKFLOWDESK_DEMO_URL,
    sourceUrl: WORKFLOWDESK_SOURCE_URL,
    languages: ['PHP', 'TypeScript'],
    stack: ['PHP', 'Laravel', 'Vue', 'TypeScript', 'MySQL'],
    summary:
      'Multi-tenant enquiry queue with tenant isolation, optimistic locking, a tamper-evident audit log and business-hours SLA tracking. Laravel API, Vue front end.',
    description:
      'A multi-tenant enquiry queue for admissions and support teams: a Laravel 13 API with a Vue 3 and TypeScript front end. It is built around what enterprise teams ask about: tenant isolation, concurrent edits, an auditable history and SLA deadlines.',
    highlights: [
      'Two synthetic organisations with admin, counsellor and viewer roles. Every query is scoped to the caller’s organisation, so another organisation’s record returns 404',
      'Optimistic locking over HTTP: each change needs an If-Match header, and a stale write gets a 412 and overwrites nothing',
      'Tamper-evident audit log: each entry hashes the one before it, is written in the same transaction as the change, and a database trigger blocks edits and deletes. An endpoint verifies the chain',
      'SLA engine: deadlines follow each organisation’s business hours and time zone, including daylight-saving changes, and a scheduled command flags enquiries that are at risk or breached',
      '66 backend tests run against a real MySQL 8.4 in CI, and architecture decision records explain the non-obvious choices',
      'The front end talks to the API through a typed adapter with live, browser-demo and unavailable modes',
    ],
    demoNote:
      'The hosted demo runs entirely in your browser on built-in sample data and makes no server calls. The Laravel API, its tests and its decision records are in the repository, and run locally with the steps in its README. Pick any demo account on the sign-in page, then press Sign in.',
  },
  {
    id: 'databridge',
    name: 'DataBridge Inspector',
    tagline: 'CSV contact clean-up with explainable duplicates',
    icon: 'sheet',
    status: 'demo',
    demoUrl: DATABRIDGE_DEMO_URL,
    sourceUrl: DATABRIDGE_SOURCE_URL,
    languages: ['Python', 'TypeScript'],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript'],
    summary:
      'CSV contact normalisation with explainable duplicate detection, field validation, a normalisation preview and safe export. Input limits enforced; originals preserved.',
    description:
      'Contact data normalisation tool that maps CSV columns, validates required fields, detects and explains duplicates, and exports a cleaned file. Input limits enforced; original values always preserved alongside proposed changes.',
    highlights: [
      'Explainable duplicate detection with reasons',
      'Field-level normalisation preview before export',
      'Safe CSV export with formula injection protection',
      'File-size and row-count limits enforced',
    ],
    demoNote:
      'The hosted demo runs in your browser on synthetic sample data. The FastAPI backend and its source are in the repository and run locally with the steps in its README.',
  },
  {
    id: 'timeslot',
    name: 'TimeSlot',
    tagline: 'Timezone-aware appointment booking',
    icon: 'calendar-clock',
    status: 'demo',
    demoUrl: TIMESLOT_DEMO_URL,
    sourceUrl: TIMESLOT_SOURCE_URL,
    languages: ['C#', 'TypeScript'],
    stack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL'],
    summary:
      'Timezone-aware booking with UTC storage, IANA zone identifiers, database-level conflict protection, and idempotent, atomic rescheduling.',
    description:
      'Timezone-aware appointment booking that stores UTC instants with IANA zone identifiers, prevents overlapping bookings via database constraints, and implements idempotent booking and atomic rescheduling.',
    highlights: [
      'UTC storage with IANA zone identity displayed to user',
      'Database-level concurrency protection for bookings',
      'Idempotent booking keys for safe retries',
      'Atomic rescheduling: old slot closed, new slot opened in one transaction',
    ],
    demoNote:
      'The hosted demo runs in your browser on synthetic sample data. The ASP.NET Core backend and its source are in the repository and run locally with the steps in its README.',
  },
  {
    id: 'musicity',
    name: 'Musicity',
    tagline: 'Music platform (5-person team project)',
    icon: 'music',
    status: 'team',
    demoUrl: null,
    sourceUrl: MUSICITY_SOURCE_URL,
    languages: ['PHP', 'JavaScript'],
    stack: ['PHP', 'JavaScript', 'CSS'],
    summary:
      'A 5-person team project: a music platform where creators upload tracks and listeners stream free previews or buy premium songs.',
    description:
      'A 5-person team project: a music platform where creators upload tracks and listeners stream free previews or buy premium songs. Contributed across several front-end and back-end features as part of the team.',
    highlights: [],
    demoNote:
      'This is a teammate’s repository (Tonmoy-saha18), not an independently owned project. It is shown as a collaborative contribution, not a solo build. No hosted demo exists.',
  },
];

export const LANGUAGES: Language[] = ['C#', 'Python', 'PHP', 'TypeScript', 'JavaScript'];

export const languageSlug = (l: Language) => l.toLowerCase().replace('#', 'sharp');
