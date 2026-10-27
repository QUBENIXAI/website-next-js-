import Careers from "@/components/careers";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
};

export default function CareersPage() {
    return (
        <main className="flex w-full flex-1 flex-col items-center gap-16 bg-background sm:gap-24">
            <Careers />
            <Footer />
        </main>
    );
}
