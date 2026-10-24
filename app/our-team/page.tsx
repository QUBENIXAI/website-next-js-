import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team",
};

export default function OurTeamPage() {
    return (
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-16 sm:px-6">
            <SectionHeading className="text-3xl font-semibold sm:text-4xl">
                Our Team
            </SectionHeading>
            <p className="mt-4 max-w-xl text-center text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                The people designing and building the systems behind Qubenix.
            </p>
        </main>
    );
}
