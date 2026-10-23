"use client"

import { animate, useMotionValue } from "motion/react"
import { useEffect, useRef } from "react"

export default function Card2() {
    return (
        <div className="relative h-[350px] w-full max-w-[350px] overflow-hidden bg-white p-4 sm:p-5">
            <div className="relative z-10 flex max-w-[16rem] flex-col gap-2">
                <h1 className="text-xl font-medium leading-snug sm:text-2xl">Startups & Scaleups</h1>
                <p className="text-sm leading-6 text-[#616161]">
                    Expert guidance to help you navigate global opportunities, make informed decisions, and move forward with confidence.
                </p>
            </div>

            <div className="absolute right-8 bottom-6">
                <Card2Visual />
            </div>
        </div>
    );
}

const bars = [
    { height: 100, stroke: "#C8C8C8", top: [150.154, 0.1], left: [124.173, 15.1], right: [150.154, 30.1] },
    { height: 80, stroke: "#C8C8C8", top: [107.154, 45.1], left: [81.1732, 60.1], right: [107.154, 75.1] },
    { height: 50, stroke: "#A7A7A7", top: [65.154, 100.1], left: [39.1732, 115.1], right: [65.154, 130.1] },
    { height: 20, stroke: "#B2B2B2", top: [26.154, 150.1], left: [0.173218, 165.1], right: [26.154, 180.1] },
]

function RisingBar({ bar, delay }: { bar: (typeof bars)[number]; delay: number }) {
    const topRef = useRef<SVGRectElement>(null)
    const leftRef = useRef<SVGRectElement>(null)
    const rightRef = useRef<SVGRectElement>(null)
    const height = useMotionValue(0)

    useEffect(() => {
        const draw = (value: number) => {
            const shift = bar.height - value
            topRef.current?.setAttribute(
                "transform",
                `matrix(0.866025 0.5 -0.866025 0.5 ${bar.top[0]} ${bar.top[1] + shift})`,
            )
            leftRef.current?.setAttribute("height", String(value))
            leftRef.current?.setAttribute(
                "transform",
                `matrix(0.866025 0.5 0 1 ${bar.left[0]} ${bar.left[1] + shift})`,
            )
            rightRef.current?.setAttribute("height", String(value))
            rightRef.current?.setAttribute(
                "transform",
                `matrix(0.866025 -0.5 0 1 ${bar.right[0]} ${bar.right[1] + shift})`,
            )
        }

        draw(0)
        const unsubscribe = height.on("change", draw)
        const controls = animate(height, bar.height, {
            duration: 0.55 + bar.height / 180,
            ease: [0.22, 1, 0.36, 1],
            delay,
        })
        return () => {
            controls.stop()
            unsubscribe()
        }
    }, [bar, delay, height])

    return (
        <g>
            <rect ref={topRef} width="30" height="30" fill="white" stroke={bar.stroke} strokeWidth="0.2" />
            <rect ref={leftRef} width="30" height="0" fill="#F6F6F6" />
            <rect ref={rightRef} width="30" height="0" fill="#CDCDCD" />
        </g>
    )
}

const Card2Visual = () => {
    return (
        <svg width="177" height="201" viewBox="0 0 177 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            {bars.map((bar, index) => (
                <RisingBar key={bar.height} bar={bar} delay={(bars.length - 1 - index) * 0.08} />
            ))}
        </svg>
    )
}