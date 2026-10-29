"use client"

import Image from "next/image"
import Link from "next/link"
import CornerDotGrids from "./corner-dot-grids"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon, FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react"

const columns = [
    {
        title: "Solutions",
        links: ["AI Systems", "Automation", "AI Agents", "Custom Software", "Integrations"],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#about" },
            { label: "Team", href: "/our-team" },
            { label: "Work", href: "#" },
            { label: "Consulting", href: "#" },
            { label: "Odisha AI Society", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "AI Prompt Library", href: "/prompts" },
            { label: "Verify Certificate", href: "#" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
            { label: "FAQ", href: "#faq" },
            // { label: "Get in Touch", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/legal/privacy-policy" },
            { label: "Terms & Conditions", href: "/legal/terms" },
            { label: "Cookie Policy", href: "/legal/cookies" },
            { label: "Data Protection & Requests", href: "/legal/data-protection" },
            { label: "Refund & Cancellation", href: "/legal/refund-policy" },
        ],
    },
]

const socials = [
    { label: "Instagram", icon: InstagramLogoIcon, link: "https://www.instagram.com/qubenix_ai/" },
    { label: "LinkedIn", icon: LinkedinLogoIcon, link: "https://www.linkedin.com/company/qubenix" },
    { label: "X", icon: XLogoIcon, link: "https://x.com/qubenix_?s=11allsocial" },
    { label: "Facebook", icon: FacebookLogoIcon, link: "https://www.facebook.com/people/Qubenix-AI/61594704904079/" },
]

export default function Footer() {
    return (
        <footer id="footer" className="relative isolate scroll-mt-24 flex w-full flex-col items-center px-4 pb-16 sm:px-6">
            <CornerDotGrids corners="bottom" />
            <section
                className="relative z-0 flex w-full max-w-6xl flex-col items-center rounded-3xl px-4 py-10 text-center sm:rounded-[1.75rem] sm:px-6 sm:py-14 lg:py-16"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/736x/0f/ea/10/0fea109fd5925aa4acaa87935e345648.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="relative isolate grid size-14 place-items-center overflow-hidden rounded-lg border-2 border-white bg-linear-to-b from-[#77B0FF] to-[#036DFF] sm:size-16 sm:rounded-xl md:size-20">
                    <Image
                        src="/footerlogo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="relative size-8 mix-blend-screen sm:size-10 md:size-[3.125rem]"
                    />
                </div>

                <h2 className="mt-6 text-xl font-medium leading-tight text-white sm:mt-8 sm:text-3xl lg:text-4xl">
                    Every great solution starts
                    <br />
                    somewhere
                </h2>
                <p className="mt-2 text-sm text-white/80 sm:mt-3 sm:text-base lg:text-lg">
                    Let&apos;s talk about what we can build together
                </p>

                <div className="mt-8">
                    <CtaButton label="Schedule a Call" icon={<ArrowBendUpRightIcon />} className="bg-[#fff] text-black" onClick={() => {
                        window.open("https://calendly.com/qubenix-info/30min", "_blank")
                    }}/>
                </div>
            </section>

            <div className="relative z-0 mt-16 grid w-full max-w-6xl gap-12 bg-background lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
                <div>
                    <p className="text-base font-semibold tracking-tight sm:text-lg">QUBENIX</p>
                    <h2 className="mt-6 text-xl font-medium leading-tight tracking-tight sm:mt-8 sm:text-2xl">
                        Automate. Integrate.
                        <br />
                        Elevate.
                    </h2>
                    <p className="mt-3 max-w-xs text-xs leading-relaxed text-neutral-500 sm:mt-4 sm:text-sm">
                        Qubenix designs intelligent business systems that connect AI, automation, software and data into one operating layer.
                    </p>

                    <div className="mt-6 flex gap-2">
                        {socials.map(({ label, icon: Icon, link }) => (
                            <a
                                key={label}
                                href={link}
                                target="_blank"
                                aria-label={label}
                                className="grid size-9 place-items-center rounded-lg text-white bg-gradient-to-b from-[#77B0FF] to-[#036DFF]"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <p className="text-xs font-semibold sm:text-sm">{column.title}</p>
                            <ul className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
                                {column.links.map((item) => {
                                    const link = typeof item === "string" ? { label: item, href: "#" } : item
                                    return (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-xs text-neutral-800 sm:text-sm">
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
