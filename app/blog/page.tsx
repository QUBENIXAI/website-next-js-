import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
};

export default function BlogPage() {
    return (
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-16 sm:px-6">
            <SectionHeading className="text-3xl font-semibold sm:text-4xl">
                Blog
            </SectionHeading>
            <p className="mt-4 max-w-xl text-center text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                Notes on building smarter systems, from the work happening inside Qubenix.
            </p>
        </main>
    );
}
