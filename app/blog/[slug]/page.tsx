import BlogBody from "@/components/blog/blog-body"
import { BlogArticleHeader } from "@/components/blog/blog-chrome"
import { getPost, getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const found = getPost(slug)
    if (!found) return { title: "Blog" }
    return {
        title: found.post.title,
        description: found.post.description,
    }
}

export default async function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const found = getPost(slug)
    if (!found) notFound()

    const { post, next } = found

    return (
        <main className="relative flex-1">
            <BlogArticleHeader nextHref={next ? `/blog/${next.slug}` : undefined} />
            <article className="w-full px-5 py-8 sm:px-8">
                <p className="text-sm text-[#8a8a8a]">{post.date}</p>
                <h1 className="mt-3 text-3xl font-medium tracking-tight text-black sm:text-4xl">{post.title}</h1>
                <p className="mt-4 text-base leading-7 text-[#616161]">{post.description}</p>
                <p className="mt-6 text-sm text-[#8a8a8a]">
                    {post.author}
                    <span className="px-2">·</span>
                    {post.readingTime}
                </p>
                <BlogBody content={post.content} />
            </article>
        </main>
    )
}
