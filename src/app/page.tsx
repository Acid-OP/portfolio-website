import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ScrollReveal from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.01;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <div className="gap-4 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Sup, ${DATA.name} here`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border hover:scale-105 transition-transform duration-300">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <ScrollReveal>
        <section id="about" className="space-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-1.5">
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
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <section id="projects">
          <div className="space-y-8 w-full py-6">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                   Stuff I built while the world slept
                  </h2>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
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
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold text-center">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 justify-center">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge variant="subtle" className="hover:scale-105 transition-transform">{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={175}>
        <section id="testimonials">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <h2 className="text-xl font-bold text-center">Client Testimonials</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <p className="text-center text-sm text-muted-foreground max-w-md mx-auto">
                What people say about working with me
              </p>
            </BlurFade>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {DATA.testimonials.map((testimonial, id) => (
                <BlurFade key={testimonial.author} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    rating={testimonial.rating}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-1.5">
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
      </ScrollReveal>
      <ScrollReveal delay={250}>
        <section id="contact" className="pb-12">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="text-xl font-bold text-center">Connect With Me</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="text-center text-sm text-muted-foreground max-w-md mx-auto">
                Let&apos;s build something great together. Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                  social.navbar && (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-all duration-200 hover:scale-105"
                    >
                      <social.icon className="size-4" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  )
                ))}
                <a
                  href="https://cal.com/gaurav-kapur/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all duration-200 font-medium text-sm"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                  </svg>
                  Schedule a Call
                </a>
              </div>
            </BlurFade>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}