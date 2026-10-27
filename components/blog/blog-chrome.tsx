import Link from "next/link"

export function BlogArticleHeader({ nextHref }: { nextHref?: string }) {
    return (
        <header className="sticky top-0 z-20 border-b border-[#e6e6e6] bg-white">
            <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8">
                <Link href="/blog" className="text-sm text-black">
                    ← Go back
                </Link>
                {nextHref ? (
                    <Link href={nextHref} className="text-sm text-black">
                        Next →
                    </Link>
                ) : (
                    <span />
                )}
            </div>
        </header>
    )
}

export function BlogFooter() {
    return (
        <footer className="relative z-10 px-6 pt-8 pb-16 text-center">
            <p className="text-sm text-[#8a8a8a]">More blogs coming soon</p>
        </footer>
    )
}
