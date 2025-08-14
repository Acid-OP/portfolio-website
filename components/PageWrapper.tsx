import Hero from "./Hero";
import Projects from "./Projects";

export default function  PageWrapper() {
    return (
        <>
        <main className="min-h-screen flex items-center justify-center bg-[#f2f2f2]">
      <div className="flex flex-col items-center w-full max-w-6xl px-4">
        <Hero />
        <Projects />
      </div>
    </main>
        </>
    )
}