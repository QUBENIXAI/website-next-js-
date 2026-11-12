"use client"

import { motion } from "motion/react"

const WAVEFORM = [
    { x: 82, height: 8 },
    { x: 86, height: 13 },
    { x: 90, height: 19 },
    { x: 94, height: 25 },
    { x: 98, height: 19 },
    { x: 102, height: 13 },
    { x: 106, height: 8 },
]

function DotGrid() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #A78BFA 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                opacity: 0.3,
            }}
        />
    )
}

function WaveformBar({
    x,
    height,
    index,
}: {
    x: number
    height: number
    index: number
}) {
    const centerY = 92.5

    return (
        <motion.rect
            x={x}
            width="2.5"
            rx="1.25"
            fill="#A78BFA"
            animate={{
                height: [
                    height * 0.55,
                    height,
                    height * 0.7,
                    height * 1.15,
                    height * 0.55,
                ],
                y: [
                    centerY - (height * 0.55) / 2,
                    centerY - height / 2,
                    centerY - (height * 0.7) / 2,
                    centerY - (height * 1.15) / 2,
                    centerY - (height * 0.55) / 2,
                ],
            }}
            transition={{
                duration: 1.8,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    )
}

function VoiceVisual() {
    return (
        <svg
            width="185"
            height="185"
            viewBox="0 0 185 185"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 h-[130px] w-[130px] sm:h-[185px] sm:w-[185px]"
        >
            {/* Static background circles */}
            <circle cx="92.5" cy="92.5" r="92.5" fill="#EDE9FE" />
            <circle cx="92.5" cy="92.5" r="75" fill="#F3F0FD" />
            <circle cx="92.5" cy="92.5" r="54.5" fill="white" />

            {/* Static voice button */}
            <rect
                x="63"
                y="63"
                width="60"
                height="60"
                rx="30"
                fill="url(#voiceGrad)"
            />

            <rect
                x="69"
                y="69"
                width="48"
                height="48"
                rx="24"
                fill="white"
            />

            {/* Animated waveform */}
            {WAVEFORM.map((bar, index) => (
                <WaveformBar
                    key={bar.x}
                    x={bar.x}
                    height={bar.height}
                    index={index}
                />
            ))}

            <defs>
                <linearGradient
                    id="voiceGrad"
                    x1="91.7"
                    y1="63"
                    x2="125.7"
                    y2="103.65"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3C32AC" />
                    <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default function Bento3() {
    return (
        <article className="flex min-h-[300px] w-full min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-sm:min-h-0 sm:min-h-[260px] xl:min-h-0">
            <div className="relative flex min-h-[180px] flex-1 items-center justify-center px-6 py-6 max-sm:min-h-0 max-sm:flex-none sm:min-h-[148px] sm:px-4 sm:py-4">
                <DotGrid />
                <VoiceVisual />
            </div>

            <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <h2 className="text-base font-medium tracking-tight text-black sm:text-[17px]">
                    AI Voice Agents &amp; Calling
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-[#1a1a1a]">
                    Build AI-powered voice agents for inbound and outbound
                    calls, customer inquiries, lead qualification,
                    appointment scheduling, and follow-ups.
                </p>
            </div>
        </article>
    )
}