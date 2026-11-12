"use client"

import { motion } from 'motion/react'
import IconCraft from './icon-crafts/main'
import { StackSimpleIcon } from '@phosphor-icons/react'
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
    {
        image: "",
        title: "TakPro",
        description:
            "An all-in-one business operating workspace designed to bring CRM, workflow automation, finance, document management, team operations, and business analytics together.",
        status: "In Development",
        productLink: "",
    },
]

const Works = [
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
            <section className="flex w-full flex-col items-center gap-4 pb-8 text-center sm:py-16 sm:pb-16">
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
            <ProductShowCase />
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

const WorksShowCase = () => {
    return (
        <div>

        </div>
    )
}

const WorkShowCard = ({ work }: { work: typeof Works[number] }) => {
    return (
        <div>

        </div>
    )
}
