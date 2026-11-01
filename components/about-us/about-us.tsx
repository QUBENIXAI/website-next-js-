"use client"

import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import TeamBrief from "./team-brief"

export default function AboutUs() {
    return (
        <section id="about" className="flex w-full flex-col items-center px-4 sm:px-6 sm:mt-8">
            {/* Header: Heading and Subheading */}
            <div className="flex w-full max-w-6xl flex-col items-start gap-2 text-left">
                <SectionHeading align="start" className="text-3xl font-medium sm:text-5xl">
                    About Us
                </SectionHeading>
                <p className="max-w-lg text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">
                    An AI and technology company helping businesses work smarter through intelligent automation, connected systems, and scalable software.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="mt-8 flex w-full max-w-6xl flex-col lg:flex-row gap-4 sm:gap-5 items-stretch sm:mt-10">
                {/* Left Column: Team Brief */}
                <div className="w-full lg:w-[35%] xl:w-[33%] flex flex-col">
                    <TeamBrief />
                </div>

                {/* Right Column: Top Cards & Bottom Tech Stack */}
                <div className="w-full lg:w-[65%] xl:w-[67%] flex flex-col gap-4 sm:gap-5">
                    {/* Top Row: Blue Stats Card + (Chair Card & Quote Card) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1 items-stretch">
                        <BlueStatsCard />
                        <div className="flex flex-col gap-4 sm:gap-5 flex-1">
                            <ChairImageCard />
                            <QuoteCard />
                        </div>
                    </div>

                    {/* Bottom Row: Technologies We Use */}
                    <TechStackCard />
                </div>
            </div>
        </section>
    )
}

function BlueStatsCard() {
    return (
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[1rem] bg-gradient-to-b from-[#558DFF] via-[#7AA8FF] to-[#BED5FF] p-5 sm:p-6">
            <div>
                {/* 50+ Tools Built */}
                <div className="rounded-2xl sm:rounded-[22px] bg-white p-5 sm:p-6 shadow-sm border border-black/[0.04]">
                    <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
                        50+
                    </div>
                    <p className="mt-3 text-sm sm:text-base font-medium text-[#171717]">
                        Tools Build for specific AI problems
                    </p>
                </div>

                {/* 6+ Industries Served */}
                <div className="mt-4 rounded-2xl sm:rounded-[22px] bg-white p-5 sm:p-6 shadow-sm border border-black/[0.04] flex flex-col items-end text-right">
                    <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
                        6+
                    </div>
                    <p className="mt-3 text-sm sm:text-base font-medium text-[#171717]">
                        Industries Served
                    </p>
                </div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-6 sm:mt-8">
                <p className="text-lg sm:text-2xl text-black leading-snug max-w-[250px]">
                    End-to-End Connected Business Solution
                </p>
            </div>
        </div>
    )
}

function ChairImageCard() {
    return (
        <div className="relative flex min-h-[240px] sm:min-h-[280px] flex-[1.6] flex-col justify-end overflow-hidden rounded-2xl sm:rounded-[1rem] p-5 sm:p-6">
            <Image
                src="https://i.pinimg.com/736x/23/f5/6a/23f56afac7d5b7b69ac735d93dab7ee1.jpg"
                alt="Less Busy Work, More Meaningful Work"
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
            />
            {/* Dark gradient for text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" /> */}

            <div className="relative z-10 text-white">
                <h3 className="text-base sm:text-lg font-medium leading-snug text-white">
                    Providing Meaningful Impacts
                </h3>
                <p className="mt-1 text-xs sm:text-[12px] text-white/90 leading-relaxed max-w-xs">
                    Combining thoughtful engineering and intelligent automation to help business move forward
                </p>
            </div>
        </div>
    )
}

function QuoteCard() {
    return (
        <div className="relative flex min-h-[130px] sm:min-h-[140px] flex-1 flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[1rem] bg-white p-5 sm:p-6">
            <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#1668E8] leading-tight max-w-[320px]">
                &ldquo;Good Technology should make work feel simpler&rdquo;
            </h3>

            {/* Swoosh SVG Curve in Bottom Right */}
            <div className="pointer-events-none absolute -bottom-3 -right-2 w-40 sm:w-48 h-16 sm:h-20">
                <svg viewBox="0 0 200 80" fill="none" className="w-full h-full">
                    <path
                        d="M 10 75 C 70 72, 130 55, 195 15"
                        stroke="url(#blue-curve-gradient)"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="blue-curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4A88FF" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#0284C7" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Subtle glow */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 size-24 rounded-full bg-blue-500/15 blur-2xl" />
        </div>
    )
}

const techIcons = [
    {
        name: "React",
        icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="size-6 text-[#087ea4] fill-none stroke-current" strokeWidth="1">
                <circle cx="0" cy="0" r="2.05" fill="#087ea4" stroke="none" />
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </svg>
        ),
    },
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 128 128" className="size-6 fill-black">
                <circle cx="64" cy="64" r="64" />
                <path d="M104.3 103.7L50.4 34.6H39.2v58.8h10.4V48.5l45.2 58.1c3.2-1 6.3-2.3 9.5-2.9z" fill="#fff" />
                <path d="M78.4 34.6h10.4v38.9H78.4z" fill="#fff" />
            </svg>
        ),
    },
    {
        name: "OpenAI",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6 fill-current text-black">
                <path d="M22.28 9.9a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 10.5.53a6.05 6.05 0 0 0-5.77 4.19 6.04 6.04 0 0 0-4.08 2.96 6.09 6.09 0 0 0 .74 7.07 5.98 5.98 0 0 0 .52 4.9 6.06 6.06 0 0 0 6.52 2.91 6.05 6.05 0 0 0 4.74 1.55 6.05 6.05 0 0 0 5.77-4.19 6.04 6.04 0 0 0 4.08-2.96 6.08 6.08 0 0 0-.74-7.06zm-9.02 12.18a4.54 4.54 0 0 1-3.03-1.18l.15-.09 5.03-2.9a.78.78 0 0 0 .39-.68v-7.1l2.13 1.23a.07.07 0 0 1 .04.05v5.84a4.56 4.56 0 0 1-4.71 4.83zm-8.8-4.5a4.52 4.52 0 0 1-.57-3.21l.15.09 5.03 2.9a.8.8 0 0 0 .78 0l6.15-3.55v2.46a.07.07 0 0 1-.03.06l-5.06 2.92a4.56 4.56 0 0 1-6.45-1.67zm-1.74-8.82a4.55 4.55 0 0 1 2.45-2.03v5.98a.77.77 0 0 0 .39.68l6.15 3.55-2.13 1.23a.07.07 0 0 1-.07 0l-5.06-2.92a4.55 4.55 0 0 1-1.73-6.49zm14.7 3.55-6.15-3.55 2.13-1.23a.07.07 0 0 1 .07 0l5.06 2.92a4.55 4.55 0 0 1-1.11 8.2v-6.34z"/>
            </svg>
        ),
    },
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6">
                <path d="M11.91 2C6.98 2 7.28 4.14 7.28 4.14l.01 2.21h4.7v.67H5.32S2 6.64 2 11.59c0 4.95 2.9 4.79 2.9 4.79h1.73v-2.42s-.09-2.9 2.85-2.9h4.89s2.75.05 2.75-2.66V4.67S17.48 2 11.91 2zm-2.47 1.48a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z" fill="#3776AB"/>
                <path d="M12.09 22c4.93 0 4.63-2.14 4.63-2.14l-.01-2.21h-4.7v-.67h6.67S22 17.36 22 12.41c0-4.95-2.9-4.79-2.9-4.79h-1.73v2.42s.09 2.9-2.85 2.9h-4.89s-2.75-.05-2.75 2.66v3.73S6.52 22 12.09 22zm2.47-1.48a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92z" fill="#FFD43B"/>
            </svg>
        ),
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6">
                <rect width="24" height="24" rx="4" fill="#3178C6" />
                <path d="M11.5 8.5H6.5V10h1.7v5.5h1.6V10h1.7V8.5zm4.8 2.2c-.4-.3-.9-.4-1.5-.4-.7 0-1.2.2-1.6.5-.4.3-.6.7-.6 1.2 0 .5.2.9.5 1.1.3.3.9.5 1.6.8.9.3 1.5.6 1.9 1 .4.4.6.9.6 1.5 0 .8-.3 1.4-.9 1.9-.6.5-1.4.7-2.4.7-.7 0-1.4-.2-2-.5v-1.7c.6.4 1.3.7 2 .7.6 0 1.1-.1 1.4-.4.3-.3.5-.6.5-1 0-.4-.2-.8-.5-1-.3-.3-.9-.5-1.7-.8-.9-.3-1.5-.6-1.9-1-.4-.4-.6-.9-.6-1.5 0-.7.3-1.3.8-1.7.5-.4 1.3-.7 2.2-.7.7 0 1.3.1 1.9.4v1.6z" fill="#fff" />
            </svg>
        ),
    },
    {
        name: "ElevenLabs",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6 text-black fill-current">
                <rect x="7" y="4" width="3.2" height="16" rx="1.6" />
                <rect x="13.8" y="4" width="3.2" height="16" rx="1.6" />
            </svg>
        ),
    },
    {
        name: "Vercel",
        icon: (
            <svg viewBox="0 0 24 24" className="size-5 text-black fill-current">
                <path d="M12 2L24 22H0L12 2Z" />
            </svg>
        ),
    },
    {
        name: "PostgreSQL",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6 fill-[#336791]">
                <path d="M11.9 2C6.4 2 2 6.4 2 11.9c0 4.4 2.8 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.4C21.8 6.4 17.4 2 11.9 2z"/>
            </svg>
        ),
    },
    {
        name: "Claude",
        icon: (
            <svg viewBox="0 0 24 24" className="size-6 text-[#D97757] fill-current">
                <path d="M13.83 2h-3.66l-6.17 20h3.66l1.23-4h6.22l1.23 4h3.66L13.83 2zm-4.14 13l2.31-7.51 2.31 7.51H9.69z" />
            </svg>
        ),
    },
]

function TechStackCard() {
    return (
        <div className="rounded-2xl sm:rounded-[1rem] bg-white p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-black">
                Technologies We Use
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                {techIcons.map((tech) => (
                    <div
                        key={tech.name}
                        title={tech.name}
                        className="flex size-11 sm:size-14 items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-100 p-2 sm:p-2.5 shadow-[inset_0_2px_5px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-transform duration-200 hover:scale-105 hover:bg-neutral-200/60"
                    >
                        {tech.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}
