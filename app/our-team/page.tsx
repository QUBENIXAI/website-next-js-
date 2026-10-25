import Footer from "@/components/footer";
import OurTeam from "@/components/our-team";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team",
};

export default function OurTeamPage() {
    return (
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 py-10 sm:px-6 sm:py-16">
            <OurTeam />
            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
