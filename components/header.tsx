"use client"

import Link from "next/link";
import CtaButton from "./cta-button";
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const Links = {
    Products: "/products",
    Blog: "/blog",
    OurTeam: "/our-team",
    Prompts: "/prompts",
    careers: "/careers",
}

const labels: Record<keyof typeof Links, string> = {
    Products: "Products",
    Blog: "Blog",
    OurTeam: "Our Team",
    Prompts: "Prompts",
    careers: "Careers",
}

const hoverSpring = { type: "spring" as const, stiffness: 380, damping: 32 }

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState<keyof typeof Links | null>(null);
    return (
        <header className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
            <Link href="/" className="text-base font-medium sm:text-lg">QUBENIX</Link>
            <LayoutGroup>
                <div className="fixed bottom-3 left-1/2 z-50 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-[#d7d7d7] p-0.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:static md:w-auto md:max-w-none md:translate-x-0 md:bg-transparent md:p-0 md:shadow-none">
                <nav
                    className="flex items-center gap-0.5 overflow-x-auto rounded-full bg-white px-2.5 py-2 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-1 md:overflow-visible md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none"
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    {Object.entries(Links).map(([key, value]) => {
                        const name = key as keyof typeof Links
                        const active = hoveredLink === name
                        return (
                            <Link
                                href={value}
                                key={key}
                                className="relative whitespace-nowrap px-4 py-2.5 text-xs font-medium sm:text-sm md:px-4 md:py-2.5"
                                onMouseEnter={() => setHoveredLink(name)}
                            >
                                {active && (
                                    <motion.span
                                        layoutId="nav-hover"
                                        className="pointer-events-none absolute inset-0 border border-dashed border-[#2F6BFF]"
                                        transition={hoverSpring}
                                    >
                                        <span className="absolute -top-1 -left-1 size-2 bg-[#2F6BFF]" />
                                        <span className="absolute -top-1 -right-1 size-2 bg-[#2F6BFF]" />
                                        <span className="absolute -bottom-1 -left-1 size-2 bg-[#2F6BFF]" />
                                        <span className="absolute -right-1 -bottom-1 size-2 bg-[#2F6BFF]" />
                                    </motion.span>
                                )}
                                <motion.span
                                    className="relative"
                                    animate={{ color: active ? "#2F6BFF" : "#171717" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {labels[name]}
                                </motion.span>
                            </Link>
                        )
                    })}
                </nav>
                </div>
            </LayoutGroup>
            <CtaButton label="Get Started" icon={<ArrowBendUpRightIcon />} />
        </header>
    )
}