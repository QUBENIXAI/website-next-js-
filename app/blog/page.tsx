import { getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog",
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className="flex flex-1 justify-center px-6 mt-10">
        <main className="flex w-full max-w-5xl flex-col  px-5 pt-10 pb-4 sm:px-8">
            <section>
                <h1 className="text-4xl font-medium tracking-tight text-black sm:text-5xl">
                    From the Qubenix blog.
                </h1>
                <p className="mt-3 text-base leading-6 text-[#8a8a8a] sm:text-lg sm:leading-7">
                    Notes on AI automation, agents, and the systems we build for growing teams.
                </p>
            </section>

            <section className="mt-12 border-t border-[#e6e6e6]">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex items-center justify-between gap-6 border-b border-[#e6e6e6] py-8 sm:gap-10"
                    >
                        <div className="min-w-0">
                            <h2 className="text-xl font-medium tracking-tight text-black sm:text-2xl">{post.title}</h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                                {post.description}
                            </p>
                        </div>
                        <svg
                            aria-hidden
                            viewBox="0 0 20 20"
                            className="size-5 shrink-0 text-black transition-transform duration-200 group-hover:translate-x-1"
                        >
                            <path
                                d="M4 10h12M12 6l4 4-4 4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                ))}
            </section>
        </main>
        </div>
    )
}
