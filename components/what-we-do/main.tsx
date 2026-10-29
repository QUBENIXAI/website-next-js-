import SectionHeading from "@/components/section-heading";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function WhatWeProvide() {
    return (
        <div id="what-we-do" className="flex w-full flex-col items-center px-4 sm:px-6">
            <section className="flex w-full max-w-6xl flex-col items-start gap-2 text-left">
            <SectionHeading align="start" className="text-3xl font-medium sm:text-5xl">
                    What We Do
                </SectionHeading>
                <p className="max-w-lg text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">We offer a range of services to help you grow your business. We are a team of experts who are passionate about helping you grow your business.</p>
            </section>

            <div className="-mx-4 mt-8 flex w-[calc(100%+2rem)] snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:mt-10 sm:w-[calc(100%+3rem)] sm:px-6 md:hidden">
                <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start">
                    <Card1 />
                </div>
                <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start">
                    <Card2 />
                </div>
                <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start">
                    <Card3 />
                </div>
            </div>
            <div className="mt-8 hidden w-full max-w-6xl items-stretch gap-4 sm:mt-10 md:flex md:flex-row">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </div>
    )
}