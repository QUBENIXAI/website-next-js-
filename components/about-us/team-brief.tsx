"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import {
    Brain,
    Cloud,
    Database,
    Robot,
    ShieldCheck,
} from "@phosphor-icons/react"

const VB_W = 340
const VB_H = 470

const TILE_W = 43
const TILE_H = 41

const HUB_SIZE = 62
const HUB_CX = 170
const HUB_TOP = 390
const RAY_END_Y = HUB_TOP - 6

const pct = (value: number, total: number) =>
    `${(value / total) * 100}%`

const TOOL_CARDS = [
    { label: "Models", Icon: Brain, cx: 34, cy: 60 },
    { label: "Cloud", Icon: Cloud, cx: 102, cy: 40 },
    { label: "Data", Icon: Database, cx: 170, cy: 28 },
    { label: "Agents", Icon: Robot, cx: 238, cy: 40 },
    { label: "Secure", Icon: ShieldCheck, cx: 306, cy: 60 },
]

/**
 * One continuous ray per tile: it leaves the tile heading straight down and
 * lands on the hub head-on. The middle band (behind the typography) is faded
 * out with a mask, so the segment above and below the copy is the *same*
 * curve with the *same* gradient — never a second, differently shaped line.
 */
function rayPath(cx: number, cy: number) {
    const startY = cy + TILE_H / 2 + 7
    const span = RAY_END_Y - startY

    if (cx === HUB_CX) return `M${cx} ${startY} L${cx} ${RAY_END_Y}`

    return `M${cx} ${startY} C${cx} ${startY + span * 0.45}, ${HUB_CX} ${
        RAY_END_Y - span * 0.45
    }, ${HUB_CX} ${RAY_END_Y}`
}

/**
 * A short blue highlight that rides the ray from the tool card down into the
 * hub. It uses a normalised dash so every path gets the same comet length,
 * regardless of how far the card sits from the centre.
 */
function RayPulse({ d, delay }: { d: string; delay: number }) {
    return (
        <motion.path
            d={d}
            fill="none"
            stroke="#5C9DFF"
            strokeWidth={1.6}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="0.055 0.945"
            initial={{ strokeDashoffset: 0, opacity: 0 }}
            animate={{
                strokeDashoffset: [0, -1],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 2.4,
                times: [0, 0.1, 0.9, 1],
                delay,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: "easeInOut",
            }}
        />
    )
}

export default function TeamBrief() {
    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:rounded-[1rem]">
            <ConvergenceVisual />
        </div>
    )
}

function ConvergenceVisual() {
    const reduceMotion = useReducedMotion()

    return (
        <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden pt-4">
            <div className="@container relative mx-auto aspect-[340/470] w-full max-w-[420px]">
                <svg
                    aria-hidden
                    viewBox={`0 0 ${VB_W} ${VB_H}`}
                    fill="none"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                >
                    <defs>
                        {/* Soft periwinkle at the cards, violet at the hub — one shared gradient. */}
                        <linearGradient
                            id="ray"
                            gradientUnits="userSpaceOnUse"
                            x1={0}
                            y1={52}
                            x2={0}
                            y2={RAY_END_Y}
                        >
                            <stop offset="0%" stopColor="#C7D4FF" />
                            <stop offset="24%" stopColor="#9D8BFF" />
                            <stop offset="52%" stopColor="#7C6AF5" />
                            <stop offset="78%" stopColor="#6D5BFF" />
                            <stop offset="92%" stopColor="#8C7BFF" />
                            <stop offset="100%" stopColor="#C9BCFF" stopOpacity="0" />
                        </linearGradient>

                        {/* Smooth band that dissolves the rays behind the typography. */}
                        <linearGradient
                            id="ray-fade"
                            gradientUnits="userSpaceOnUse"
                            x1={0}
                            y1={120}
                            x2={0}
                            y2={280}
                        >
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="8%" stopColor="#FFFFFF" />
                            <stop offset="20%" stopColor="#000000" />
                            <stop offset="80%" stopColor="#000000" />
                            <stop offset="92%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>

                        <mask id="ray-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={VB_W} height={VB_H}>
                            <rect x={0} y={0} width={VB_W} height={VB_H} fill="url(#ray-fade)" />
                        </mask>
                    </defs>

                    <g mask="url(#ray-mask)">
                        {TOOL_CARDS.map(({ cx, cy, label }, index) => {
                            const d = rayPath(cx, cy)

                            return (
                                <g key={label}>
                                    <path
                                        d={d}
                                        fill="none"
                                        stroke="url(#ray)"
                                        strokeWidth={1.6}
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    {!reduceMotion && (
                                        <RayPulse d={d} delay={index * 0.16} />
                                    )}
                                </g>
                            )
                        })}
                    </g>
                </svg>

                {/* Tool Cards */}
                {TOOL_CARDS.map(({ label, Icon, cx, cy }) => (
                    <motion.div
                        key={label}
                        whileHover={{ y: -3 }}
                        transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 24,
                        }}
                        style={{
                            left: pct(cx - TILE_W / 2, VB_W),
                            top: pct(cy - TILE_H / 2, VB_H),
                            width: pct(TILE_W, VB_W),
                        }}
                        className="absolute flex aspect-[50/48] flex-col items-center justify-center gap-[1.5cqw] rounded-[24%] bg-white shadow-[0_1px_2px_rgba(23,23,23,0.05),0_6px_16px_-8px_rgba(63,70,181,0.28)] ring-1 ring-black/[0.04]"
                    >
                        <span className="size-[5cqw] text-[#5145F5]">
                            <Icon className="size-full" />
                        </span>
{/* 
                        <span className="text-[2.4cqw] font-semibold leading-none tracking-tight text-neutral-900">
                            {label}
                        </span> */}
                    </motion.div>
                ))}

                {/* Centre Typography */}
                <div className="absolute left-1/2 top-[43%] z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-serif text-[7.5cqw] leading-[1.08] tracking-[-0.055em] text-neutral-950">
                        Everything. Working as One
                    </h2>

                    <p className="mx-auto mt-3 max-w-[290px] text-[2.8cqw] leading-relaxed text-neutral-600">
                        From intelligent models to cloud infrastructure,
                        data, agents, and security bringing every layer
                        together to build scalable solutions.
                    </p>
                </div>

                {/* Central Qubenix Hub */}
                <div
                    className="absolute z-20"
                    style={{
                        left: pct(HUB_CX - HUB_SIZE / 2, VB_W),
                        top: pct(HUB_TOP, VB_H),
                        width: pct(HUB_SIZE, VB_W),
                    }}
                >
                    {/* Logo frame */}
                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[24%] bg-white shadow-[0_2px_4px_rgba(23,23,23,0.06),0_10px_26px_-14px_rgba(63,70,181,0.4)] ring-1 ring-black/[0.05]">
    <Image
        src="/Q.png"
        alt="Qubenix"
        width={100}
        height={100}
        priority
        unoptimized
        className="h-[84%] w-[84%] object-contain"
    />
</div>
                </div>
            </div>
        </div>
    )
}
