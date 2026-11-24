import Footer from "@/components/footer";
import HowItStarted from "@/components/how-it-started";
import OurTeam from "@/components/our-team";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team",
};

export default function OurTeamPage() {
    return (
        <main className="flex w-full flex-1 flex-col items-center bg-background">
            <OurTeam />
            <HowItStarted />
            <div className="mt-16 w-full sm:mt-24">
                <Footer />
            </div>
        </main>
    );
}
