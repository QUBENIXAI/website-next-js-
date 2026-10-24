"use client"

import { motion } from "motion/react"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

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
                        return lines.map((lineY) => (
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
                        ))
                    })}
                </g>
            </svg>
            <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-10 sm:px-6 sm:pt-16">
                <h1 className="text-5xl font-semibold">Build Smarter Systems, 
                    <br />
                    Make Room for growth
                </h1>
                <p className="mt-2 max-w-xl text-center text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">
                    We are a team of experts who are passionate about helping you grow your business, build smarter systems, and make room for what comes next.
                </p>
                <div className="mt-4 flex items-center justify-start gap-4">
                    <CtaButton label="Explore Our Work" icon={<ArrowBendUpRightIcon />} />
                    <button className="bg-white text-black px-4 py-2 rounded-md">
                        About Us
                    </button>
                </div>
            </section>
            <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6">
                <Image
                    src="/image.png"
                    alt="Hero Image"
                    width={4712}
                    height={2956}
                    priority
                    className="h-auto w-full"
                />
            </div>
        </div>
    )
}
