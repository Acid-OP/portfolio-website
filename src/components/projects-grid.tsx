"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.01;
const INITIAL_COUNT = 4;

interface Project {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  imageClassName?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

interface ProjectsGridProps {
  projects: readonly Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 max-w-[800px] mx-auto px-2 sm:px-0">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + (id < INITIAL_COUNT ? id : 0) * 0.05}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              imageClassName={project.imageClassName}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm font-medium px-5 py-2 rounded-full border border-foreground/15 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </>
  );
}
