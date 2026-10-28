import SectionHeading from "../section-heading";
import ProcessCard1 from "./process-card1";
import ProcessCard2 from "./process-card2";
import ProcessCard3 from "./process-card3";

export default function ProcessSection() {
    return (
        <div id="our-process" className="flex w-full flex-col items-center px-4 sm:px-6">
        <section className="flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
            <SectionHeading className="text-3xl font-medium sm:text-5xl">
                Our Process
            </SectionHeading>
            <p className="text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">A thoughtful, structured approach to turning complex challenges into practical, scalable solutions.</p>
        </section>

        <div className="mt-8 flex w-full max-w-6xl flex-col items-center gap-5 sm:mt-10 lg:flex-row lg:items-stretch lg:justify-center">
            <ProcessCard1 />
            <ProcessCard2 />
            <ProcessCard3 />
        </div>
    </div>
    )
}