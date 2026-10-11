import toolwebCover from "@/assets/toolweb/cover.jpg";

/**
 * Single source of truth for all portfolio content.
 * Edit values here — no content is hardcoded inside components.
 */

export const profile = {
  name: "Dhruvil Bhingradiya",
  role: "Full-Stack Developer — Web, Mobile & Desktop",
  shortRole: "Flutter Developer / Full-Stack Product Developer",
  experience: "3+ years",
  location: "India — available remotely",
  disciplines: ["Web", "Mobile", "Desktop", "Admin", "APIs"],
  email: "dhruvilbhingradiya021@gmail.com",
  links: {
    resume: "/dhruvil-bhingradiya-resume.pdf" as string,
  },
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export type BuildCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  points: string[];
};

export const buildCards: BuildCard[] = [
  {
    id: "website",
    category: "01 / Web",
    title: "Website",
    description:
      "Professional websites for businesses, brands, startups and individuals — responsive, fast and easy to maintain.",
    points: ["Marketing sites", "Landing pages", "CMS-backed content"],
  },
  {
    id: "web-app",
    category: "02 / Web",
    title: "Web Application",
    description:
      "Custom web platforms, business applications and interactive products with real data behind them.",
    points: ["Auth & roles", "CRUD workflows", "Third-party APIs"],
  },
  {
    id: "mobile",
    category: "03 / Mobile",
    title: "Mobile Application",
    description:
      "Cross-platform Android and iOS applications built with Flutter from one codebase.",
    points: ["Flutter / Dart", "Offline & state", "Store-ready builds"],
  },
  {
    id: "desktop",
    category: "04 / Desktop",
    title: "Desktop Application",
    description:
      "Cross-platform desktop software for Windows, macOS and Linux using Flutter where it fits the requirement.",
    points: ["Windows / macOS / Linux", "Local data", "Installer packaging"],
  },
  {
    id: "admin",
    category: "05 / Admin",
    title: "Admin Panel",
    description:
      "Management dashboards, analytics views, inventory systems and internal business tools.",
    points: ["Role-based access", "Reports & tables", "Bulk operations"],
  },
  {
    id: "product",
    category: "06 / Full-Stack",
    title: "Custom Digital Product",
    description:
      "A complete product built around a unique business requirement, across frontend, backend, database and APIs.",
    points: ["Architecture", "API layer", "Deployment"],
  },
];

export const services = [
  {
    title: "Website Development",
    description:
      "Professional responsive websites for businesses, startups and personal brands.",
  },
  {
    title: "Web Application Development",
    description: "Custom web applications and digital platforms built around your workflow.",
  },
  {
    title: "Flutter Mobile Development",
    description: "Cross-platform Android and iOS applications from a single codebase.",
  },
  {
    title: "Flutter Desktop Development",
    description:
      "Cross-platform Windows, macOS and Linux applications where desktop is the right fit.",
  },
  {
    title: "Admin Panels & Dashboards",
    description: "Custom business management systems, dashboards and internal tools.",
  },
  {
    title: "API & Backend Integration",
    description: "Node.js, REST APIs, Firebase and Supabase integrations.",
  },
  {
    title: "Existing Product Improvements",
    description:
      "Bug fixing, UI improvements, performance optimization and new feature development.",
  },
];

export const skillGroups = [
  {
    label: "Mobile & Desktop",
    primary: true,
    items: ["Flutter", "Dart"],
    note: "Primary stack for mobile and cross-platform desktop applications.",
  },
  {
    label: "Web & Backend",
    primary: true,
    items: ["Node.js", "REST APIs", "Modern web technologies"],
    note: "Websites, web applications and the API layer behind them.",
  },
  {
    label: "Backend Platforms",
    primary: true,
    items: ["Firebase", "Supabase"],
    note: "Auth, databases, storage and realtime data.",
  },
  {
    label: "Development",
    primary: true,
    items: ["Git", "GitHub"],
    note: "Version control, branching and collaboration.",
  },
];

export const aiTools = ["Claude Code", "OpenAI Codex", "Antigravity"];

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: "Web" | "Mobile" | "Desktop" | "Admin" | "Full-Stack";
  tags: string[];
  role: string;
  platform: string;
  link?: string;
  github?: string;
};

export const featuredProject = {
  id: "toolweb",
  title: "ToolWeb — Privacy-First Browser Utilities",
  tagline:
    "A browser-based toolkit of practical developer, image, design, and text utilities that performs processing locally on the user's device, avoiding unnecessary file uploads.",
  summary:
    "I built ToolWeb as a collection of small utilities I kept needing while developing and designing. Instead of sending a file or snippet of data to a server just to perform a simple conversion or calculation, the tools do the work directly in the browser. That makes the experience faster and, more importantly, keeps user files on their own device.\n\n" +
    "The product is built around speed, simplicity, and zero-friction use: open a tool, provide input, process it, and get the result without an account, installation, watermark, or usage limit. The current collection covers 20+ free tools across image utilities, developer helpers, color and design tools, and everyday text/file utilities. For processing that benefits from high performance, ToolWeb uses a WebAssembly engine compiled from Rust, so the heavy work stays local and responsive.\n\n" +
    "It is designed for developers, designers, creators, students, and anyone who needs a quick practical utility. It runs in modern desktop and mobile browsers across Windows, macOS, Linux, Android, and iOS. The idea is simple: small, practical tools should be fast, useful, privacy-respecting, and accessible.",
  cover: toolwebCover,
  coverAlt: "ToolWeb tool directory showing JSON, Excel, colour and design utilities",
  role: "Developer / Product Builder",
  platform: "Web",
  technologies: ["JavaScript", "WebAssembly", "Rust", "Browser APIs"],
  focus: [
    "Browser-first client-side processing",
    "Privacy-first design",
    "Cross-device utility platform",
    "Developer, designer, and creator tooling",
  ],
  tools: [
    "Image Format Converter",
    "Image Compressor",
    "Image Resizer",
    "Image Color Extractor",
    "Image to Base64",
    "JSON Formatter",
    "Excel to JSON",
    "Excel ⇄ XML",
    "JSON to Dart",
    "HTML to Flutter",
    "CSS Minifier",
    "Regex Tester",
    "UUID Generator",
    "Base64 Encoder",
    "Markdown to HTML",
    "Color Picker",
    "Gradient Generator",
    "Contrast Checker",
    "Word Counter",
    "Case Converter",
    "Lorem Ipsum Generator",
    "File Size Calculator",
  ],
  link: "https://tool-web.dev",
};

export const projects: Project[] = [];

export const projectFilters = [
  "All",
  "Web",
  "Mobile",
  "Desktop",
  "Admin",
  "Full-Stack",
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Understand",
    description: "Understand the idea, business requirement and the people who will use it.",
  },
  {
    id: "02",
    title: "Plan",
    description: "Define features, architecture and the technical approach before building.",
  },
  {
    id: "03",
    title: "Build",
    description: "Develop the website, application, dashboard or product.",
  },
  { id: "04", title: "Refine", description: "Test, debug, optimize and polish the details." },
  { id: "05", title: "Deliver", description: "Prepare the final production-ready product." },
];

export const reasons = [
  {
    title: "Product-focused",
    description:
      "I build software that answers the actual requirement, rather than writing code for its own sake.",
  },
  {
    title: "Cross-platform",
    description:
      "Flutter lets me build consistent mobile and desktop experiences from a shared stack.",
  },
  {
    title: "Flexible development",
    description:
      "Websites, applications, dashboards or backend integrations — whichever the project needs.",
  },
  {
    title: "Modern workflow",
    description:
      "Git, GitHub, Firebase, Supabase, REST APIs and modern AI development agents in daily use.",
  },
  {
    title: "Production mindset",
    description:
      "Responsive UI, debugging, performance, maintainability and real-world deployment.",
  },
];

export const experience = {
  role: "Flutter Developer / Full-Stack Product Developer",
  context: "Freelance & independent development",
  period: "3+ years",
  intro:
    "Practical development work across mobile, web and desktop — taking requirements through to deployed products.",
  focus: [
    "Flutter development",
    "Mobile applications",
    "Desktop applications",
    "Website development",
    "Web applications",
    "Admin panels",
    "API integration",
    "Firebase",
    "Supabase",
    "Node.js",
    "Debugging",
    "Production deployment",
    "Client requirements",
    "AI-assisted development workflows",
  ],
};

export const projectTypes = [
  "Website",
  "Web Application",
  "Mobile App",
  "Desktop App",
  "Admin Panel",
  "Other",
] as const;

/**
 * TaskFlow — a personal, locally running Flutter productivity app.
 * Not a published product: no store listing, no backend, no client.
 * Everything below is factual about the demo build.
 */
export const taskFlow = {
  id: "taskflow",
  title: "TaskFlow — Local Productivity App",
  shortTitle: "TaskFlow",
  tagline: "A local-first task manager with scheduling, reminders and productivity analytics.",
  status: "Personal demo",
  category: "Mobile" as const,
  platform: "Android / Flutter",
  role: "Developer / Product Builder",
  tags: ["Flutter", "Dart", "Local storage", "Local notifications"],
  overview:
    "TaskFlow is a personal product-development project: a task manager that runs entirely on the device. It covers the full day-planning loop — capture a task, give it a time, priority and category, get reminded before it's due, then review how the week actually went.",
  problem:
    "Most todo apps either stay a flat checklist or push you into an account and a sync service before you can write a single task. The goal here was the opposite: a complete planning loop — schedule, remind, review — that works offline, with no sign-up and no server in the way.",
  capabilities: [
    {
      title: "Home dashboard",
      body: "Greeting and date header with Today's Tasks and Tomorrow's Tasks separated, so the next two days are readable at a glance.",
    },
    {
      title: "Completion & missed states",
      body: "Tasks toggle to a completed state with strike-through, while overdue items surface a prominent MISSED indicator with alert styling instead of quietly disappearing.",
    },
    {
      title: "Time, category & priority",
      body: "Each task carries a scheduled time, a category (Personal, Work, Shopping, Health, Learning) and a Low / Medium / High priority shown as a colour-coded level.",
    },
    {
      title: "Alarm & reminders",
      body: "Optional 'Remind me' setting per task schedules a local notification ahead of the task's time, so the app actively prompts you rather than waiting to be opened.",
    },
    {
      title: "Calendar view",
      body: "Monthly calendar with a selected date and coloured category indicators under each day; picking a day lists everything scheduled for it.",
    },
    {
      title: "Statistics",
      body: "Daily / Weekly / Monthly filters over a completion-percentage ring, completed-vs-total summary, current streak, total completed, pending tasks, average task time and a priority breakdown.",
    },
    {
      title: "Profile & settings",
      body: "Appearance, language, push notifications, daily briefing and help centre, grouped into a single settings screen.",
    },
    {
      title: "Local-first data",
      body: "The whole task workflow — create, schedule, complete, review — works on-device without a backend, an account or a network connection.",
    },
  ],
  technical: [
    {
      label: "UI",
      body: "Flutter widget composition for the dashboard, calendar, statistics and task-creation flows, with a responsive mobile layout and a persistent bottom navigation shell.",
    },
    {
      label: "State",
      body: "Task state (draft, scheduled, completed, missed) is derived from the scheduled time and completion flag, so the missed state needs no manual bookkeeping.",
    },
    {
      label: "Persistence",
      body: "Tasks are written to local device storage and rehydrated on launch — the app is fully usable offline.",
    },
    {
      label: "Scheduling",
      body: "Local notification scheduling fires a reminder ahead of a task's due time; reminders are re-registered from stored tasks so they survive restarts.",
    },
    {
      label: "Analytics",
      body: "Completion rate, streak and priority breakdowns are computed on-device from the stored task history over the selected daily / weekly / monthly window.",
    },
  ],
  demonstrates: [
    "Designing and shipping a complete multi-screen product, not a single-screen exercise",
    "Flutter UI work: layout systems, custom cards, a calendar grid and a progress ring",
    "Time-based logic — scheduling, due states and overdue detection",
    "Local persistence and offline-first behaviour without a backend",
    "Device-level notification / alarm scheduling",
    "Turning raw task data into readable productivity analytics",
  ],
  honesty:
    "This is a personal build I use myself — not a client project, not a commercial product and not published to a store. There's no cloud sync, no accounts and no multi-user support, by design.",
};
