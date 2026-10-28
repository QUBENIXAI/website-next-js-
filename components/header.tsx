"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import CtaButton from "./cta-button";
import { ArrowBendUpRightIcon, ListIcon, XIcon, ArrowBendRightDownIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

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
    const [menuOpen, setMenuOpen] = useState(false);
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
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])
    if (pathname.startsWith("/blog/")) return null
    return (
        <header className="pointer-events-none sticky top-4 z-40 flex w-full flex-col items-center px-3 transition-opacity duration-200 in-data-[team-pop=open]:invisible in-data-[team-pop=open]:opacity-0 sm:px-5">
        <motion.div
            className="pointer-events-auto flex w-max max-w-[calc(100vw-1.5rem)] items-center justify-between border px-3 py-2 sm:px-4"
            style={{ backgroundColor, borderColor, backdropFilter, WebkitBackdropFilter: backdropFilter, borderRadius, gap }}
        >
            <div className="flex items-center gap-60 md:gap-1">
                <Link href="/" className="text-base font-medium sm:text-lg">QUBENIX</Link>
                <button
                    type="button"
                    className="inline-flex size-9 items-center justify-center text-[#171717] md:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
                </button>
            </div>
            <LayoutGroup>
                <div className="hidden md:block">
                <nav
                    className="flex items-center gap-1"
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
            <div className="hidden md:block">
                <CtaButton label="Let's Talk" icon={<ArrowBendRightDownIcon />} />
            </div>
        </motion.div>
        <AnimatePresence>
            {menuOpen && (
                <motion.nav
                    id="mobile-nav"
                    className="pointer-events-auto mt-2 flex w-full max-w-xs flex-col border border-black/10 bg-background/95 p-2 backdrop-blur-xl md:hidden"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                >
                    {Object.entries(Links).map(([key, value]) => {
                        const name = key as keyof typeof Links
                        const active = currentLink === name
                        return (
                            <Link
                                href={value}
                                key={key}
                                aria-current={active ? "page" : undefined}
                                className={`px-3 py-2.5 text-sm font-medium ${active ? "text-[#2F6BFF]" : "text-[#171717]"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {labels[name]}
                            </Link>
                        )
                    })}
                    <div className="px-2 pt-2 pb-1">
                        <CtaButton label="Get in Touch" icon={<ArrowBendUpRightIcon />} onClick={() => setMenuOpen(false)} />
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
        </header>
    )
}