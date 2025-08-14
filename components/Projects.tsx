import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    { image: "/blindspot.png", title: "Blindspot Cloud", role: "Framer Development" },
    { image: "/leadplus.png", title: "Leadplus", role: "Design, Framer Development" },
    { image: "/creativecue.png", title: "Creativecue", role: "Framer Development" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto bg-[#f2f2f2]">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
