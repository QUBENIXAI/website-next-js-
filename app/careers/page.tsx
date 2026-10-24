import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
};

export default function CareersPage() {
    return (
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-16 sm:px-6">
            <SectionHeading className="text-3xl font-semibold sm:text-4xl">
                Careers
            </SectionHeading>
            <p className="mt-4 max-w-xl text-center text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                Open roles for people who want to build smarter systems with the Qubenix team.
            </p>
        </main>
    );
}
