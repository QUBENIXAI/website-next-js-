import { getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog",
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className="flex flex-1 justify-center px-6">
        <main className="flex w-full max-w-5xl flex-col bg-white px-5 pt-10 pb-4 sm:px-8">
            <section>
                <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
                    From the Qubenix blog.
                </h1>
                <p className="mt-3 text-sm leading-6 text-[#8a8a8a] sm:text-base sm:leading-7">
                    Notes on AI automation, agents, and the systems we build for growing teams.
                </p>
            </section>

            <section className="mt-10 border-t border-[#e4e4e4]">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block border-b border-[#e4e4e4] py-7"
                    >
                        <p className="text-xs text-[#8a8a8a] sm:text-sm">
                            <span className="text-black">Editorial</span>
                            <span className="px-2">·</span>
                            {post.date}
                        </p>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-2xl">{post.title}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                            {post.description}
                        </p>
                        <p className="mt-4 text-xs text-[#8a8a8a] sm:text-sm">
                            {post.author}
                            <span className="px-2">·</span>
                            {post.readingTime}
                        </p>
                    </Link>
                ))}
            </section>
        </main>
        </div>
    )
}
