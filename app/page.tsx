import FaqSection from "@/components/faq-section";
import Card1 from "@/components/what-we-do/Card1";
import CtaButton from "@/components/cta-button";
import WhatWeProvide from "@/components/what-we-do/main";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import ProcessSection from "@/components/process/process-section";
import Bento1 from "@/components/bento-section/bento-1";
import Bento2 from "@/components/bento-section/bento-2";
import Bento3 from "@/components/bento-section/bento-3";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center bg-background font-sans">
      <HeroSection />
      <WhatWeProvide />
      <section className="mt-16 flex w-full justify-center px-4">
        <div className="flex w-full max-w-6xl flex-col gap-4 xl:flex-row xl:items-stretch">
          <Bento1 />
          <div className="flex w-full min-w-0 flex-1 flex-col gap-4">
            <Bento2 />
            <Bento3 />
          </div>
        </div>
      </section>
      <ProcessSection />
      <FaqSection />
      <Footer/>
    </div>
  );
}
