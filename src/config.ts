/**
 * Site content from environment variables.
 * All VITE_* vars are optional; defaults are used when not set.
 */

export interface ProjectData {
  title: string;
  date?: string;
  description: string;
  bullets: string[];
}

export interface LinkData {
  name: string;
  href: string;
}

export interface TechStackData {
  [category: string]: string[];
}

const defaultProjects: ProjectData[] = [
  {
    title: "Miles & Smiles",
    date: "2026",
    description: "A comprehensive loyalty program platform for an airline, managing user rewards, points, and membership tiers.",
    bullets: [
      "Points redemption and tier management for millions of users",
      "Partner integrations for miles accrual across airlines and banks",
      "Real-time balance updates and scalable event-driven architecture",
    ],
  },
  {
    title: "PF",
    date: "2023-2026",
    description: "A payment facilitator system built specifically for an airline, handling complex financial transactions and ticket processing.",
    bullets: [
      "Multi-currency transactions with automated reconciliation",
      "Refund processing and dispute handling workflows",
      "Integration with airline ticketing and settlement systems",
    ],
  },
  {
    title: "Spendingz",
    date: "2023",
    description: "A personal spending tracker to help users manage their finances and monitor their expenses.",
    bullets: [
      "Category-based budgeting with customizable limits",
      "Expense charts and CSV export for reporting",
      "Mobile-first design for on-the-go tracking",
    ],
  },
  {
    title: "HALI",
    date: "2023",
    description: "A pitch reservation system designed to streamline booking for sports fields and facilities.",
    bullets: [
      "Time-slot booking with availability calendar",
      "Facility management dashboard for admins",
      "Reminder notifications to reduce no-shows",
    ],
  },
];

const defaultTechStack: TechStackData = {
  backend: ["Java", "Kotlin", "Python", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Keycloak"],
  frontend: ["TypeScript", "React", "Tailwind CSS"],
  "DevOps & Observability": ["Docker", "Kubernetes", "Maven", "Jenkins", "Git", "ELK"],
  "AI Tools": ["Cursor", "Claude Code", "OpenClaw"],
};

const defaultLinks: LinkData[] = [
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { name: "LeetCode", href: "https://leetcode.com/u/yourprofile" },
  { name: "Medium", href: "https://medium.com/@yourprofile" },
];

function parseJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export const config = {
  siteName: import.meta.env.VITE_SITE_NAME ?? "Kutluhan Palalıoğlu",
  siteTitle: import.meta.env.VITE_SITE_TITLE ?? "Software Developer",
  introText: import.meta.env.VITE_INTRO_TEXT ?? "Developer based in Istanbul, Turkey. I specialize in backend development with a focus on Java and Spring Boot.",
  aboutParagraph1: import.meta.env.VITE_ABOUT_PARAGRAPH_1 ?? "I'm a software developer who builds systems that scale. I care about clean architecture, maintainable code, and solving real problems—whether that's streamlining airline loyalty programs, processing payments, or helping people track their spending.",
  aboutParagraph2: import.meta.env.VITE_ABOUT_PARAGRAPH_2 ?? "When I'm not coding, I'm usually exploring new tools, reading about system design, or enjoying coffee in Istanbul. I believe the best software comes from understanding both the technical details and the people who use it.",
  aboutParagraph3: import.meta.env.VITE_ABOUT_PARAGRAPH_3 ?? "I hold a degree in Computer Engineering from Istanbul Technical University, where I built a strong foundation in algorithms, data structures, and software design—principles that still guide my work today.",
  projectsTitle: import.meta.env.VITE_PROJECTS_TITLE ?? "Projects",
  techStackTitle: import.meta.env.VITE_TECH_STACK_TITLE ?? "Tech Stack",
  aboutTitle: import.meta.env.VITE_ABOUT_TITLE ?? "About Me",
  navProjects: import.meta.env.VITE_NAV_PROJECTS ?? "Projects",
  navTechStack: import.meta.env.VITE_NAV_TECH_STACK ?? "Tech stack",
  navAbout: import.meta.env.VITE_NAV_ABOUT ?? "About",
  footerCopyright: import.meta.env.VITE_FOOTER_COPYRIGHT ?? "© 2026 Kutluhan Palalıoğlu",
  projects: parseJson<ProjectData[]>(import.meta.env.VITE_PROJECTS, defaultProjects),
  techStack: parseJson<TechStackData>(import.meta.env.VITE_TECH_STACK, defaultTechStack),
  links: parseJson<LinkData[]>(import.meta.env.VITE_LINKS, defaultLinks),
};
