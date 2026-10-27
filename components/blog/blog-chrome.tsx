import Link from "next/link"

const line = "pointer-events-none absolute w-px bg-[#c8c8c8]"

export function BlogFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center px-6">
            <div className="relative flex w-full max-w-5xl flex-col bg-white">
                <span aria-hidden className={`${line} inset-y-0 left-0`} />
                <span aria-hidden className={`${line} inset-y-0 -left-4`} />
                <span aria-hidden className={`${line} inset-y-0 right-0`} />
                <span aria-hidden className={`${line} inset-y-0 -right-4`} />
                {children}
            </div>
        </div>
    )
}

function ColumnLines({ className }: { className: string }) {
    return (
        <div aria-hidden className={`pointer-events-none absolute inset-x-0 px-6 ${className}`}>
            <div className="relative mx-auto h-full w-full max-w-5xl">
                <span className={`${line} inset-y-0 left-0`} />
                <span className={`${line} inset-y-0 -left-4`} />
                <span className={`${line} inset-y-0 right-0`} />
                <span className={`${line} inset-y-0 -right-4`} />
            </div>
        </div>
    )
}

export function BlogRule({ cross = false }: { cross?: boolean }) {
    return (
        <div aria-hidden className={`relative h-px bg-[#c8c8c8] ${cross ? "z-10" : ""}`}>
            {cross ? <ColumnLines className="-top-4 h-10" /> : null}
        </div>
    )
}

export function BlogArticleHeader({ nextHref }: { nextHref?: string }) {
    return (
        <header className="sticky top-0 z-20 bg-[#f4f4f4]">
            <div className="px-6">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
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
            </div>
            <BlogRule />
            <ColumnLines className="top-0 -bottom-4" />
        </header>
    )
}

export function BlogFooter() {
    return (
        <footer className="bg-[#f4f4f4] px-6 pt-8 pb-16 text-center">
            <p className="text-sm text-[#8a8a8a]">More blogs coming soon</p>
        </footer>
    )
}
