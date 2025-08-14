import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16">
      {/* Avatar */}
      <Image
        src="/memoji.png" // replace with your avatar
        alt="Avatar"
        width={80}
        height={80}
        className="mb-4"
      />

      {/* Name + Description */}
      <h1 className="text-xl font-semibold">
        Kalim Khan —{" "}
        <span className="text-gray-500">
          Designing and Developing websites for bold startups, businesses
        </span>
      </h1>

      {/* Tags */}
      <div className="flex gap-3 mt-4">
        <span className="px-4 py-1 rounded-full bg-gray-200 text-sm">Designer</span>
        <span className="px-4 py-1 rounded-full bg-gray-200 text-sm flex items-center gap-1">
          <span>🎯</span> Framer Expert
        </span>
      </div>

      {/* Button */}
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
        Book a Call
      </button>
    </section>
  );
}
