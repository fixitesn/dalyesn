import Starfield from "@/components/Starfield";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HobbiesSection from "@/components/HobbiesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <Starfield />
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <HobbiesSection />
      <FooterSection />
    </div>
  </div>
);

export default Index;
