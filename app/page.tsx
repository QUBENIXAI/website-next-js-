import FaqSection from "@/components/faq-section";
import Card1 from "@/components/what-we-do/Card1";
import CtaButton from "@/components/cta-button";
import WhatWeProvide from "@/components/what-we-do/main";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import ProcessSection from "@/components/process/process-section";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center bg-background font-sans">
      <HeroSection />
      <WhatWeProvide />
      <ProcessSection />
      <FaqSection />
      <Footer/>
    </div>
  );
}
