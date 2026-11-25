import IndustriesSection from "@/components/industry";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries",
};

export default function IndustriesPage() {
    return (
        <main className="flex w-full flex-1 flex-col items-center gap-16 bg-background sm:gap-24">
            <IndustriesSection />
            <Footer />
        </main>
    );
}
