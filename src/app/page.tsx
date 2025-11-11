import GitHubContributions from "@/components/ui/gitgraph";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { GitGraph } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Sup, ${DATA.name} here`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                 Stuff I built while the world slept
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ProjectCard
                href={DATA.projects[0]?.href}
                title={DATA.projects[0]?.title}
                description={DATA.projects[0]?.description}
                dates={DATA.projects[0]?.dates}
                tags={DATA.projects[0]?.technologies}
                image={DATA.projects[0]?.image}
                links={DATA.projects[0]?.links}
              />
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.05}>
              <ProjectCard
                href={DATA.projects[1]?.href}
                title={DATA.projects[1]?.title}
                description={DATA.projects[1]?.description}
                dates={DATA.projects[1]?.dates}
                tags={DATA.projects[1]?.technologies}
                image={DATA.projects[1]?.image}
                links={DATA.projects[1]?.links}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.05}>
              <ProjectCard
                href={DATA.projects[2]?.href}
                title={DATA.projects[2]?.title}
                description={DATA.projects[2]?.description}
                dates={DATA.projects[2]?.dates}
                tags={DATA.projects[2]?.technologies}
                image={DATA.projects[2]?.image}
                links={DATA.projects[2]?.links}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.05}>
              <ProjectCard
                href={DATA.projects[3]?.href}
                title={DATA.projects[3]?.title}
                description={DATA.projects[3]?.description}
                dates={DATA.projects[3]?.dates}
                tags={DATA.projects[3]?.technologies}
                image={DATA.projects[3]?.image}
                links={DATA.projects[3]?.links}
              />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contributions">
        <div className="w-full max-w-4xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <GitHubContributions/>
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold text-center">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2 justify-center">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge variant="subtle">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}