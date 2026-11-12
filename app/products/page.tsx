import Portfolio from "@/components/portfolio";
import SectionHeading from "@/components/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
};

export default function ProductsPage() {
    return (
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 py-8 sm:px-6">
            <Portfolio />
        </main>
    );
}

