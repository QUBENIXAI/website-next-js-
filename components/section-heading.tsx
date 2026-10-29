"use client"

import { motion } from "motion/react"

const spring = { type: "spring" as const, stiffness: 380, damping: 32 }

export default function SectionHeading({
    children,
    className = "",
    align = "center",
}: {
    children: React.ReactNode
    className?: string
    align?: "center" | "start"
}) {
    return (
        <motion.h1
            className={`relative w-fit bg-white px-3 py-1.5 sm:px-4 sm:py-2 ${align === "start" ? "mr-auto ml-0 self-start" : "mx-auto"} ${className}`}
            initial="rest"
            whileInView="active"
            viewport={{ amount: 0.7 }}
        >
            <motion.span
                className="pointer-events-none absolute inset-0 border border-dashed border-[#2F6BFF]"
                variants={{
                    rest: { opacity: 0, scale: 0.94 },
                    active: { opacity: 1, scale: 1 },
                }}
                transition={spring}
            >
                <span className="absolute -top-1 -left-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -top-1 -right-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -bottom-1 -left-1 size-2 bg-[#2F6BFF]" />
                <span className="absolute -right-1 -bottom-1 size-2 bg-[#2F6BFF]" />
            </motion.span>
            <motion.span
                className="relative"
                variants={{
                    rest: { color: "#171717" },
                    active: { color: "#2F6BFF" },
                }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.span>
        </motion.h1>
    )
}
