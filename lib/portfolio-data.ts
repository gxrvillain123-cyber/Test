export const profile = {
  name: "Shashwat Sharma",
  initials: "SS",
  role: "Frontend Developer",
  location: "India, remote-friendly",
  email: "hello@example.com",
  resume: "/portfolio-assets/shashwat-sharma-resume.pdf",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  tagline:
    "I build accessible, fast, recruiter-ready web experiences with React, Next.js, TypeScript, and a product-minded eye for detail.",
};

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "Decisions", href: "#decisions", id: "decisions" },
];

export const heroStats = [
  { value: "12+", label: "production-style interfaces" },
  { value: "90+", label: "target Lighthouse scores" },
  { value: "48h", label: "portfolio build sprint" },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Accessibility", "Responsive UI"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Auth Flows", "Server Actions", "Validation"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Schema Design", "Indexes", "Data Modeling"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Git", "Figma", "Vercel", "ESLint", "Lighthouse", "Playwright"],
  },
];

export const projects = [
  {
    title: "InsightOps Dashboard",
    category: "Data",
    featured: true,
    image: "/portfolio-assets/project-insightops.png",
    description:
      "A metrics workspace for founders and operators with KPI summaries, exception alerts, and dense responsive layouts designed for daily scanning.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    github: "https://github.com/vercel/next.js",
    demo: "https://nextjs.org/showcase",
  },
  {
    title: "LaunchPad Commerce",
    category: "Commerce",
    featured: false,
    image: "/portfolio-assets/project-launchpad.png",
    description:
      "A fast storefront prototype with product discovery, checkout-focused cards, and a visual system tuned for mobile conversion.",
    stack: ["React", "Tailwind CSS", "Vercel", "SEO"],
    github: "https://github.com/tailwindlabs/tailwindcss",
    demo: "https://tailwindcss.com/showcase",
  },
  {
    title: "CarePulse Portal",
    category: "Health",
    featured: false,
    image: "/portfolio-assets/project-carepulse.png",
    description:
      "An accessible intake and scheduling interface with clear form states, contrast-conscious UI, and practical patient status flows.",
    stack: ["Next.js", "Forms", "A11y", "PostgreSQL"],
    github: "https://github.com/shadcn-ui/ui",
    demo: "https://ui.shadcn.com",
  },
  {
    title: "AutoFlow Studio",
    category: "Automation",
    featured: false,
    image: "/portfolio-assets/project-autoflow.png",
    description:
      "A command center concept for reviewing agent runs, surfacing risk signals, and documenting decisions before automation reaches production.",
    stack: ["Node.js", "Agents", "Review UX", "MongoDB"],
    github: "https://github.com/langchain-ai/langchainjs",
    demo: "https://www.langchain.com",
  },
];

export const buildDecisions = [
  {
    title: "Next.js app structure",
    text:
      "The page is split into focused components for the hero, navigation, skills, projects, contact, and build notes so future sections can be added without touching one large file.",
  },
  {
    title: "Tailwind workflow",
    text:
      "Utility classes keep spacing, responsive behavior, hover states, and contrast decisions visible at the component level while preserving a small global CSS layer.",
  },
  {
    title: "Mobile-first layout",
    text:
      "Every grid starts as a single column, then expands at tablet and desktop breakpoints. Fixed aspect ratios keep thumbnails, controls, and cards stable.",
  },
  {
    title: "Accessibility baseline",
    text:
      "The site uses semantic sections, one H1, keyboard-focus styles, descriptive alt text, validated form fields, external link labels, and reduced-motion handling.",
  },
  {
    title: "Performance choices",
    text:
      "Images are local optimized assets, the hero image is prioritized, project media uses fixed dimensions, and animation is handled with lightweight CSS transitions.",
  },
];
