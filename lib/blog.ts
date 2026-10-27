import { cacheLife } from "next/cache"
import fs from "fs"
import path from "path"

export type PostMeta = {
    slug: string
    title: string
    description: string
    date: string
    author: string
    readingTime: string
    image: string
    imageAlt: string
    order: number
}

export type Post = PostMeta & {
    content: string
}

const blogDir = path.join(process.cwd(), "content/blog")

function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
    if (!match) {
        throw new Error("Blog file is missing frontmatter")
    }

    const meta: Record<string, string> = {}
    for (const line of match[1].split("\n")) {
        const trimmed = line.trim()
        if (!trimmed) continue
        const separator = trimmed.indexOf(":")
        if (separator === -1) continue
        const key = trimmed.slice(0, separator).trim()
        let value = trimmed.slice(separator + 1).trim()
        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1)
        }
        meta[key] = value
    }

    return { meta, content: match[2].trim() }
}

function toPost(slug: string, raw: string): Post {
    const { meta, content } = parseFrontmatter(raw)
    return {
        slug,
        title: meta.title,
        description: meta.description,
        date: meta.date,
        author: meta.author,
        readingTime: meta.readingTime,
        image: meta.image,
        imageAlt: meta.imageAlt,
        order: Number(meta.order ?? 0),
        content,
    }
}

export async function getPosts(): Promise<Post[]> {
    "use cache"
    cacheLife("hours")
    return fs
        .readdirSync(blogDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const slug = file.replace(/\.md$/, "")
            const raw = fs.readFileSync(path.join(blogDir, file), "utf8")
            return toPost(slug, raw)
        })
        .sort((a, b) => a.order - b.order)
}

export async function getPost(slug: string) {
    const posts = await getPosts()
    const index = posts.findIndex((post) => post.slug === slug)
    if (index === -1) return null
    return {
        post: posts[index],
        next: posts[index + 1] ?? null,
    }
}
