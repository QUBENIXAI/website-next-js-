import FaqSection from "@/components/faq-section";
import Card1 from "@/components/what-we-do/Card1";
import CtaButton from "@/components/cta-button";
import WhatWeProvide from "@/components/what-we-do/main";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import ProcessSection from "@/components/process/process-section";
import Bento1 from "@/components/bento-section/bento-1";
import Bento2 from "@/components/bento-section/bento-2";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center bg-background font-sans">
      <HeroSection />
      <WhatWeProvide />
      <section className="mt-16 flex w-full justify-center px-4">
        <div className="flex w-full max-w-6xl flex-col items-start justify-center gap-4 xl:flex-row">
          <Bento1 />
          <Bento2 />
        </div>
      </section>
      <ProcessSection />
      <FaqSection />
      <Footer/>
    </div>
  );
}
