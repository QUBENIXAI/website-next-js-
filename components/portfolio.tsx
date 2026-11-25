"use client"

import { motion } from 'motion/react'
import IconCraft from './icon-crafts/main'
import { ArrowUpRightIcon, StackSimpleIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { SectionHighlight } from './section-heading'
import Footer from './footer'


type Product = {
    image: string
    // controls the frame's aspect ratio so the artwork is never cropped
    className: string
    // show the tinted backdrop through transparent artwork
    backdrop?: boolean
    title: string
    highlight: string
    description: string
    status: string
    productLink: string
}

const Products: Product[] = [
    {
        image: "/AIHR.webp",
        // 2000 × 1333 (transparent mockup, resized from the 25146 × 16764 source)
        className: "aspect-[3/2]",
        backdrop: true,
        title: "Qubenix AI HR",
        highlight: "Qubenix AI",
        description:
            "A human resource management platform designed to organise employee records, streamline HR workflows, manage attendance, and simplify everyday people operations.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "/Finance.png",
        // 1024 × 696
        className: "aspect-[128/87]",
        title: "Qubenix AI Finance",
        highlight: "Qubenix AI",
        description:
            "A financial management platform designed to bring invoices, expenses, payments, cash flow, and financial reporting into one organised workspace with AI-assisted insights.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "/QubenixCompliance.png",
        // 3762 × 3762
        className: "aspect-square",
        title: "Qubenix AI Compliance",
        highlight: "Qubenix AI",
        description:
            "A compliance management solution designed to organise regulatory obligations, important documents, deadlines, and internal follow-ups through a centralised workspace.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "/AIEmployee.png",
        // 6705 × 3432
        className: "aspect-[6705/3432]",
        title: "Qubenix AI Employee",
        highlight: "Qubenix AI",
        description:
            "An AI workforce platform featuring specialised digital assistants for customer support, sales, research, HR, and operations, helping businesses automate repetitive tasks.",
        status: "Planned",
        productLink: "",
    },
    {
        image: "/QMAC.webp",
        // 2000 × 1279 (transparent mockup, resized from the 19155 × 12252 source)
        className: "aspect-[2000/1279]",
        backdrop: true,
        title: "QMAC",
        highlight: "QMAC",
        description:
            "A lightweight native macOS productivity utility designed to make everyday keyboard actions and desktop workflows more accessible through a simple menu bar experience.",
        status: "In Development",
        productLink: "",
    },
    {
        image: "/Brain.png",
        // 5643 × 5646
        className: "aspect-square",
        title: "Qubenix AI Brain",
        highlight: "Qubenix AI",
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

export default function Portfolio() {
    return (
        <main className="flex w-full flex-col">
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
                <MoreProductsDivider />
                <Footer />
            </div>
        </main>
    )
}

const MoreProductsDivider = () => {
    return (
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 sm:gap-6">
            <span aria-hidden className="h-px flex-1 bg-black/10" />
            <p className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] sm:text-xs sm:tracking-[0.18em]">
                More products in the making
            </p>
            <span aria-hidden className="h-px flex-1 bg-black/10" />
        </div>
    )
}

const productSkins = [
    "radial-gradient(120% 120% at 0% 0%, #e6d6c8 0%, #dcd3ea 45%, #b9c9ea 100%)",
    "radial-gradient(120% 120% at 100% 0%, #d9e7f7 0%, #cfdcf4 45%, #bcc6ee 100%)",
    "radial-gradient(120% 120% at 0% 100%, #e4e7f8 0%, #d7ddf3 45%, #c2cdf0 100%)",
    "radial-gradient(120% 120% at 100% 100%, #dcecdf 0%, #d3e3f2 45%, #c0c9ef 100%)",
    "radial-gradient(120% 120% at 0% 0%, #f4e7d6 0%, #e6dcf2 45%, #c3c9ef 100%)",
    "radial-gradient(120% 120% at 100% 0%, #f0dcdf 0%, #e2d8f2 45%, #c0c9ee 100%)",
]

const ProductShowCase = () => {
    return (
        <section id="products" className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-[#8a8a8a] sm:text-sm sm:tracking-[0.18em]">
                Side Products we have been building
            </h2>

            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
                {Products.map((product, index) => (
                    <ProductRow key={product.title} product={product} index={index} />
                ))}
            </div>
        </section>
    )
}

const ProductRow = ({ product, index }: { product: Product; index: number }) => {
    const flip = index % 2 === 1
    const number = String(index + 1).padStart(2, "0")
    const remainder = product.title.replace(product.highlight, "").trim()
    const wordmark = product.title.split(" ")[0]
    const skin = productSkins[index % productSkins.length]

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            className="group grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-16"
        >
            <div className={`flex flex-col items-start ${flip ? "md:order-2" : "md:order-1"}`}>
                <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] sm:text-xs">
                    <span className="text-[#2F1BB1]">/ {number}</span>
                    <span aria-hidden className="h-px w-5 bg-black/15" />
                    <span className="text-[#8a8a8a]">{product.status}</span>
                </div>

                <h3 className="mt-3 max-w-md text-2xl font-medium leading-[1.25] tracking-tight text-black sm:text-3xl lg:text-4xl">
                    <SectionHighlight>{product.highlight}</SectionHighlight>
                    {remainder && <> {remainder}</>}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                    {product.description}
                </p>

                <ProductLink product={product} />
            </div>

            <div
                className={`relative w-full overflow-hidden rounded-2xl bg-[#eef2fb] ring-1 ring-black/5 ${product.className} ${
                    flip ? "md:order-1" : "md:order-2"
                }`}
                style={product.backdrop || !product.image ? { background: skin } : undefined}
            >
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            priority={index < 2}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 flex items-center justify-center px-6">
                                <span className="whitespace-nowrap text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-none tracking-tight text-black/10">
                                    {wordmark}
                                </span>
                            </div>
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/60 blur-3xl"
                            />
                        </>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

const ProductLink = ({ product }: { product: Product }) => {
    const className =
        "mt-6 inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-300"

    if (!product.productLink) {
        return (
            <span className={`${className} cursor-default`} aria-disabled>
                Learn More
                <ArrowUpRightIcon className="h-3.5 w-3.5" weight="bold" />
            </span>
        )
    }

    return (
        <a
            href={product.productLink}
            target="_blank"
            rel="noreferrer"
            className={`${className} hover:border-black hover:bg-black hover:text-white`}
        >
            Learn More
            <ArrowUpRightIcon className="h-3.5 w-3.5" weight="bold" />
        </a>
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
