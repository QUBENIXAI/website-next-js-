import SectionHeading from "../section-heading";
import ProcessCard1 from "./process-card1";
import ProcessCard2 from "./process-card2";
import ProcessCard3 from "./process-card3";

export default function ProcessSection() {
    return (
        <div id="our-process" className="mt-6 flex w-full flex-col items-center px-4 sm:mt-8 sm:px-6">
        <section className="flex w-full max-w-6xl flex-col items-start gap-2 text-left">
            <SectionHeading align="start" className="text-3xl font-medium sm:text-5xl">
                Our Process
            </SectionHeading>
            <p className="max-w-lg text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">A thoughtful, structured approach to turning complex challenges into practical, scalable solutions.</p>
        </section>

        <div className="-mx-4 mt-8 flex w-[calc(100%+2rem)] snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:mt-10 sm:w-[calc(100%+3rem)] sm:px-6 md:mx-0 md:w-full md:max-w-6xl md:snap-none md:flex-col md:items-center md:gap-5 md:overflow-visible md:px-0 lg:flex-row lg:items-stretch lg:justify-center">
            <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start [&>div]:w-full [&>div]:max-w-none md:w-full md:max-w-[380px] md:[&>div]:max-w-[380px]">
                <ProcessCard1 />
            </div>
            <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start [&>div]:w-full [&>div]:max-w-none md:w-full md:max-w-[380px] md:[&>div]:max-w-[380px]">
                <ProcessCard2 />
            </div>
            <div className="w-[calc(100%-3.25rem)] shrink-0 snap-start [&>div]:w-full [&>div]:max-w-none md:w-full md:max-w-[380px] md:[&>div]:max-w-[380px]">
                <ProcessCard3 />
            </div>
        </div>
    </div>
    )
}

const LastCard = () => {
    return (
        <div className="rounded-lg relative h-[300px] w-full max-w-[320px] overflow-hidden bg-white pt-4 sm:h-[430px] sm:max-w-[380px] sm:pt-6 lg:max-w-none">
            <div className="absolute inset-x-0 bottom-0 px-4 pt-6 pb-4 sm:px-5 sm:pt-10 sm:pb-8">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 backdrop-blur-xl"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,0.96) 55%, rgba(255,255,255,0.55) 100%)",
                        maskImage: "linear-gradient(to top, black 62%, transparent)",
                        WebkitMaskImage: "linear-gradient(to top, black 62%, transparent)",
                    }}
                />
                <div className="relative">
                    <p className="text-base font-medium tracking-tight sm:text-xl">04. Support and Continuous Improvement</p>
                    <p className="mt-1 text-xs leading-5 text-[#9a9a9a] sm:text-sm sm:leading-normal">We provide ongoing support, monitor real-world performance, and refine the solution based on user feedback to ensure long-term value and sustained growth.</p>
                </div>
            </div>
        </div>
    )
}