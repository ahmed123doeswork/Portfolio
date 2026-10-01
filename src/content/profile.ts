// ─── DRAFT CONFIGURATION ───────────────────────────────────────────────────
// Fields marked DRAFT need confirmation before production.
// See docs/content-checklist.md for what to review.

export const PROFILE = {
  // Identity — update before publishing
  firstName: 'Ahmed',
  lastName: '', // Single-name identity confirmed by owner
  headline: 'Software Engineer · PHP · Python · JavaScript',
  tagline: 'Building reliable business applications, integrations, and data workflows.',

  // Contact
  email: 'ahmed@studynetglobal.com', // confirmed from system context
  phone: '+880 185 070 7938',
  location: 'Dhaka, Bangladesh',

  // Social — hide any that are null/empty
  linkedin: 'https://www.linkedin.com/in/onlyahmed/',
  github: 'https://github.com/ahmed123doeswork' as string | null,

  // Resume — served from public/
  resumePath: '/assets/Resume.pdf',

  // Profile image
  profileImage: '/assets/profile.png',

  summary: `PHP and Python developer with experience building CRM systems, workflow automation, RESTful APIs, and data integrations. Currently developing the Scholly platform at StudyNet, implementing Bitrix24 integrations and full-stack features with CodeIgniter, React, and MySQL.`,
} as const;

export const SKILLS = [
  {
    category: 'Languages',
    items: ['PHP', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['CodeIgniter', 'Django', 'React'],
  },
  {
    category: 'Databases',
    items: ['MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Joomla', 'MS365', 'Bitrix24'],
  },
  {
    category: 'Practices',
    items: ['CRM Development', 'RESTful API Design', 'Project Coordination', 'Agile/Scrum'],
  },
] as const;

export const EXPERIENCE = [
  {
    title: 'IT Support and Web Developer',
    company: 'StudyNet Pty Ltd',
    location: 'Dhaka',
    period: 'Nov 2025 – Present',
    type: 'professional' as const,
    highlights: [
      'Spearhead development and optimization of web applications using PHP/CodeIgniter.',
      'Lead the Scholly software development project, implementing Bitrix24 for workflow automation.',
      'Design, develop, and consume RESTful APIs for seamless data flow and third-party integrations.',
      'Architect and maintain MySQL databases with optimized queries for application performance.',
      'Collaborate on front-end development with React, HTML, CSS, and JavaScript.',
      'Manage version control with Git for clean repositories and team collaboration.',
    ],
  },
  {
    title: 'Assistant IT Officer',
    company: 'StudyNet Pty Ltd',
    location: 'Dhaka',
    period: 'May 2023 – Nov 2025',
    type: 'professional' as const,
    highlights: [
      'Supported delivery of IT solutions including ERP and CRM configuration and process documentation.',
      'Contributed to development and enhancement of the company CRM system using CodeIgniter.',
      'Developed modules for lead management, application tracking, and external data integrations.',
      'Delivered technical support and stakeholder communication for software adoption.',
      'Tracked sprint progress and communicated development updates to stakeholders.',
    ],
  },
  {
    title: 'Customer Support Administrator',
    company: 'Click Communication',
    location: 'Dhaka',
    period: 'Feb 2016 – Jan 2018',
    type: 'professional' as const,
    highlights: [
      'Acted as liaison between customers and product teams, driving product improvements.',
      'Delivered technical support and resolved customer inquiries to achieve high satisfaction rates.',
      'Collected and analysed feedback to identify trends and improve processes.',
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
