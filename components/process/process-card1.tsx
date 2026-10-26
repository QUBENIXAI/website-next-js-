"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function ProcessCard1() {
    return (
        <div className="relative h-[300px] w-full max-w-[320px] overflow-hidden bg-white pt-4 sm:h-[430px] sm:max-w-[380px] sm:pt-6">
            <Visual />
            <div className="absolute inset-x-0 bottom-0 px-4 pt-6 pb-4 sm:px-5 sm:pt-10 sm:pb-8">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 backdrop-blur-xl"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,0.96) 55%, rgba(255,255,255,0.55) 100%)",
                        maskImage: "linear-gradient(to top, black 62%, transparent)",
                        WebkitMaskImage: "linear-gradient(to top, black 62%, transparent)",
                    }}
                />
                <div className="relative">
                    <p className="text-base font-medium tracking-tight sm:text-xl">01. Understanding</p>
                    <p className="mt-1 text-xs leading-5 text-[#9a9a9a] sm:text-sm sm:leading-normal">We begin with your goals, existing processes, and technical requirements to understand what actually needs to change.</p>
                </div>
            </div>
        </div>
    )
}

export const Visual = () => {
    return (
        <motion.div className="relative w-full">
            <Image
                src="/Understanding.png"
                alt="Understanding"
                width={1152}
                height={900}
                className="h-auto w-full"
            />
        </motion.div>
    )
}
