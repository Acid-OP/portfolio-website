import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import GojoSmallCursor from "@/components/gojo-cursor-small";
import SmoothScroll from "@/components/smooth-scroll";
import { QuickContact } from "@/components/quick-contact";
import ScrollToTop from "@/components/scroll-to-top";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
import ThemeTransition from "@/components/theme-transition";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Full Stack Engineer | AI Engineer | YC S24`,
    template: `%s | ${DATA.name}`,
  },
  description: "Gaurav Kapur - Full Stack & AI Engineer with experience at Paasa (YC S24), Suko, and Voriq AI. Built DrawDeck, Vault, and Second Brain. Specialized in Next.js, TypeScript, WebSocket, AI/ML, and scalable architectures.",
  keywords: [
    "Gaurav Kapur",
    "Full Stack Engineer",
    "AI Engineer",
    "YC S24",
    "Paasa",
    "Suko Founding Member",
    "Voriq AI",
    "Next.js Developer",
    "TypeScript",
    "React Developer",
    "WebSocket",
    "WebRTC",
    "Node.js",
    "Python",
    "AI/ML Engineer",
    "Delhi Technological University",
    "DTU",
    "Software Engineer India",
    "Startup Engineer"
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    title: `${DATA.name} - Full Stack & AI Engineer | YC S24 Alumni`,
    description: "Full Stack & AI Engineer at Paasa (YC S24), Suko, Voriq AI. Built DrawDeck with 500+ users, real-time collaborative apps, AI-powered platforms. Expert in Next.js, TypeScript, WebSocket, AI/ML.",
    siteName: `${DATA.name} Portfolio`,
    images: [
      {
        url: `${DATA.url}/madara.jpg`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack & AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Full Stack & AI Engineer | YC S24`,
    description: "Full Stack & AI Engineer at Paasa (YC S24), Suko, Voriq AI. Built DrawDeck with 500+ users. Expert in Next.js, TypeScript, WebSocket, AI/ML.",
    creator: "@GauravKapurr",
    images: [`${DATA.url}/madara.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
  icons: {
    icon: "/madara.jpg",
    shortcut: "/madara.jpg",
    apple: "/madara.jpg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/madara.jpg`,
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
    ],
    jobTitle: "Full Stack Engineer & AI Engineer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Paasa",
        url: "https://www.paasa.co/",
      },
      {
        "@type": "Organization",
        name: "Voriq AI",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Delhi Technological University",
      url: "https://www.dtu.ac.in/",
    },
    email: DATA.contact.email,
    description: DATA.description,
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "AI/ML",
      "WebSocket",
      "WebRTC",
      "Full Stack Development",
      "Software Engineering",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <ScrollToTopOnMount />
            <SmoothScroll />
            <GojoSmallCursor />
            <QuickContact />
            <ThemeTransition />
            {children}
            <Navbar />
            <ScrollToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
