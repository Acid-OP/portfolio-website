import AvatarCircle from "@/components/AvatarCircle";
import NameDescription from "@/components/NameDescription";
import CallToActionButton from "./CallToActionButton";


export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-[#f2f2f2]">
      <AvatarCircle src="/icon.jpg" alt="Kalim Khan Profile" size={120} />

      <NameDescription
        name="Gaurav Kapur"
        description="Designing and Developing websites for bold startups, businesses"
      />
       <CallToActionButton label="Book a Call" />
    </section>
  );
}
