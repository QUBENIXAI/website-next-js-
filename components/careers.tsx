"use client"

import { CaretDown } from "@phosphor-icons/react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import CornerDotGrids from "./corner-dot-grids"
import IconCraft from "./icon-crafts/main"
import { BriefcaseIcon } from "@phosphor-icons/react"

interface Position {
    title: string
    status: "hiring" | "closed"
    description: string
    tags: string[]
    location: string
    apply_url: string
    key_responsibilities: string[]
    relevant_skills: string[]
}

const positions: Position[] = [
    {
        title: "AI Automation",
        status: "hiring",
        description: "Help design intelligent workflows that reduce repetitive work and connect business processes.",
        tags: ["Logical Thinking", "APIs & Webhooks", "Automation Tools", "n8n", "AI Agents"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Identify opportunities to automate repetitive tasks.",
            "Design and implement automation workflows.",
            "Work with APIs, webhooks, and business applications.",
            "Explore tools such as n8n and AI automation platforms.",
            "Test workflows and document their behaviour.",
        ],
        relevant_skills: [
            "Logical thinking and problem-solving",
            "Understanding of APIs and webhooks",
            "Familiarity with automation tools",
            "Basic programming knowledge",
            "Interest in AI agents and workflow automation",
        ],
    },
    {
        title: "Full-Stack Development",
        status: "hiring",
        description: "Help build modern websites, web applications, APIs, and business software.",
        tags: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Backend Fundamentals", "Git"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Develop responsive user interfaces.",
            "Implement application features.",
            "Work with APIs and backend services.",
            "Debug and test application behaviour.",
            "Maintain code quality and documentation.",
        ],
        relevant_skills: [
            "HTML, CSS, and JavaScript or TypeScript",
            "Familiarity with React or a comparable frontend framework",
            "Understanding of APIs and backend fundamentals",
            "Familiarity with Git",
            "Interest in databases and software architecture",
        ],
    },
    {
        title: "AI Research & Development",
        status: "hiring",
        description: "Explore AI capabilities and help prototype useful AI-powered applications and intelligent systems.",
        tags: ["Analytical Thinking", "Machine Learning", "Generative AI", "Python Fundamentals", "LLM Applications"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Research relevant AI models and techniques.",
            "Evaluate AI tools and APIs.",
            "Prototype AI-powered features.",
            "Test outputs and document limitations.",
            "Investigate AI agents, retrieval systems, and LLM applications.",
        ],
        relevant_skills: [
            "Strong analytical thinking",
            "Interest in machine learning and generative AI",
            "Familiarity with Python",
            "Ability to research and evaluate technical approaches",
            "Clear technical documentation",
        ],
    },
    {
        title: "Content Creation & Social Media",
        status: "hiring",
        description: "Help communicate Qubenix's ideas, products, and technology through engaging digital content.",
        tags: ["Writing & Communication", "Social Media", "Storytelling", "Video Concepts", "Technology Explaining"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Develop content ideas and content calendars.",
            "Create social media posts and short-form video concepts.",
            "Write captions and technology explainers.",
            "Support content production and publishing.",
            "Review content performance when analytics are available.",
        ],
        relevant_skills: [
            "Strong writing and communication",
            "Understanding of social media platforms",
            "Creative thinking and storytelling",
            "Familiarity with video or design tools",
            "Interest in technology and AI",
        ],
    },
    {
        title: "SEO & Website Growth",
        status: "hiring",
        description: "Help improve website visibility, organic discovery, and content performance.",
        tags: ["SEO Fundamentals", "Keyword Research", "Content Optimisation", "Google Search Console", "Website Growth"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Research relevant keywords and search intent.",
            "Support on-page SEO improvements.",
            "Optimise website content and metadata.",
            "Identify internal linking opportunities.",
            "Monitor available search performance data.",
            "Suggest improvements based on evidence.",
        ],
        relevant_skills: [
            "Understanding of SEO fundamentals",
            "Keyword research and content optimisation",
            "Familiarity with Google Search Console or analytics tools",
            "Strong research and analytical skills",
            "Interest in website growth and content strategy",
        ],
    },
    {
        title: "Graphic Design & UI/UX",
        status: "hiring",
        description: "Help create intuitive interfaces and polished visual experiences for Qubenix websites, applications, and digital content.",
        tags: ["Visual Design", "Figma", "Typography & Layout", "Responsive Interfaces", "UI/UX Flows"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Design interface layouts and user flows.",
            "Create wireframes and visual concepts.",
            "Improve usability and visual consistency.",
            "Develop graphics for digital platforms.",
            "Collaborate with developers to support implementation.",
        ],
        relevant_skills: [
            "Understanding of visual design principles",
            "Familiarity with Figma or comparable tools",
            "Understanding of typography, spacing, and layout",
            "Interest in responsive design and usability",
            "A portfolio or examples of previous work",
        ],
    },
    {
        title: "Community & Partnerships",
        status: "hiring",
        description: "Help build relationships with students, professionals, communities, educational institutions, and potential partners.",
        tags: ["Interpersonal Skills", "Relationship Building", "Outreach & Coordination", "Community Platforms", "Collaboration"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Support community engagement initiatives.",
            "Research relevant organisations and opportunities.",
            "Assist with partnership outreach.",
            "Coordinate communication and follow-ups.",
            "Help organise community activities and collaborations.",
        ],
        relevant_skills: [
            "Strong communication and interpersonal skills",
            "Organisation and follow-through",
            "Research and relationship-building",
            "Familiarity with social media or community platforms",
            "Interest in technology communities and collaboration",
        ],
    },
    {
        title: "Operations & Project Management",
        status: "hiring",
        description: "Help coordinate projects, organise workflows, and improve the way teams plan and execute work.",
        tags: ["Organisation & Planning", "Time Management", "Written Communication", "Problem Solving", "Workflow Coordination"],
        location: "Remote",
        apply_url: "https://forms.gle/",
        key_responsibilities: [
            "Track project tasks and progress.",
            "Maintain documentation and project updates.",
            "Coordinate communication between contributors.",
            "Identify operational bottlenecks.",
            "Support planning, reporting, and follow-ups.",
        ],
        relevant_skills: [
            "Organisation and time management",
            "Clear written communication",
            "Attention to detail",
            "Problem-solving and coordination",
            "Familiarity with project management tools",
        ],
    },
]

const departments: Record<string, string> = {
    "AI Automation": "Engineering",
    "Full-Stack Development": "Engineering",
    "AI Research & Development": "Research",
    "Content Creation & Social Media": "Content",
    "SEO & Website Growth": "Growth",
    "Graphic Design & UI/UX": "Design",
    "Community & Partnerships": "Community",
    "Operations & Project Management": "Operations",
}

export default function Careers() {
    const [openTitle, setOpenTitle] = useState<string | null>(null)
    const [location, setLocation] = useState("All")
    const [department, setDepartment] = useState("All")
    const [openFilter, setOpenFilter] = useState<"location" | "department" | null>(null)
    const [revealed, setRevealed] = useState(false)

    const locations = ["All", ...new Set(positions.map((position) => position.location))]
    const departmentOptions = ["All", ...new Set(positions.map((position) => departments[position.title]))]

    const visible = positions.filter((position) => {
        const matchesLocation = location === "All" || position.location === location
        const matchesDepartment = department === "All" || departments[position.title] === department
        return matchesLocation && matchesDepartment
    })

    useEffect(() => {
        if (!openFilter) return
        const close = () => setOpenFilter(null)
        window.addEventListener("pointerdown", close)
        return () => window.removeEventListener("pointerdown", close)
    }, [openFilter])

    return (
        <motion.div
            className="relative isolate w-full rounded-md"
            initial={{ filter: "blur(18px)", opacity: 0.65 }}
            animate={revealed ? { filter: "none", opacity: 1 } : { filter: "blur(0px)", opacity: 1 }}
            transition={revealed ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setRevealed(true)}
        >
            <CornerDotGrids corners="top" />
            <div className="relative z-0 mx-auto w-full max-w-6xl bg-background px-4 sm:px-6">
                <section className="flex w-full flex-col items-center gap-4 sm:py-16 text-center">
                    <div className="flex flex-col items-center gap-5">
                        <IconCraft icon={<BriefcaseIcon />} />
                        <h1 className="mb-2 text-4xl font-medium leading-[1.05] tracking-tight text-black sm:text-5xl xl:text-6xl">
                            Join us
                            <br />
                            to build what&apos;s next
                        </h1>
                    </div>

                    <p className="max-w-xl text-base leading-6 text-[#616161] sm:text-lg sm:leading-7 ">
                        Open roles for people who want to build smarter systems
                        <br className="hidden sm:block" />
                        with the Qubenix team. All of them are remote.
                    </p>
                </section>

                <section id="positions" className="scroll-mt-24 pb-4">
                    <div className="grid w-full overflow-hidden border border-[#ececec] bg-white md:grid-cols-[240px_1fr]">
                        <aside className="border-[#ececec] md:border-r" onPointerDown={(event) => event.stopPropagation()}>
                            <FilterSelect
                                label="Location"
                                value={location}
                                options={locations}
                                open={openFilter === "location"}
                                onToggle={() => setOpenFilter((current) => (current === "location" ? null : "location"))}
                                onSelect={(value) => {
                                    setLocation(value)
                                    setOpenFilter(null)
                                }}
                            />
                            <FilterSelect
                                label="Department"
                                value={department}
                                options={departmentOptions}
                                open={openFilter === "department"}
                                onToggle={() => setOpenFilter((current) => (current === "department" ? null : "department"))}
                                onSelect={(value) => {
                                    setDepartment(value)
                                    setOpenFilter(null)
                                }}
                            />
                        </aside>

                        <div>
                            <h2 className="border-b border-[#ececec] px-4 py-5 text-lg font-medium tracking-tight sm:px-6 sm:text-xl">
                                Open Positions
                            </h2>
                            {visible.length === 0 ? (
                                <p className="px-4 py-8 text-sm text-[#9a9a9a] sm:px-6">No open roles for this filter.</p>
                            ) : (
                                visible.map((position) => (
                                    <RoleRow
                                        key={position.title}
                                        position={position}
                                        open={openTitle === position.title}
                                        onToggle={() =>
                                            setOpenTitle((current) => (current === position.title ? null : position.title))
                                        }
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

function FilterSelect({
    label,
    value,
    options,
    open,
    onToggle,
    onSelect,
}: {
    label: string
    value: string
    options: string[]
    open: boolean
    onToggle: () => void
    onSelect: (value: string) => void
}) {
    return (
        <div className="border-b border-[#ececec]">
            <button
                type="button"
                aria-expanded={open}
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
            >
                <span>
                    <span className="block text-sm text-black">{label}</span>
                    <span className="mt-0.5 block text-xs text-[#9a9a9a]">{value}</span>
                </span>
                <CaretDown className={`size-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open ? (
                <ul className="border-t border-[#f2f2f2]">
                    {options.map((option) => (
                        <li key={option}>
                            <button
                                type="button"
                                onClick={() => onSelect(option)}
                                className={`w-full px-5 py-2.5 text-left text-sm ${option === value ? "text-black" : "text-[#616161]"
                                    }`}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

function RoleRow({
    position,
    open,
    onToggle,
}: {
    position: Position
    open: boolean
    onToggle: () => void
}) {
    return (
        <article className="border-b border-[#ececec] last:border-b-0">
            <div className="flex items-center justify-between gap-4 px-4 py-5 sm:px-6">
                <div className="min-w-0">
                    <h3 className="text-sm font-medium tracking-tight text-black sm:text-base">{position.title}</h3>
                    <p className="mt-1 text-xs text-[#9a9a9a] sm:text-sm">{position.location}</p>
                </div>
                <button
                    type="button"
                    aria-expanded={open}
                    onClick={onToggle}
                    className="shrink-0 rounded-md border border-[#e4e4e4] px-3 py-1.5 text-xs text-black sm:px-3.5 sm:text-sm"
                >
                    {open ? "Close" : "Read more"}
                </button>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden" inert={open ? undefined : true}>
                    <div className="border-t border-[#f2f2f2] bg-[#fafafa] px-4 py-5 sm:px-6">
                        <p className="max-w-xl text-sm leading-6 text-[#616161]">{position.description}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {position.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-xs text-[#3a3a3a]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-10">
                            <DetailList label="Responsibilities" items={position.key_responsibilities} />
                            <DetailList label="Skills" items={position.relevant_skills} />
                        </div>
                        {position.status === "hiring" ? (
                            <a href={position.apply_url} className="mt-6 rounded-md inline-flex text-sm font-medium text-[#fff] bg-blue-500 px-5 py-2">
                                Apply
                            </a>
                        ) : (
                            <p className="mt-6 text-sm text-[#9a9a9a]">This role is closed.</p>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

function DetailList({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <p className="text-xs font-medium text-[#9a9a9a]">{label}</p>
            <ul className="mt-3 flex flex-col gap-2">
                {items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-[#1a1a1a]">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
