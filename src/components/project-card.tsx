'use client'

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { MagicCard } from "./magicui/MagicCard";
import ShineBorder from "./magicui/ShineBorder";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  logo?: string; 
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  logo,
}: Props) {
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  return (
  <MagicCard 
    className={cn(
      "cursor-pointer rounded-lg dark:shadow-2xl w-full h-[350px] sm:h-[350px] border-none !bg-transparent hover:scale-[1.02] transition-all duration-300",
      className
    )} 
    gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
  >
    <ShineBorder
      className="border h-full w-full relative rounded-lg flex flex-col justify-start items-start md:shadow-xl !bg-transparent !pointer-events-none p-5 group" 
      color={["#FF9933", "#FFFFFF", "#138808"]}
    >
      <div>
        {logo && (
          <Image src={logo} alt='project-logo' width={30} height={30} className="rounded-full" />
        )}
        {!logo && video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none h-8 w-8 object-cover object-top rounded-full"
          />
        )}
        {!logo && !video && image && (
          <Image
            src={image}
            alt={title}
            width={30}
            height={30}
            className="h-8 w-8 overflow-hidden object-cover object-top rounded-full"
          />
        )}
      </div>

      <div className="mt-2 !pointer-events-auto">
        <Link 
          href={href || link || "#"} 
          target='_blank' 
          className="block group-hover:translate-x-1 transition-transform duration-200"
        >
          <h1 className="text-xl text-black dark:text-white font-bold tracking-tight text-start whitespace-nowrap">
            {title}
          </h1>
        </Link>
       <div className="text-sm text-gray-700 dark:text-[#D1D5DB] mt-2 leading-relaxed">
        {description}
       </div>
      </div>

    {/* Tech Stack Tags */}
    <div className="flex gap-1 mt-4 flex-wrap !pointer-events-auto">
      {tags?.map((tech, idx) => (
        <Badge 
          key={idx} 
          variant="outline" 
          className="text-[10px] hover:!bg-black dark:hover:!bg-white dark:hover:!text-black hover:!text-white !pointer-events-auto"
        >
          {tech}
        </Badge>
      ))}
    </div>

      {/* Links Section */}
      <div className='mt-3 !pointer-events-auto flex gap-1'>
        {links?.map((linkItem, idx) => (
          <Link href={linkItem.href} key={idx} target="_blank">
            <Badge 
              variant="default" 
              className="text-[10px] py-[3px] dark:hover:bg-gray-300 hover:bg-gray-700 flex items-center gap-1"
            >
              {linkItem.icon}
              {linkItem.type}
            </Badge>
          </Link>
        ))}
        
        {href && (
          <Link href={href} target='_blank'>
            <Badge 
              variant="default" 
              className="text-[10px] py-[3px] dark:hover:bg-gray-300 hover:bg-gray-700"
            >
              <GitHubLogoIcon width={11} height={11} className="mr-1" /> Source
            </Badge>
          </Link>
        )}
      </div>
    </ShineBorder>
  </MagicCard>
)};