import Hero from "./Hero";
import Projects from "./Projects";

export default function PageWrapper() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Hero />
      <Projects />
    </main>
  );
}