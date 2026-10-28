import SectionHeading from "../section-heading";
import ProcessCard1 from "./process-card1";
import ProcessCard2 from "./process-card2";
import ProcessCard3 from "./process-card3";

export default function ProcessSection() {
    return (
        <div id="our-process" className="mt-6 flex w-full flex-col items-center px-4 sm:mt-8 sm:px-6">
        <section className="flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
            <SectionHeading className="text-3xl font-medium sm:text-5xl">
                Our Process
            </SectionHeading>
            <p className="text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">A thoughtful, structured approach to turning complex challenges into practical, scalable solutions.</p>
        </section>

        <div className="mt-8 flex w-full max-w-6xl flex-col items-center gap-5 sm:mt-10">
            <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-stretch lg:justify-center">
                <ProcessCard1 />
                <ProcessCard2 />
                <ProcessCard3 />
            </div>
            <LastCard />
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