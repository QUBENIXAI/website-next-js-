"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import CtaButton from "./cta-button";
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { LayoutGroup, motion, useScroll, useTransform } from "motion/react";
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
    const pathname = usePathname();
    const [hoveredLink, setHoveredLink] = useState<keyof typeof Links | null>(null);
    const currentLink = (Object.keys(Links) as (keyof typeof Links)[]).find(
        (name) => pathname === Links[name]
    ) ?? null;
    const highlighted = hoveredLink ?? currentLink;
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 72], ["rgba(248,248,248,0)", "rgba(248,248,248,0.82)"]);
    const borderColor = useTransform(scrollY, [0, 72], ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"]);
    const backdropFilter = useTransform(scrollY, [0, 72], ["blur(0px)", "blur(20px)"]);
    const borderRadius = useTransform(scrollY, [0, 72], [0, 8]);
    const gap = useTransform(scrollY, [0, 72], ["2.75rem", "0.5rem"]);
    return (
        <header className="pointer-events-none sticky top-4 z-40 flex w-full justify-center px-3 sm:px-5">
        <motion.div
            className="pointer-events-auto flex w-max max-w-[calc(100vw-1.5rem)] items-center justify-between border px-3 py-2 sm:px-4"
            style={{ backgroundColor, borderColor, backdropFilter, WebkitBackdropFilter: backdropFilter, borderRadius, gap }}
        >
            <Link href="/" className="text-base font-medium sm:text-lg">QUBENIX</Link>
            <LayoutGroup>
                <div className="fixed bottom-3 left-1/2 z-50 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-[#d7d7d7] p-0.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:static md:w-auto md:max-w-none md:translate-x-0 md:bg-transparent md:p-0 md:shadow-none">
                <nav
                    className="flex items-center gap-0.5 overflow-x-auto rounded-full bg-white px-2.5 py-2 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-1 md:overflow-visible md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none"
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    {Object.entries(Links).map(([key, value]) => {
                        const name = key as keyof typeof Links
                        const active = highlighted === name
                        return (
                            <Link
                                href={value}
                                key={key}
                                aria-current={currentLink === name ? "page" : undefined}
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
            <CtaButton label="Get in Touch" icon={<ArrowBendUpRightIcon />} />
        </motion.div>
        </header>
    )
}