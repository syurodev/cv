"use client";

import { AboutSection } from "@/components/home/about-section";
import { Footer } from "@/components/home/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { WorkSection } from "@/components/home/work-section";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis
      root={false}
      className="h-screen w-full snap-y snap-mandatory overflow-y-auto bg-[#0a0a0a] text-white selection:bg-white selection:text-black"
    >
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <Footer />
    </ReactLenis>
  );
}
