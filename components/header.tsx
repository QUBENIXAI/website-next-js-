"use client"

import Link from "next/link";
import CtaButton from "./cta-button";
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const Links = {
    Home: "/",
    Products: "/products",
    Blog: "/blog",
    OurTeam: "/our-team",
    Prompts: "/prompts",
    careers: "/careers",
}

const labels: Record<keyof typeof Links, string> = {
    Home: "Home",
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
        <header className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
            <h1 className="text-base font-medium sm:text-lg">QUBENIX</h1>
            <LayoutGroup>
                <nav
                    className="order-3 flex w-full flex-wrap items-center justify-center gap-1 md:order-none md:w-auto md:flex-nowrap md:justify-start"
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    {Object.entries(Links).map(([key, value]) => {
                        const name = key as keyof typeof Links
                        const active = hoveredLink === name
                        return (
                            <Link
                                href={value}
                                key={key}
                                className="relative whitespace-nowrap px-3 py-2 text-sm font-medium sm:px-4 sm:py-2.5"
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
            </LayoutGroup>
            <CtaButton label="Get Started" icon={<ArrowBendUpRightIcon />} />
        </header>
    )
}