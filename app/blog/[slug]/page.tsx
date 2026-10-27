import BlogBody from "@/components/blog/blog-body"
import { BlogArticleHeader, BlogFrame } from "@/components/blog/blog-chrome"
import { getPost, getPosts } from "@/lib/blog"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export async function generateStaticParams() {
    const posts = await getPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const found = await getPost(slug)
    if (!found) return { title: "Blog" }
    return {
        title: found.post.title,
        description: found.post.description,
    }
}

export default function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    return (
        <Suspense fallback={<ArticleFallback />}>
            <Article params={params} />
        </Suspense>
    )
}

async function Article({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const found = await getPost(slug)
    if (!found) notFound()

    const { post, next } = found

    return (
        <main className="relative flex flex-1 flex-col">
            <BlogArticleHeader nextHref={next ? `/blog/${next.slug}` : undefined} />
            <BlogFrame>
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
            </BlogFrame>
        </main>
    )
}

function ArticleFallback() {
    return (
        <BlogFrame>
        <div className="w-full px-5 py-8 sm:px-8">
            <div className="h-4 w-28 bg-[#f3f3f3]" />
            <div className="mt-4 h-10 w-4/5 bg-[#f3f3f3]" />
            <div className="mt-4 h-16 w-full bg-[#f3f3f3]" />
        </div>
        </BlogFrame>
    )
}
