"use client"

import { motion } from "motion/react"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon, BrainIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import PillLayer from "./pill-layer";

export default function HeroSection() {
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
                                        stroke="rgba(23,23,23,0.2)"
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
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-4xl xl:text-6xl">Build Smarter Systems, 
                    <br />
                    Make Room for growth
                </h1>
                <p className="mt-2 max-w-xl text-center text-xs leading-5 text-[#616161] sm:text-base sm:leading-7">
                    We are a team of experts who are passionate about helping you grow your business, build smarter systems, and make room for what comes next.
                </p>
                <div className="mt-4 flex items-center justify-start gap-4">
                    <CtaButton label="Explore Our Work" icon={<ArrowBendUpRightIcon />} />
                    <button className="bg-white text-black px-4 py-2 rounded-md">
                        About Us
                    </button>
                </div>
            </section>
            <motion.div
                className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6"
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
                    className="h-auto w-full"
                />
            </motion.div>
        </div>
    )
}
