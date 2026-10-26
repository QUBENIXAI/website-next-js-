import FaqSection from "@/components/faq-section";
import WhatWeProvide from "@/components/what-we-do/main";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import ProcessSection from "@/components/process/process-section";
import SectionHeading from "@/components/section-heading";
import Bento1 from "@/components/bento-section/bento-1";
import Bento2 from "@/components/bento-section/bento-2";
import Bento3 from "@/components/bento-section/bento-3";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-10 bg-background font-sans sm:gap-16">
      <HeroSection />
      <WhatWeProvide />
      <section id="services" className="flex w-full flex-col items-center px-4 sm:px-6">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
          <SectionHeading className="text-2xl font-medium sm:text-4xl">
            Our Services
          </SectionHeading>
          <p className="text-xs leading-5 text-[#616161] sm:text-base sm:leading-7">
            Websites, business systems, industry AI, and voice agents built around how your team operates.
          </p>
        </div>
        <div className="mt-8 flex w-full max-w-6xl flex-col gap-4 sm:mt-10 xl:flex-row xl:items-stretch">
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
