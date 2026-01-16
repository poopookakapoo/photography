import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import CtaSection from "@/sections/CtaSection";
import GallerySectionClient from "@/sections/GallerySectionClient";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySectionClient />
      <AboutSection />
      <CtaSection />
    </>
  );
}
