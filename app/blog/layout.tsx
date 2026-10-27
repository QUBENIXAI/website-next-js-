import { BlogFooter } from "@/components/blog/blog-chrome"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-full flex-1 justify-center bg-[#f4f4f4] px-6">
            <div className="relative flex w-full max-w-5xl flex-1 flex-col border-x border-[#c8c8c8] bg-white">
                <span aria-hidden className="pointer-events-none absolute inset-y-0 -left-4 w-px bg-[#c8c8c8]" />
                <span aria-hidden className="pointer-events-none absolute inset-y-0 -right-4 w-px bg-[#c8c8c8]" />
                {children}
                <BlogFooter />
            </div>
        </div>
    )
}
