import AvatarCircle from "@/components/AvatarCircle";
import NameDescription from "@/components/NameDescription";
import TagPill from "./tagPill";


export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-[#f2f2f2]">
      <AvatarCircle src="/icon.jpg" alt="Kalim Khan Profile" size={120} />

      <NameDescription
        name="Gaurav Kapur"
        description="Designing and Developing websites for bold startups, businesses"
      />

      <div className="flex gap-3 mt-4">
        <TagPill label="Design" />
        <TagPill label="Framer" />
      </div>

      <button className="mt-6 px-6 py-2 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
        Book a Call
      </button>
    </section>
  );
}
