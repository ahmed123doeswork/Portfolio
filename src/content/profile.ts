// ─── DRAFT CONFIGURATION ───────────────────────────────────────────────────
// Fields marked DRAFT need confirmation before production.
// See docs/content-checklist.md for what to review.

export const PROFILE = {
  // Identity — update before publishing
  firstName: 'Ahmed',
  lastName: '', // Single-name identity confirmed by owner
  headline: 'Full-Stack Software Engineer · ASP.NET Core (C#) · React · TypeScript',
  tagline: 'Building scalable, production-grade web applications with .NET and React.',

  // Contact
  email: 'ahm3dxb@gmail.com',
  phone: '+880 1577798246',
  location: 'Dhaka, Bangladesh',

  // Social — hide any that are null/empty
  linkedin: 'https://www.linkedin.com/in/onlyahmed/',
  github: 'https://github.com/ahmed123doeswork' as string | null,

  // Resume — served from public/
  resumePath: '/assets/Resume.pdf',

  // Profile image
  profileImage: '/assets/profile.png',

  summary: `Full-Stack Software Engineer with 3+ years building scalable, production-grade web applications. Specialized in ASP.NET Core (C#) and React/TypeScript — multi-tenant SaaS features, RESTful API design, RBAC, and concurrency-safe transactional systems.`,
} as const;

export const SKILLS = [
  {
    category: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['ASP.NET Core', 'Entity Framework Core', 'React.js', 'Next.js', 'FastAPI', 'Laravel'],
  },
  {
    category: 'Front-End',
    items: ['React', 'TypeScript', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Back-End',
    items: ['.NET 8', 'ASP.NET Core Web API', 'REST', 'SignalR', 'Middleware pipelines'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Entity Framework Migrations'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'Postman', 'Jira', 'Agile/Scrum'],
  },
  {
    category: 'Architecture',
    items: ['Multi-tenant SaaS', 'RBAC', 'Clean Architecture', 'Repository Pattern', 'CQRS'],
  },
] as const;

export const EXPERIENCE = [
  {
    title: 'Software Engineer (Full-Stack)',
    company: 'StudyNet Pty Ltd',
    location: 'Dhaka',
    period: 'Nov 2025 – Present',
    type: 'professional' as const,
    highlights: [
      'Lead full-stack development of Scholly, a multi-tenant SaaS platform — RESTful APIs with ASP.NET Core, React front-end components, and relational data models in MySQL.',
      'Architected RBAC and tenant isolation layers following Clean Architecture patterns.',
      'Integrated Bitrix24 for workflow automation via REST API, enabling event-driven state transitions and audit logging.',
      'Built and consumed 20+ RESTful API endpoints; optimized indexed MySQL schemas, cutting response times by ~35%.',
      'Collaborated in an Agile/Scrum team using Git/GitHub for version control, code review, and CI-managed deployments.',
    ],
  },
  {
    title: 'Assistant IT Officer & Developer',
    company: 'StudyNet Pty Ltd',
    location: 'Dhaka',
    period: 'May 2023 – Nov 2025',
    type: 'professional' as const,
    highlights: [
      'Developed and enhanced a CodeIgniter-based CRM, adding modules for lead management, application tracking, and third-party data integration.',
      'Contributed front-end features using React, HTML/CSS, and JavaScript, improving UX for internal stakeholders managing 1,000+ student records.',
      'Configured and maintained ERP/CRM integrations; authored technical documentation that reduced developer onboarding time.',
      'Documented sprint progress, tracked development tasks in Jira, and communicated updates to cross-functional stakeholders.',
    ],
  },
  {
    title: 'Customer Support Administrator',
    company: 'Click Communication',
    location: 'Dhaka',
    period: 'Feb 2016 – Jan 2018',
    type: 'professional' as const,
    highlights: [
      'Acted as liaison between customers and product teams, translating technical feedback into product improvement tickets.',
      'Analyzed support data to identify recurring issues; contributed to a 20% reduction in escalation rate through process improvements.',
    ],
  },
] as const;

export const EDUCATION = [
  {
    institution: 'United International University',
    location: 'Dhaka',
    qualification: 'Bachelor of Science in Computer Science and Engineering',
    period: '2018 – 2022',
    result: 'CGPA 3.98 / 4.00',
    awards: ['Scholastic Award: Summa Cum Laude', 'Multiple scholarships (50%–100%)'],
  },
  {
    institution: 'Emirates English Speaking School',
    location: 'Dubai',
    qualification: 'Secondary School Certificate',
    period: '2013',
    result: 'Examination Score: 88%',
    awards: [],
  },
] as const;

export const CERTIFICATIONS = [
  'Data Science, Python and Dart — Udemy (2023)',
  'GED (2015)',
] as const;

export const ACHIEVEMENTS = [
  'Champion — CSE Project Show 2019 (Electronics)',
  'Runners Up — UIU Science Fair 2020',
] as const;

// Hosted WorkflowDesk demo (browser mode). Link to the site root: direct loads of /login return 404 until the host adds an SPA rewrite.
export const WORKFLOWDESK_DEMO_URL = 'https://workflow-desk-sigma.vercel.app/';
export const WORKFLOWDESK_SOURCE_URL = 'https://github.com/ahmed123doeswork/WorkflowDesk';

// Hosted DataBridge Inspector demo (browser mode).
export const DATABRIDGE_DEMO_URL = 'https://databridge-inpector.vercel.app/';
export const DATABRIDGE_SOURCE_URL = 'https://github.com/ahmed123doeswork/DatabridgeInpector';

// Hosted TimeSlot demo (browser mode).
export const TIMESLOT_DEMO_URL = 'https://timeslot-inky.vercel.app/';
export const TIMESLOT_SOURCE_URL = 'https://github.com/ahmed123doeswork/Timeslot';
