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
  logo?: string; // Added logo prop like in your original
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
    "cursor-pointer rounded-lg dark:shadow-2xl w-[100%] max-sm:w-full h-[350px] border-none !bg-transparent",
    className
  )} 
  gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
>
  <ShineBorder
    className="border h-full w-full relative rounded-lg flex flex-col justify-start items-start md:shadow-xl !bg-transparent !pointer-events-none p-5" 
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

    {/* Title and Description Section */}
    <div className="mt-4 !pointer-events-auto">
      <Link 
        href={href || link || "#"} 
        target='_blank' 
        className="block"
      >
        <h1 className="text-xl text-black dark:text-white font-bold tracking-tight text-start whitespace-nowrap">
          {title}
        </h1>
      </Link>
      <Markdown className="prose max-w-full text-pretty text-sm dark:text-[#D1D5DB] mt-2 dark:prose-invert">
        {description}
      </Markdown>
    </div>

    {/* Tech Stack Tags */}
    <div className="flex gap-1 mt-4 flex-wrap !pointer-events-auto">
      {tags?.map((tech, idx) => (
        <Badge 
          key={idx} 
          variant="outline" 
          className="text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto"
        >
          {tech}
        </Badge>
      ))}
    </div>

    {/* Links Section */}
    <div className='mt-3 !pointer-events-auto flex gap-1'>
      {link && (
        <Link href={link} target='_blank'>
          <Badge 
            variant="default" 
            className="text-[10px] py-[3px] dark:hover:bg-gray-300 hover:bg-gray-700"
          >
            <GlobeIcon width={11} height={11} className="mr-1" /> Website
          </Badge>
        </Link>
      )}
      
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
      
      {href && !links?.length && (
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

  );
}