import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"

const components: Components = {
    h2: ({ children }) => (
        <h2 className="mt-12 text-xl font-medium tracking-tight text-black sm:text-2xl">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="mt-8 text-lg font-medium tracking-tight text-black">{children}</h3>
    ),
    p: ({ children, node }) => {
        const onlyImage =
            node?.children.length === 1 &&
            node.children[0].type === "element" &&
            node.children[0].tagName === "img"
        if (onlyImage) return <>{children}</>
        return <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a] sm:text-base sm:leading-8">{children}</p>
    },
    ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-[#3a3a3a] sm:text-base sm:leading-8">{children}</ul>,
    ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-[#3a3a3a] sm:text-base sm:leading-8">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    strong: ({ children }) => <strong className="font-medium text-black">{children}</strong>,
    a: ({ href, children }) => (
        <a href={href} className="underline decoration-[#cfcfcf] underline-offset-4">
            {children}
        </a>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mt-6 border-l-2 border-[#2F6BFF] pl-4 text-[15px] leading-7 text-[#3a3a3a] sm:text-base sm:leading-8">
            {children}
        </blockquote>
    ),
    table: ({ children }) => (
        <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">{children}</table>
        </div>
    ),
    th: ({ children }) => <th className="border-b border-[#ececec] px-3 py-2 font-medium text-black">{children}</th>,
    td: ({ children }) => <td className="border-b border-[#f2f2f2] px-3 py-2 align-top text-[#3a3a3a]">{children}</td>,
    pre: ({ children }) => (
        <pre className="mt-6 overflow-x-auto bg-[#f6f6f6] p-4 text-[13px] leading-6 text-[#171717]">{children}</pre>
    ),
    code: ({ className, children }) => {
        if (className) return <code className="font-mono">{children}</code>
        return <code className="bg-[#f3f3f3] px-1.5 py-0.5 font-mono text-[0.92em]">{children}</code>
    },
    img: ({ src, alt }) => {
        if (!src || typeof src !== "string") return null
        return (
            <figure
                className="mt-8 bg-cover bg-center p-6 sm:p-10"
                style={{ backgroundImage: "url('/blog/frame.jpg')" }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt ?? ""} className="w-full bg-white" />
            </figure>
        )
    },
}

export default function BlogBody({ content }: { content: string }) {
    return (
        <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
