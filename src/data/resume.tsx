import { Icons } from "@/components/icons";
import { Globe, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gaurav",
  url: "https://portfolio.rudraa.online",
  description:
    "i build digitial experiences that tells a story.",
  summary:
    "i build, break, and rebuild — that’s how i learn. i like stacking small wins that compound over time. for me, the process is the fun part.",
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
      company: "Paasa (YC S24)",
      href: "https://www.paasa.co/",
      badges: [],
      location: "Remote",
      title: "SWE Intern",
      logoUrl: "/paasa.jpeg",
      start: "Nov 2025",
      end: "Present"      
    },
    {
      company: "High Vision Technologies LLP",
      href: "https://hvtllp.com/",
      badges: [],
      location: "Remote",
      title: "Analyst",
      logoUrl: "/hvt.jpeg",
      start: "May 2024",
      end: "Aug 2024",
    },
    {
      company: "ITSAT",
      href: "https://www.linkedin.com/company/iatsatin/",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "/i.jpeg",
      start: "Aug 2023",
      end: "Nov 2023",
      description:
        "Actively contributed to the development and architectural scaling of IATSAT’s official website, enhancing both design and system efficiency. Built UI components and managed backend tasks to improve user experience. Optimized deployment through containerization and collaborated closely with the team to shape the project’s design and performance with practical, impactful ideas.",
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
      degree: "BE in CE",
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
      quote: "Working with Gaurav was a game-changer for our project. His technical expertise and problem-solving skills are exceptional.",
      author: "John Doe",
      role: "CTO",
      company: "Tech Startup",
      rating: 5,
    },
    {
      quote: "Gaurav's ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "SaaS Company",
      rating: 5,
    },
    {
      quote: "Professional, responsive, and incredibly skilled. Gaurav helped us build a scalable solution that exceeded our performance goals.",
      author: "Mike Chen",
      role: "Founder",
      company: "E-commerce Platform",
      rating: 5,
    },
    {
      quote: "Incredible attention to detail and a true passion for building great products. Would work with him again in a heartbeat.",
      author: "Emma Wilson",
      role: "Design Lead",
      company: "Creative Agency",
      rating: 5,
    },
    {
      quote: "Fast turnaround, clean code, and excellent communication throughout. Exactly what we needed for our startup.",
      author: "Alex Rodriguez",
      role: "CEO",
      company: "FinTech Startup",
      rating: 5,
    },
  ],
} as const;
