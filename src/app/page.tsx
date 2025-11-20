import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <InfoSection />
      <ServicesSection />
    </div>
  );
}
