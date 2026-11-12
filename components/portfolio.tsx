"use client"

import { motion } from 'motion/react'
import IconCraft from './icon-crafts/main'
import { ArrowUpRightIcon, StackSimpleIcon } from '@phosphor-icons/react'
import Image from 'next/image'


const Products = [
    {
        image: "/products/QubenixHR.png",
        title: "Qubenix AI HR",
        description:
            "A human resource management platform designed to organise employee records, streamline HR workflows, manage attendance, and simplify everyday people operations.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "",
        title: "Qubenix AI Finance",
        description:
            "A financial management platform designed to bring invoices, expenses, payments, cash flow, and financial reporting into one organised workspace with AI-assisted insights.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "",
        title: "Qubenix AI Compliance",
        description:
            "A compliance management solution designed to organise regulatory obligations, important documents, deadlines, and internal follow-ups through a centralised workspace.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "",
        title: "Qubenix AI Employee",
        description:
            "An AI workforce platform featuring specialised digital assistants for customer support, sales, research, HR, and operations, helping businesses automate repetitive tasks.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "",
        title: "QMAC",
        description:
            "A lightweight native macOS productivity utility designed to make everyday keyboard actions and desktop workflows more accessible through a simple menu bar experience.",
        status: "In Development",
        productLink: "",
    },
    {
        image: "",
        title: "Qubenix AI Brain",
        description:
            "An intelligent AI orchestration layer envisioned to connect business knowledge, AI models, specialised agents, and external tools into coordinated workflows.",
        status: "Concept",
        productLink: "",
    },
]

type Work = {
    title: string
    description: string
    productLink?: string
}

const Works: Work[] = [
    {
        title: "Swabalambi Odisha",
        description:
            "A community platform empowering Odisha entrepreneurs through connections, collaboration, and opportunities.",
        productLink:
            "https://share.google/Mx7nWknLt92mZDD1J",
    },
    {
        title: "Cravsy",
        description:
            "A homemade food platform connecting people with delicious, freshly prepared meals made with love.",
        productLink:
            "https://share.google/s2N34nOSSVHpiJFkg",
    },
    {
        title: "EV Applications",
        description:
            "Mobile applications designed to simplify electric vehicle management and everyday EV operations.",
    },
    {
        title: "Astrology App",
        description:
            "An astrology application offering personalised insights, horoscope readings, and astrological guidance.",
    },
    {
        title: "Ride Handling App",
        description:
            "A mobile application designed to streamline ride management, bookings, and transportation operations.",
    },
    {
        title: "Real Estate Dashboard",
        description:
            "A centralised dashboard for managing real estate properties, tracking operations, and monitoring property data.",
    }

]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Product = (typeof Products)[number]

export default function Portfolio() {
    return (
        <main>
            <section className="flex w-full flex-col items-center gap-4 pb-10 text-center sm:py-16">
                <div className="flex flex-col items-center gap-5">
                    <IconCraft icon={<StackSimpleIcon />} />
                    <h1 className="mb-2 text-4xl font-medium leading-[1.05] tracking-tight text-black sm:text-5xl xl:text-6xl">
                        Selected Works
                    </h1>
                </div>

                <p className="max-w-xl text-base leading-6 text-[#616161] sm:text-lg sm:leading-7 ">
                    A collection of products, experiments, and digital experiences{" "}
                    <br className="hidden sm:block" />
                    We have designed and built, both independently and in collaboration with clients.
                </p>
            </section>
            <div className="flex w-full flex-col gap-16 sm:gap-20">
                <WorksShowCase />
                <ProductShowCase />
            </div>
        </main>
    )
}

const ProductShowCase = () => {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:gap-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-[#8a8a8a] sm:text-sm sm:tracking-[0.18em]">
                Side Products we have been building
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {Products.map((product, index) => (
                    <ProductCard key={product.title} product={product} index={index} />
                ))}
            </div>
        </div>
    )
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    return (
        <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="group relative aspect-[4/3] min-h-[320px] w-full overflow-hidden rounded-xl bg-neutral-900 sm:min-h-[380px] lg:min-h-[420px]"
        >
            <motion.div
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ duration: 0.9, ease }}
                className="absolute inset-0"
            >
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority={index < 2}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,#e6d6c8_0%,#dcd3ea_45%,#b9c9ea_100%)]" />
                )}
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="relative flex flex-col items-start">
                    {/* Soft black blur layer behind the text (filter blur, not backdrop blur) */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-10 -top-8 -bottom-12 rounded-[2rem] bg-black/60 blur-2xl sm:-inset-x-12 sm:-top-10 sm:-bottom-14"
                    />

                    <h3 className="relative text-lg font-medium tracking-tight text-white drop-shadow-sm sm:text-xl">
                        {product.title}
                    </h3>

                    <motion.div
                        variants={{
                            rest: { height: 0, opacity: 0, y: 6 },
                            hover: { height: "auto", opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.45, ease }}
                        className="relative w-full overflow-hidden max-sm:h-auto! max-sm:opacity-100!"
                    >
                        <p className="max-w-md pt-1 text-sm leading-6 text-white/80 drop-shadow-sm">
                            {product.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const workSkins = [
    {
        background: "linear-gradient(135deg,#f8eddb 0%,#e4ddf7 46%,#a7c3f2 100%)",
        ink: "#2b1450",
    },
    {
        background: "linear-gradient(135deg,#ffe7d7 0%,#f7cbd9 48%,#c3a2ee 100%)",
        ink: "#3c1032",
    },
    {
        background: "linear-gradient(135deg,#d9eee3 0%,#c9ddf4 50%,#b1b3ee 100%)",
        ink: "#152f4a",
    },
    {
        background: "linear-gradient(135deg,#f3e3f9 0%,#decaf3 50%,#a5b4ef 100%)",
        ink: "#2c1246",
    },
    {
        background: "linear-gradient(135deg,#ece7d6 0%,#dbe6d8 50%,#b5cfe6 100%)",
        ink: "#1f3a2f",
    },
    {
        background: "linear-gradient(135deg,#f8e6d2 0%,#e6d8f2 50%,#abb5e6 100%)",
        ink: "#2a1d4f",
    },
]

// Linked work always sits first, whatever the breakpoint
const orderedWorks = [...Works].sort(
    (a, b) => Number(Boolean(b.productLink)) - Number(Boolean(a.productLink))
)

// Bento spans: two linked features on top, then a mixed rhythm of tiles
const workSpans = [
    "min-h-[260px] sm:col-span-2 sm:min-h-[300px] lg:col-span-4 lg:row-span-2 lg:min-h-0",
    "min-h-[220px] sm:col-span-2 sm:min-h-[260px] lg:col-span-2 lg:row-span-2 lg:min-h-0",
    "min-h-[220px] lg:col-span-3 lg:min-h-0",
    "min-h-[220px] lg:col-span-3 lg:min-h-0",
    "min-h-[220px] lg:col-span-2 lg:min-h-0",
    "min-h-[220px] lg:col-span-4 lg:min-h-0",
]

const WorksShowCase = () => {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:gap-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-[#8a8a8a] sm:text-sm sm:tracking-[0.18em]">
                Works
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:auto-rows-[236px] lg:grid-cols-6">
                {orderedWorks.map((work, index) => (
                    <WorkShowCard key={work.title} work={work} index={index} />
                ))}
            </div>
        </section>
    )
}

const WorkShowCard = ({ work, index }: { work: Work; index: number }) => {
    const skin = workSkins[index % workSkins.length]
    const span = workSpans[index % workSpans.length]
    const hasLink = Boolean(work.productLink)
    const wordmark = work.title.split(" ")[0]

    return (
        <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className={`group relative overflow-hidden rounded-2xl ${span}`}
            style={{ background: skin.background, color: skin.ink }}
        >
            {/* Soft light bloom, shifts on hover */}
            <motion.div
                aria-hidden
                variants={{
                    rest: { scale: 1, x: 0, y: 0, opacity: 0.5 },
                    hover: { scale: 1.15, x: -12, y: 10, opacity: 0.75 },
                }}
                transition={{ duration: 1, ease }}
                className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white blur-3xl"
            />

            {/* Oversized wordmark in the middle of the tile */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.span
                    variants={{
                        rest: { scale: 1, letterSpacing: "-0.04em" },
                        hover: { scale: 1.06, letterSpacing: "-0.02em" },
                    }}
                    transition={{ duration: 0.9, ease }}
                    className="max-w-full whitespace-nowrap text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-none"
                    style={{ color: skin.ink, opacity: 0.9 }}
                >
                    {wordmark}
                </motion.span>
            </div>

            {/* Title over the art, description on hover */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="relative flex flex-col items-start">
                    {/* Soft blur layer so the copy stays readable */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-10 -top-8 -bottom-12 rounded-[2rem] bg-white/45 blur-2xl sm:-inset-x-12 sm:-top-10 sm:-bottom-14"
                    />

                    <h3 className="relative text-lg font-medium tracking-tight sm:text-xl">
                        {work.title}
                    </h3>

                    <motion.div
                        variants={{
                            rest: { height: 0, opacity: 0, y: 6 },
                            hover: { height: "auto", opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.45, ease }}
                        className="relative w-full overflow-hidden max-sm:h-auto! max-sm:opacity-100!"
                    >
                        <p className="max-w-md pt-1 text-sm leading-6 opacity-75">
                            {work.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {hasLink && (
                <>
                    <span className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/50 text-current backdrop-blur-md transition-colors duration-300 group-hover:bg-white/80 sm:right-5 sm:top-5">
                        <ArrowUpRightIcon className="h-4 w-4" weight="bold" />
                    </span>
                    <a
                        href={work.productLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${work.title}`}
                        className="absolute inset-0 z-10"
                    />
                </>
            )}
        </motion.div>
    )
}
