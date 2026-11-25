import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
};

export default function ProductsPage() {
    return (
        <>
            <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 pt-8 pb-0 sm:px-6">
                <Portfolio />
            </main>
            <div className="mt-16 w-full sm:mt-20">
                <Footer />
            </div>
        </>
    );
}

