"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function ProcessCard1() {
    return (
        <div className="relative w-full max-w-[380px] overflow-hidden bg-white pb-8">
            <Visual />
            <div className="px-5">
                <p className="text-xl font-semibold tracking-tight">01. Understanding</p>
                <p className="mt-1 text-sm text-[#9a9a9a]">Content</p>
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
                height={969}
                className="h-auto w-full"
            />
        </motion.div>
    )
}
