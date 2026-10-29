import BlogBody from "@/components/blog/blog-body"
import BlogReveal from "@/components/blog/blog-reveal"
import { BlogArticleHeader, BlogFrame, BlogRule } from "@/components/blog/blog-chrome"
import { getLegalPage, getLegalPages } from "@/lib/legal"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export async function generateStaticParams() {
    const pages = await getLegalPages()
    return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const page = await getLegalPage(slug)
    if (!page) return { title: "Legal" }
    return {
        title: page.title,
        description: page.description,
    }
}

export default function LegalDocumentPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    return (
        <Suspense fallback={<LegalFallback />}>
            <LegalDocument params={params} />
        </Suspense>
    )
}

async function LegalDocument({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const page = await getLegalPage(slug)
    if (!page) notFound()

    return (
        <main className="relative flex flex-1 flex-col">
            <BlogArticleHeader backHref="/" />
            <BlogFrame>
                <BlogReveal>
                    <p className="text-sm text-[#8a8a8a]">{page.date}</p>
                    <h1 className="mt-3 text-3xl font-medium tracking-tight text-black sm:text-4xl">{page.title}</h1>
                    <p className="mt-4 text-base leading-7 text-[#616161]">{page.description}</p>
                    <div className="[&_a[href^='mailto:']]:text-[#2F6BFF] [&_a[href^='mailto:']]:decoration-[#2F6BFF]">
                        <BlogBody content={page.content} />
                    </div>
                </BlogReveal>
            </BlogFrame>
            <BlogRule />
        </main>
    )
}

function LegalFallback() {
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
