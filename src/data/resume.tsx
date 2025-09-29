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
      title: "Real-time Multiplayer Chess",
      href: "https://chess.rudraa.online/",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "Built a real-time multiplayer chess application with authentication, matchmaking, and seamless gameplay. Implemented WebSocket-based communication for live matches.",
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
