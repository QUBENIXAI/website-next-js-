"use client"

import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import TeamBrief from "./team-brief"
import { ProgressiveBlur } from "../progressive-blur"
import { InfiniteSlider } from "../infinite-slider"

export default function AboutUs() {
    return (
        <section id="about" className="flex w-full flex-col items-center px-4 sm:px-6 sm:mt-8">
            {/* Header: Heading and Subheading */}
            <div className="flex w-full max-w-6xl flex-col items-center gap-2 text-center">
                <SectionHeading align="center" className="text-3xl font-medium sm:text-5xl">
                    Why Choose Us
                </SectionHeading>
                <p className="max-w-lg text-sm leading-6 text-[#616161] sm:text-lg sm:leading-7">
                    From streamlining everyday operations to building intelligent solutions, we help businesses turn complex challenges into meaningful progress.
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
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[1rem] bg-gradient-to-bl from-[#A78BFA] via-[#D8D0FA] to-[#fff] p-5 sm:p-6">
            <div>
                {/* 50+ Tools Built */}
                <div className="rounded-2xl sm:rounded-[22px] bg-white p-5 sm:p-6 shadow-sm border border-black/[0.04]">
                    <div className="text-4xl sm:text-6xl font-medium tracking-tight text-black">
                        50+
                    </div>
                    <p className="mt-3 text-sm sm:text-base font-medium text-[#171717]">
                        Tools Build for specific AI problems
                    </p>
                </div>

                {/* 6+ Industries Served */}
                <div className="mt-4 rounded-2xl sm:rounded-[22px] bg-white p-5 sm:p-6 shadow-sm border border-black/[0.04] flex flex-col items-end text-right">
                    <div className="text-4xl sm:text-6xl font-medium tracking-tight text-black">
                        6+
                    </div>
                    <p className="mt-3 text-sm sm:text-base font-medium text-[#171717]">
                        Industries Served
                    </p>
                </div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-6 sm:mt-8">
                <p className="text-lg sm:text-2xl text-[#3F46B5] leading-snug max-w-[250px] font-medium">
                    END-TO-END CONNECTED BUSINESS SOLUTION
                </p>
            </div>
        </div>
    )
}



function ChairImageCard() {
    return (
        <div className="relative flex min-h-[240px] sm:min-h-[280px] flex-[1.6] flex-col justify-end overflow-hidden rounded-2xl sm:rounded-[1rem]">

            <Image
                src="https://i.pinimg.com/1200x/43/01/a1/4301a100d2dad3eee18a401229a7e841.jpg"
                alt="Less Busy Work, More Meaningful Work"
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
            />

            {/* Soft black blur layer */}
            <div className="absolute inset-x-0 bottom-[-20px] h-[65%] bg-black/20 blur-2xl" />

            {/* Bottom gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Text above both layers */}
            <div className="relative z-10 text-white p-5 sm:p-6">
                <h3 className="text-base sm:text-md font-medium leading-snug">
                    Less Busy Work, More Meaningful Work
                </h3>

                <p className="mt-1 text-xs sm:text-[12px] text-white/90 leading-relaxed max-w-xs">
                    Combining thoughtful engineering and intelligent automation to help business move forward.
                </p>
            </div>

        </div>
    )
}



function QuoteCard() {
    return (
        <div className="border border-neutral-200 relative flex min-h-[130px] sm:min-h-[140px] flex-1 flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[1rem] bg-white p-5 sm:p-6">
            <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#3F46B5] leading-tight max-w-[320px]">
                &ldquo;Good Technology should make work feel simpler&rdquo;
            </h3>

            <div className="pointer-events-none absolute -bottom-3 -right-2 w-40 sm:w-48 h-16 sm:h-20">
                <svg viewBox="0 0 200 80" fill="none" className="w-full h-full">
                    <path
                        d="M 10 75 C 70 72, 130 55, 195 15"
                        stroke="url(#purple-blue-curve-gradient)"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="purple-blue-curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#7164E8" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#3F46B5" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 size-24 rounded-full bg-[#7164E8]/15 blur-2xl" />
        </div>
    )
}

interface TechItem {
    name: string;
    image: string;
    className?: React.ReactNode
}

const techIcons: TechItem[] = [
    {
        name: "Next.js",
        image: "https://i.pinimg.com/1200x/93/8a/55/938a551e5b56fe9fd818e47b456e9f50.jpg",
    },
    {
        name: "OpenAI",
        image: "https://i.pinimg.com/1200x/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.jpg",
    },
    {
        name: "Python",
        image: "https://i.pinimg.com/1200x/8f/dc/43/8fdc431e4d00f83d51c030acf443bd0c.jpg",
    },
    {
        name: "N8N Logo",
        image: "https://i.pinimg.com/1200x/3f/23/a5/3f23a5dfffcd19c6c3e22fd934e0142c.jpg",
    },
    {
        name: "ElevenLabs",
        image: "https://i.pinimg.com/736x/a3/84/4d/a3844d498d25e2c2d1b0722725aeda16.jpg",
    },
    {
        name: "Vercel",
        image: "https://i.pinimg.com/736x/1d/bf/4d/1dbf4d187d1c2db065cf7e1b466defc1.jpg",
    },
    {
        name: "PostgreSQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "Claude",
        image: "https://i.pinimg.com/1200x/71/e5/ed/71e5edacdced21bdad944b9f545291bf.jpg",
    },
    {
        name: 'VAPI',
        image: "https://i.pinimg.com/1200x/18/4f/44/184f441ac87303831f8533363dda5e87.jpg"
    },
    {
        name: "Ollama",
        image: "https://i.pinimg.com/1200x/07/e7/f1/07e7f1c998fba9aabcc4155d68c41a52.jpg"
    },
    {
        name: "Firebase",
        image: "https://i.pinimg.com/1200x/c6/f8/91/c6f8914658d121a66c350b0161c69d16.jpg"
    },
    {
        name: "Supabase",
        image: "https://i.pinimg.com/736x/e4/7f/08/e47f0875fca753f3dcda231ce8a617f7.jpg"
    }
]

function TechStackCard() {
    return (
        <div className="border border-neutral-200 relative overflow-hidden rounded-2xl bg-white py-5 sm:rounded-[1rem] sm:py-6">
            <h3 className="px-5 text-base font-medium text-black sm:px-6 sm:text-lg mb-2">
                Technologies We Use
            </h3>

            <div className="relative mt-4">
                <InfiniteSlider
                    gap={12}
                    duration={30}
                    className="px-5 sm:px-6"
                >

                    {techIcons.map((tech) => (
                        <div
                            key={tech.name}
                            title={tech.name}
                            className=" border border-neutral-200 relative size-9 shrink-0 overflow-hidden rounded-lg bg-neutral-100 shadow-sm transition-transform duration-200 hover:scale-105 sm:size-12 sm:rounded-xl"
                        >
                            <Image
                                src={tech.image}
                                alt={tech.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </InfiniteSlider>

                <ProgressiveBlur
                    direction="left"
                    blurLayers={6}
                    blurIntensity={0.5}
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-14"
                />

                <ProgressiveBlur
                    direction="right"
                    blurLayers={6}
                    blurIntensity={0.5}
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-14"
                />
            </div>

        </div>

    )

}
