import { BlogFooter } from "@/components/blog/blog-chrome"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-full flex-1 flex-col bg-[#f4f4f4]">
            {children}
            <BlogFooter />
        </div>
    )
}
