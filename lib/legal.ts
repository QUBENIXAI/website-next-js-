import { cacheLife } from "next/cache"
import fs from "fs"
import path from "path"

export type LegalPage = {
    slug: string
    title: string
    description: string
    date: string
    content: string
}

const legalDir = path.join(process.cwd(), "content/legal")

function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
    if (!match) throw new Error("Legal file is missing frontmatter")

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

export async function getLegalPages(): Promise<LegalPage[]> {
    const stamp = fs
        .readdirSync(legalDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => fs.statSync(path.join(legalDir, file)).mtimeMs)
        .join(":")
    return readLegalPages(stamp)
}

async function readLegalPages(_stamp: string): Promise<LegalPage[]> {
    "use cache"
    cacheLife("hours")
    const files = fs.readdirSync(legalDir).filter((file) => file.endsWith(".md"))
    return files
        .map((file) => {
            const slug = file.replace(/\.md$/, "")
            const raw = fs.readFileSync(path.join(legalDir, file), "utf8")
            const { meta, content } = parseFrontmatter(raw)
            return {
                slug,
                title: meta.title,
                description: meta.description,
                date: meta.date,
                content,
            }
        })
        .sort((a, b) => a.title.localeCompare(b.title))
}

export async function getLegalPage(slug: string) {
    const pages = await getLegalPages()
    return pages.find((page) => page.slug === slug) ?? null
}
