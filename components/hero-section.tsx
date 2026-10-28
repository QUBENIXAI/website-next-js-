"use client"

import { motion } from "motion/react"
import { useState } from "react"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon, BrainIcon } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PillLayer from "./pill-layer";

const highlightSpring = { type: "spring" as const, stiffness: 320, damping: 28 }

function GrowthHighlight() {
    return (
        <motion.span
            className="relative inline-block"
            initial="rest"
            whileInView="active"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-x-1.5 -inset-y-1 border border-dashed border-[#2F6BFF] bg-white"
                style={{ originX: 0, originY: 0 }}
                variants={{
                    rest: { scale: 0, opacity: 0 },
                    active: { scale: 1, opacity: 1 },
                }}
                transition={highlightSpring}
            >
                <span className="absolute -top-1 -left-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -top-1 -right-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -bottom-1 -left-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -right-1 -bottom-1 size-2 bg-[#2F6BFF]" />
            </motion.span>
            <motion.span
                className="relative"
                variants={{
                    rest: { color: "#171717" },
                    active: { color: "#2F6BFF" },
                }}
                transition={{ duration: 0.25, delay: 0.12 }}
            >
                Growth
            </motion.span>
        </motion.span>
    )
}

export default function HeroSection() {
    const router = useRouter();
    return (
        <div className="relative w-full overflow-x-hidden ">
            <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_88%)]"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
            >
                <g transform="rotate(45 720 450)">
                    {Array.from({ length: 9 }, (_, index) => {
                        const y = -180 + index * 200
                        const dashed = index % 3 === 1
                        const doubled = index % 3 === 0
                        const lines = doubled ? [y, y + 10] : [y]
                        const pulse = index % 3 === 2 || index === 0 || index === 4
                        return (
                            <g key={index}>
                                {lines.map((lineY) => (
                                    <line
                                        key={lineY}
                                        x1="-500"
                                        y1={lineY}
                                        x2="1940"
                                        y2={lineY}
                                        stroke="#ddd"
                                        strokeWidth="1.25"
                                        strokeDasharray={dashed ? "10 14" : undefined}
                                    />
                                ))}
                                {pulse && (
                                    <motion.line
                                        x1="-500"
                                        y1={y}
                                        x2="1940"
                                        y2={y}
                                        stroke="#2F6BFF"
                                        strokeOpacity={0.55}
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeDasharray="72 2440"
                                        animate={{ strokeDashoffset: [2440, -72] }}
                                        transition={{
                                            duration: 3.6,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: index * 0.7,
                                            repeatDelay: 1.2,
                                        }}
                                    />
                                )}
                            </g>
                        )
                    })}
                </g>
            </svg>
            <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-10 sm:px-6 sm:pt-16">
                <div className="mb-2">
                    <PillLayer label="Intelligence meets Automation" icon={<BrainIcon />} />
                </div>
                <h1 className="text-3xl font-medium leading-[1.35] sm:text-4xl lg:text-4xl xl:text-6xl">Build Smarter Systems, 
                    <br />
                    Make Room for <GrowthHighlight />
                </h1>
                <p className="mt-2 max-w-xl text-center text-xs leading-5 text-[#616161] sm:text-base sm:leading-7">
                    We are a team of experts who are passionate about helping you grow your business, build smarter systems, and make room for what comes next.
                </p>
                <div className="mt-4 flex items-center justify-start gap-4">
                    <CtaButton label="Explore Our Work" icon={<ArrowBendUpRightIcon />} onClick={() => {
                        router.push("/products");
                    }}/>
                    {/* <button className="rounded-md bg-white px-3.5 py-2 text-xs leading-4 text-black sm:px-4 sm:py-2 sm:text-base sm:leading-6">
                        About Us
                    </button> */}
                </div>
            </section>
            <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center sm:px-6">
                <ArrowText />
                <motion.div
                    className="relative flex w-full justify-center"
                    initial={{ filter: "blur(18px)", opacity: 0.65 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src="/image.png"
                        alt="Hero Image"
                        width={4712}
                        height={2956}
                        priority
                        className="h-auto w-[148%] max-w-none sm:w-full"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-background via-background/80 to-transparent sm:hidden"
                    />
                </motion.div>
            </div>
        </div>
    )
}

const ArrowText = () => {
    const [showText, setShowText] = useState(false)

    return (
        <div className="pointer-events-none absolute -top-2 right-[5%] z-20 hidden w-48 md:block lg:right-[12%] lg:w-46">
            <svg viewBox="0 0 260 168" className="h-auto w-full overflow-visible text-[#171717]" fill="none" aria-hidden>
                <text
                    x="168"
                    y="36"
                    textAnchor="middle"
                    className="fill-current font-caveat"
                    style={{
                        fontFamily: "var(--font-caveat-family), cursive",
                        opacity: showText ? 1 : 0,
                        transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    fontSize="34"
                    transform="rotate(-8 168 36)"
                >
                    From Insight to Action
                </text>
                <motion.path
                    d="M154 50c8 28-6 46-34 62-26 15-58 28-86 40"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.path
                    d="M34 152c8-1 14 1 18 5M34 152c2-9 6-14 14-17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    onAnimationComplete={() => setShowText(true)}
                />
            </svg>
        </div>
    )
}