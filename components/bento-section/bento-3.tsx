"use client"

import { motion } from "motion/react"

const BARS = [
    { x: 83.375,  baseH: 7.75,  cy: 93, delay: 0 },
    { x: 87.75,   baseH: 22.75, cy: 93, delay: 0.18 },
    { x: 92.125,  baseH: 15.75, cy: 93, delay: 0.36 },
    { x: 96.5,    baseH: 7.75,  cy: 93, delay: 0.54 },
    { x: 100.875, baseH: 11.375,cy: 93, delay: 0.72 },
]

// Dot grid rendered as a CSS background pattern — always visible, no clipping issues
function DotGrid() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
                backgroundImage: "radial-gradient(circle, #A78BFA 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
                opacity: 0.35,
            }}
        />
    )
}

function AudioBar({ x, baseH, cy, delay }: { x: number; baseH: number; cy: number; delay: number }) {
    const minH = baseH * 0.4
    const maxH = baseH * 1.35
    return (
        <motion.rect
            x={x}
            width={1.75}
            rx={0.875}
            fill="#A78BFA"
            animate={{
                height: [minH, maxH, baseH * 0.6, maxH * 0.85, minH],
                y: [
                    cy - minH / 2,
                    cy - maxH / 2,
                    cy - (baseH * 0.6) / 2,
                    cy - (maxH * 0.85) / 2,
                    cy - minH / 2,
                ],
            }}
            transition={{
                duration: 1.4,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
            }}
        />
    )
}

// Ripple ring: animates r from start → end, opacity fades out
function RippleRing({ delay, color = "#A78BFA" }: { delay: number; color?: string }) {
    return (
        <motion.circle
            cx="92.5"
            cy="92.5"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="1"
            animate={{
                r: [54, 80, 100],
                opacity: [0.5, 0.2, 0],
            }}
            transition={{
                duration: 2.6,
                delay,
                repeat: Infinity,
                ease: "easeOut",
                times: [0, 0.55, 1],
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
            className="relative z-10 w-[130px] h-[130px] sm:w-[185px] sm:h-[185px]"
        >
            {/* Static concentric background circles */}
            <circle cx="92.5" cy="92.5" r="92.5" fill="#EDE9FE" />
            <circle cx="93"   cy="93"   r="75"   fill="#F3F0FD" />
            <circle cx="92.5" cy="92.5" r="54.5" fill="white" />

            {/* Outward ripple rings — animate r directly, staggered */}
            <RippleRing delay={0}    color="#A78BFA" />
            <RippleRing delay={0.9}  color="#7C3AED" />
            <RippleRing delay={1.8}  color="#A78BFA" />

            {/* Button bg */}
            <rect x="63" y="63" width="60" height="60" rx="30" fill="url(#voiceGrad)" />
            <rect x="69" y="69" width="48" height="48" rx="24" fill="white" />

            {/* Animated waveform bars */}
            {BARS.map((bar) => (
                <AudioBar key={bar.x} {...bar} />
            ))}

            <defs>
                <linearGradient id="voiceGrad" x1="91.7" y1="63" x2="125.7" y2="103.65" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3C32AC" />
                    <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default function Bento3() {
    return (
        <article className="border border-neutral-200 flex min-h-[300px] w-full min-w-0 flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-sm:min-h-0 sm:min-h-[260px] xl:min-h-0">
            <div className="relative min-h-[180px] flex-1 max-sm:min-h-0 max-sm:flex-none sm:min-h-[148px] flex items-center justify-center px-6 py-6 sm:px-4 sm:py-4">
                <DotGrid />
                <VoiceVisual />
            </div>
            <div className="px-4 pt-1 pb-4 sm:px-5 sm:pb-5">
                <h2 className="text-base font-medium tracking-tight text-black sm:text-[17px]">
                    AI Voice Agents &amp; Calling
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-[#1a1a1a]">
                    Build AI-powered voice agents for inbound and outbound calls, customer inquiries, lead qualification, appointment scheduling, and follow-ups.
                </p>
            </div>
        </article>
    )
}
