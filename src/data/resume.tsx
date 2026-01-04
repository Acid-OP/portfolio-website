import { Icons } from "@/components/icons";
import { Globe, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gaurav",
  url: "https://portfolio.rudraa.online",
  description:
    "i build digital experiences that tell a story.",
  summary:
    "i build, break, and rebuild. that's how i learn. i like stacking small wins that compound over time. for me, the process is the fun part.",
  avatarUrl: "/madara.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Node.js",
    "Python",
    "WebSocket",
    "WebRTC",
    "Redis",
    "Docker",
    "Azure",
    "AWS"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "gauravkapur596@gmail.com",
    tel: "+91 7011xxxxxx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Acid-OP",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gaurav-kapur-a3286b258/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/GauravKapurr",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Paasa",
      href: "https://www.paasa.co/",
      badges: ["Y", "S24"],
      badgeVariants: ["yc", "minimal"],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/paasa.jpeg",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Shipped UCITS screening platform from inception to production on Fly.io, architecting a scalable server-side solution managing 2,940+ UCITS-compliant investment instruments with advanced filtering and real-time data processing. Engineered an AI-powered portfolio generation engine processing user quiz responses to deliver personalized investment recommendations; orchestrated an automated cron system dispatching weekly portfolio statements via email and WhatsApp, reducing manual outreach by 40%. Constructed server-side Next.js components with SSR architecture for production tools, including a global brokerage calculator and US estate tax calculator, increasing user engagement by 15%. Built automation pipelines integrating Strapi CMS, PostHog analytics, WATI, and Slack to streamline content publishing with SEO optimization, collaborating with marketing teams to synchronize user submissions across platforms.",
    },
    {
      company: "Suko",
      href: "",
      badges: ["• Founding Member"],
      badgeVariants: ["minimal"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/hvt.jpeg",
      start: "Mar 2025",
      end: "Aug 2025",
      description:
        "Architected backend infrastructure for an anonymous social platform enabling AI-generated memory scenes from user prompts using Node.js, Express, TypeScript, and Prisma with PostgreSQL; developed WebSocket infrastructure for real-time scene broadcasting to follower feeds and REST endpoints for the public explore page. Designed a worker-based pipeline bridging ML model outputs with backend services, integrating AWS S3 for avatar and scene image storage with Redis Cloud caching using ETag validation and conditional headers, improving asset delivery performance by 60%. Containerized backend services with Docker and launched CI/CD pipelines to Google Cloud Platform; mentored 2 junior developers on system architecture patterns, accelerating feature deployment velocity by 35%.",
    },
    {
      company: "Voriq AI",
      href: "",
      badges: [],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "/voriq_logo.jpg",
      start: "Oct 2025",
      end: "Present",
      description:
        "Actively contributed to the development and architectural scaling of IATSAT's official website, enhancing both design and system efficiency. Built UI components and managed backend tasks to improve user experience. Optimized deployment through containerization and collaborated closely with the team to shape the project's design and performance with practical, impactful ideas.",
    },
    {
      company: "Freelancer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Building full stack apps",
      logoUrl: "/download.png",
      start: "Aug 2025",
      end: "Present",
    },
  ],

  education: [
    {
      school: "Delhi Technological University",
      href: "https://www.dtu.ac.in/",
      degree: "Bachelor of Engineering",
      logoUrl: "/DTU.jpeg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "DrawDeck",
      href:"//github.com/Acid-OP/second-brain-frontend",
      dates: "May 2025 - Aug 2025",
      active: true,
      description:
        "Built a real-time collaborative canvas workspace with peer-to-peer video calling, synchronized canvas sharing and authentication.",
      technologies: [
        "Nextjs",
        "TypeScript",
        "Node.js",
        "WebRTC",
        "Shadcn",
        "Websocket",
        "Docker",
        "Nextauth",
        "Azure"
      ],
      links: [
        {
          type: "Website",
          href: "https://drawdeck.xyz",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/color-palette.png",
    },
    {
      title: "Vault",
      href:"https://github.com/Acid-OP/Vault",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "An exchange platform being built from scratch with focus on speed, reliability, and scalable architecture. Currently under development.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Redis (Pub/Sub, Queues, Caching)",
        "TimeSeries DB",
        "TailwindCSS",
        "WebSocket",
        "Docker",
        "NextAuth"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/exchange.png",
    },
     {
      title: "Second Brain",
      href: "https://secondbrain-hazel.vercel.app/",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Built a personal knowledge hub for curating links across platforms, sharing collections with others, and finding saved content through semantic search",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Transformer",
        "TailwindCSS",
        "Huggingface",
        "chromadb"
      ],
      links: [
        {
          type: "Website",
          href: "https://secondbrain-hazel.vercel.app/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/brain.png",
    },
       {
      title: "Promptly",
      href: "https://github.com/Acid-OP/Promptly",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Made my own Cursor inside a custom shell, an AI coding terminal that builds and edits projects from natural language.",
      technologies: [
        "Python",
        "Shell",
        "Docker",
        "Regex",
        "Gemini-API",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/promptly.png",
    },
  ],
  testimonials: [
    {
      image: "/IMG_8619.jpeg",
      rotation: -5,
      position: { top: "0", left: "0" },
      size: { width: "280px", height: "150px" },
      zIndex: 3,
    },
    {
      image: "/IMG_8620.jpeg",
      rotation: 3,
      position: { top: "0", left: "55%" },
      size: { width: "260px", height: "210px" },
      zIndex: 2,
    },
    {
      image: "/IMG_8621.jpeg",
      rotation: -4,
      position: { top: "240px", left: "0" },
      size: { width: "320px", height: "190px" },
      zIndex: 4,
    },
    {
      image: "/IMG_8624.jpeg",
      rotation: 4,
      position: { top: "320px", left: "55%" },
      size: { width: "280px", height: "95px" },
      zIndex: 1,
    },
  ],
} as const;
