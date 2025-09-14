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
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Redis",
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
      company: "Team.Shiksha",
      href: "https://team.shiksha",
      badges: [],
      location: "Remote",
      title: "Contributor",
      logoUrl: "/team-shiksha.webp",
      start: "May 2025",
      end: "Present",
    },
    {
      company: "Team.Unibrains",
      href: "https://www.teamunibrains.com/",
      badges: [],
      location: "On-site",
      title: "Full Stack Engineer Intern",
      logoUrl: "/unibrains.png",
      start: "Jan 2025",
      end: "Apr 2025",
      description:
        "Worked on full-stack development using React, Next.js, and Express.js with TypeScript. Implemented authentication and session management, built scalable APIs, and integrated GraphQL. Designed and developed user-facing features with Tailwind CSS and Recoil/Redux for state management. Collaborated on building attendance report functionality, real-time WebSocket messaging, and optimized database queries in MySQL. Contributed to the architecture and debugging of internal projects while ensuring clean, maintainable code.",
    },
  ],
  education: [
    {
      school: "Delhi Technological University",
      href: "https://www.dtu.ac.in/",
      degree: "BE in CE",
      logoUrl: "/gtu.jpeg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/gtu.jpeg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Real-time Multiplayer Chess",
      href: "https://chess.rudraa.online/",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "Built a real-time multiplayer chess application with authentication, matchmaking, and seamless gameplay. Implemented WebSocket-based communication for live matches, integrated a chess engine for bot games, and designed a responsive UI for smooth player experience. Architected the backend with Node.js, Express, and PostgreSQL while ensuring scalability and clean code structure.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "WebSockets",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://chess.rudraa.online/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/chess.png",
    },
  ],
} as const;
