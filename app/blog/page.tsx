import { getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"
import BlogIcon from "@/components/icon-crafts/blog-icon"

export const metadata: Metadata = {
    title: "Blog",
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className="flex flex-1 justify-center px-6 mt-10">
        <main className="flex w-full max-w-6xl flex-col px-5 pt-10 pb-4 sm:px-8">
            <section className="flex flex-col items-center text-center">
                <BlogIcon />
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-black sm:text-6xl">
                    From the Qubenix Blogs
                </h1>
                <p className="mt-3 max-w-xl text-base leading-6 text-[#8a8a8a] sm:text-lg sm:leading-7">
                    We ocasionally post blogs on AI automation, agents, and the systems we build for growing teams.
                </p>
            </section>

            <section className="mt-14 flex w-full flex-col">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-2 border-t border-[#ececec] py-6 last:border-b sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                    >
                        <div className="min-w-0">
                            <h2 className="text-lg font-medium tracking-tight text-black transition-colors duration-200 group-hover:text-[#3C32AC] sm:text-xl">
                                {post.title}
                            </h2>
                            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#6b6b6b]">
                                {post.description}
                            </p>
                        </div>
                        <p className="shrink-0 text-xs text-[#8a8a8a] sm:text-sm">
                            {post.date}
                            <span className="px-1.5">·</span>
                            {post.readingTime}
                        </p>
                    </Link>
                ))}
            </section>
        </main>
        </div>
    )
}
