import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prompts",
};

export default function PromptsPage() {
    return (
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-16 sm:px-6">
            <SectionHeading className="text-3xl font-semibold sm:text-5xl">
                Prompts
            </SectionHeading>
            <p className="mt-4 max-w-xl text-center text-base leading-6 text-[#616161] sm:text-lg sm:leading-7">
                Prompts and starting points for the workflows, agents, and automations we put into practice.
            </p>
        </main>
    );
}
