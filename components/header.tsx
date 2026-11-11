"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon, XIcon, ArrowBendRightDownIcon } from "@phosphor-icons/react";
import { CalendarDotIcon } from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Links = {
    Products: "/products",
    OurTeam: "/our-team",
    Consultancy: "",
    Blog: "/blog",
    // Prompts: "/prompts",
    careers: "/careers",
}

const labels: Record<keyof typeof Links, string> = {
    Products: "Products",
    OurTeam: "Our Team",
    Blog: "Blogs",
    Consultancy: "Consultancy",
    // Prompts: "Prompts",
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
    const blogIndex = pathname === "/blog"
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 72],
        blogIndex
            ? ["rgba(244,244,244,0)", "rgba(244,244,244,0.92)"]
            : ["rgba(248,248,248,0)", "rgba(248,248,248,0.82)"]
    );
    const borderColor = useTransform(scrollY, [0, 72], ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"]);
    const backdropFilter = useTransform(scrollY, [0, 72], ["blur(0px)", "blur(20px)"]);
    const borderRadius = useTransform(scrollY, [0, 72], [0, 8]);
    const footerRef = useRef<HTMLElement | null>(null)
    const scrollToFooter = () => {
        footerRef.current = document.getElementById("footer")
        footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])
    if (pathname.startsWith("/blog/") || pathname.startsWith("/legal")) return null
    return (
        <header
            className={`pointer-events-none sticky top-4 z-40 flex w-full flex-col items-center px-3 transition-opacity duration-200 in-data-[team-pop=open]:invisible in-data-[team-pop=open]:opacity-0 sm:px-5 ${blogIndex
                ? "bg-[#f4f4f4] before:pointer-events-none before:absolute before:inset-x-0 before:-top-4 before:h-4 before:bg-[#f4f4f4]"
                : ""
                }`}
        >
            <motion.div
                className="pointer-events-auto relative grid w-full max-w-5xl grid-cols-[1fr_auto] items-center border px-3 py-2 sm:px-4 md:grid-cols-[1fr_auto_1fr]"
                style={{
                    backgroundColor,
                    borderColor,
                    backdropFilter,
                    WebkitBackdropFilter: backdropFilter,
                    borderRadius,
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <HeaderLogo />
                </Link>

                {/* Desktop Navigation */}
                <LayoutGroup>
                    <nav
                        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {Object.entries(Links).map(([key, value]) => {
                            const name = key as keyof typeof Links
                            const active = highlighted === name

                            return (
                                <Link
                                    href={value}
                                    key={key}
                                    aria-current={
                                        currentLink === name ? "page" : undefined
                                    }
                                    className="relative whitespace-nowrap px-4 py-2.5 text-xs font-medium sm:text-sm"
                                    onMouseEnter={() => setHoveredLink(name)}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="nav-hover"
                                            className="pointer-events-none absolute inset-0 border border-dashed border-[#8063D8]"
                                            transition={hoverSpring}
                                        >
                                            <span className="absolute -top-1 -left-1 size-2 bg-[#8063D8]" />
                                            <span className="absolute -top-1 -right-1 size-2 bg-[#8063D8]" />
                                            <span className="absolute -bottom-1 -left-1 size-2 bg-[#8063D8]" />
                                            <span className="absolute -right-1 -bottom-1 size-2 bg-[#8063D8]" />
                                        </motion.span>
                                    )}

                                    <motion.span
                                        className="relative"
                                        animate={{
                                            color: active ? "#8063D8" : "#171717",
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {labels[name]}
                                    </motion.span>
                                </Link>
                            )
                        })}
                    </nav>
                </LayoutGroup>

                {/* Right Actions */}
                <div className="flex items-center justify-end gap-2 md:col-start-3">

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button
                            type="button"
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/qubenix-info/30min",
                                    "_blank"
                                )
                            }
                            className="rounded-md p-0.5 text-white"
                        >
                            <span className="flex items-center justify-center gap-1.5 rounded-sm border border-neutral-300 bg-white px-3 py-2 sm:gap-2 sm:px-4 sm:py-3">
                                <p className="text-xs font-medium text-black sm:text-sm">
                                    Schedule a Call
                                </p>

                                <span className="flex [&_svg]:size-3.5 sm:[&_svg]:size-4">
                                    <CalendarDotIcon color="black" />
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="inline-flex size-9 items-center justify-center text-[#171717] md:hidden"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? (
                            <XIcon size={22} />
                        ) : (
                            <ListIcon size={22} />
                        )}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Navigation */}
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
                                    className={`px-3 py-2.5 text-sm font-medium ${active
                                        ? "text-[#8063D8]"
                                        : "text-[#171717]"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {labels[name]}
                                </Link>
                            )
                        })}

                        {/* Mobile CTA */}
                        <div className="px-2 pt-2 pb-1">
                            <button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false)
                                    scrollToFooter()
                                }}
                                className="w-full rounded-md p-0.5 text-white"
                            >
                                <span className="flex items-center justify-center gap-1.5 rounded-sm border border-white bg-linear-to-b from-[#A78BFA] to-[#3C32AC] px-3 py-2 shadow-[0_10px_8px_-2px_rgba(0,0,0,0.25)] sm:gap-2 sm:px-4 sm:py-3">
                                    <p className="text-xs font-medium sm:text-sm">
                                        Schedule a Call
                                    </p>

                                    <span className="flex [&_svg]:size-3.5 sm:[&_svg]:size-4">
                                        <CalendarDotIcon />
                                    </span>
                                </span>
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export const HeaderLogo = () => {
    return (
        <main className="flex items-center gap-2">
            <Image
                src="/Icon.png"
                alt="Qubenix"
                width={40}
                height={40}
                priority
                className="size-8 shrink-0 object-contain sm:size-9 md:size-10"
            />
            <h1 className="font-sans text-lg font-semibold sm:text-xl text-[#2F1BB1]">
                QUBENIX
            </h1>
        </main>
    )
}