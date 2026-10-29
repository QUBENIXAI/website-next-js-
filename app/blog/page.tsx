import { getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Image from "next/image"
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
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-black sm:text-5xl">
                    From the Qubenix blog.
                </h1>
                <p className="mt-3 max-w-xl text-base leading-6 text-[#8a8a8a] sm:text-lg sm:leading-7">
                    Notes on AI automation, agents, and the systems we build for growing teams.
                </p>
            </section>

            <section className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col">
                        <div
                            className="aspect-[4/3] overflow-hidden bg-cover bg-center p-4 sm:p-5"
                            style={{ backgroundImage: "url('/blog/frame.jpg')" }}
                        >
                            <div className="relative h-full w-full bg-white">
                                <Image
                                    src={post.image}
                                    alt={post.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h2 className="mt-5 text-base font-medium tracking-tight text-black sm:text-lg">
                            {post.title}
                        </h2>
                        <p className="mt-3 text-sm text-[#6b6b6b]">{post.readingTime}</p>
                    </Link>
                ))}
            </section>
        </main>
        </div>
    )
}


const BlogFooter = () => {
    
}