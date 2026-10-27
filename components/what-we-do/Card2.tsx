"use client"

import { animate, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

export default function Card2() {
    return (
        <div className="relative h-[250px] w-full max-w-[340px] overflow-hidden bg-white p-4 sm:h-[350px] sm:max-w-[350px] sm:p-5">
            <div className="relative z-10 flex max-w-[16rem] flex-col gap-1.5 sm:gap-2">
                <h1 className="text-lg font-medium leading-snug sm:text-2xl">Startups & Scaleups</h1>
                <p className="text-xs leading-5 text-[#616161] sm:text-sm sm:leading-6">
                    Hands-on support for startups and scaleups to grow faster, simplify operations, and build systems that keep up with the team.
                </p>
            </div>

            <div className="absolute right-3 bottom-2 sm:right-8 sm:bottom-6">
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

function RisingBar({ bar, delay, active }: { bar: (typeof bars)[number]; delay: number; active: boolean }) {
    const [value, setValue] = useState(0)
    const valueRef = useRef(0)

    useEffect(() => {
        if (!active) {
            valueRef.current = 0
            setValue(0)
            return
        }

        const from = valueRef.current
        if (from >= bar.height) return

        let stopped = false
        const controls = animate(from, bar.height, {
            duration: 0.55 + bar.height / 180,
            ease: [0.22, 1, 0.36, 1],
            delay,
            onUpdate: (next) => {
                if (stopped) return
                valueRef.current = next
                setValue(next)
            },
        })

        return () => {
            stopped = true
            controls.stop()
        }
    }, [active, bar.height, delay])

    const shift = bar.height - value

    return (
        <g>
            <rect
                width="30"
                height="30"
                fill="white"
                stroke={bar.stroke}
                strokeWidth="0.2"
                transform={`matrix(0.866025 0.5 -0.866025 0.5 ${bar.top[0]} ${bar.top[1] + shift})`}
            />
            <rect
                width="30"
                height={value}
                fill="#F6F6F6"
                transform={`matrix(0.866025 0.5 0 1 ${bar.left[0]} ${bar.left[1] + shift})`}
            />
            <rect
                width="30"
                height={value}
                fill="#CDCDCD"
                transform={`matrix(0.866025 -0.5 0 1 ${bar.right[0]} ${bar.right[1] + shift})`}
            />
        </g>
    )
}

const Card2Visual = () => {
    const ref = useRef<SVGSVGElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.4 })

    return (
        <svg ref={ref} className="h-auto w-[120px] sm:w-[177px]" viewBox="0 0 177 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            {bars.map((bar, index) => (
                <RisingBar key={bar.height} bar={bar} delay={(bars.length - 1 - index) * 0.08} active={inView} />
            ))}
        </svg>
    )
}