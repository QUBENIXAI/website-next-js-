"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { TeamMembers } from "./our-team"
import { SectionHighlight } from "./section-heading"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const chapters = [
    {
        marker: "/ 01",
        label: "The frustration",
        copy: "Qubenix started with a frustration we kept running into: ambitious teams working with systems that did not talk to each other. Ideas lived in one tool, decisions in another, and the everyday work of holding it all together fell back to people.",
    },
    {
        marker: "/ 02",
        label: "The premise",
        copy: "We started from a different premise, that good technology should fit the way a team already works. That belief became Qubenix: connected business systems, industry AI, and voice agents, built by a team that would rather solve the whole problem than another isolated one.",
    },
]

export default function HowItStarted() {
    return (
        <section id="origin" className="relative w-full px-4 sm:px-6">
            <div className="relative mx-auto flex w-full max-w-6xl flex-col border-t border-black/10 pt-12 sm:pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease }}
                    className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#2F1BB1] sm:text-sm">
                            / Our story
                        </span>
                        <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
                            How it all <SectionHighlight>started</SectionHighlight>
                        </h2>
                    </div>

                    <a
                        href="/products"
                        className="group inline-flex w-fit items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
                    >
                        See what we build
                        <ArrowUpRightIcon
                            weight="bold"
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </motion.div>

                <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-2 md:gap-10 lg:gap-16">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={chapter.marker}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease }}
                            className="flex flex-col"
                        >
                            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] sm:text-xs">
                                <span className="text-[#2F1BB1]">{chapter.marker}</span>
                                <span aria-hidden className="h-px w-6 bg-black/15" />
                                {chapter.label}
                            </div>
                            <p className="mt-3 max-w-xl text-base leading-7 text-[#616161] sm:text-lg sm:leading-8">
                                {chapter.copy}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="mt-10 overflow-hidden rounded-2xl bg-[#100c24] sm:mt-14 sm:rounded-[2rem]"
                >
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[440px]">
                        {/* soft violet glow behind the portraits */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[#5B4BE0]/40 blur-3xl"
                        />

                        <div className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {TeamMembers.map((member, index) => (
                                <figure
                                    key={member.name}
                                    className="group relative h-full w-[44%] min-w-[136px] shrink-0 snap-start overflow-hidden border-r border-white/10 last:border-r-0 sm:w-auto sm:min-w-0 sm:flex-1"
                                >
                                    <Image
                                        src={member.profileImage}
                                        alt={member.name}
                                        fill
                                        sizes="(min-width: 640px) 14vw, 44vw"
                                        className="object-cover object-top brightness-[0.82] grayscale-[0.55] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100 group-hover:grayscale-0"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 bg-[#2F1BB1]/25 mix-blend-color"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100c24] via-[#100c24]/10 to-[#100c24]/40"
                                    />

                                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                                        <span className="block text-[10px] font-medium tracking-[0.2em] text-white/55 sm:text-[11px]">
                                            / {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="mt-1 block max-h-0 translate-y-1 overflow-hidden text-[10px] font-medium leading-4 text-white opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs">
                                            {member.name}
                                            <span className="block font-normal text-white/60">
                                                {member.designation}
                                            </span>
                                        </span>
                                    </div>
                                </figure>
                            ))}
                        </div>

                        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:left-6 sm:top-6 sm:text-[11px]">
                            The founding team
                        </span>

                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#100c24] to-transparent sm:hidden"
                        />
                    </div>

                    <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
                        <p className="max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                            A small team, building systems that work as one.
                        </p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 sm:hidden">
                            Swipe to explore
                        </p>
                        <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 sm:block sm:text-[11px]">
                            Qubenix <span className="mx-1 text-white/25">/</span> Origin story
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
