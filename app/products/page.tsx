import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
};

export default function ProductsPage() {
    return (
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-16 sm:px-6">
            <SectionHeading className="text-3xl font-semibold sm:text-5xl">
                Products
            </SectionHeading>
            <p className="mt-4 max-w-xl text-center text-base leading-6 text-[#616161] sm:text-lg sm:leading-7">
                Systems, automations, and tools Qubenix builds for teams that want work to move with less friction.
            </p>
        </main>
    );
}
