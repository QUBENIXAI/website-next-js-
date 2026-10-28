"use client"

import { motion } from "motion/react"

interface PillProps{
    label: string;
    icon: React.ReactNode;
}

const spring = { type: "spring" as const, stiffness: 380, damping: 30 }

export default function PillLayer({ label, icon }: PillProps) {
    return (
        <motion.div
            className="inline-flex items-center overflow-hidden rounded-full bg-[#fff] py-[0.45em] text-xs border border-[0.5px] border-neutral-500 text-black sm:text-sm xl:text-base"
            initial="closed"
            whileInView="open"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
                closed: { paddingLeft: "0.5em", paddingRight: "0.5em" },
                open: { paddingLeft: "1em", paddingRight: "0.85em" },
            }}
            transition={spring}
        >
            <motion.span
                className="grid overflow-hidden"
                variants={{
                    closed: { gridTemplateColumns: "0fr", opacity: 0 },
                    open: { gridTemplateColumns: "1fr", opacity: 1 },
                }}
                transition={spring}
            >
                <span className="overflow-hidden whitespace-nowrap">{label}</span>
            </motion.span>
            <motion.span
                className="h-[1em] w-px shrink-0 origin-center bg-black"
                variants={{
                    closed: { scaleY: 0, opacity: 0, marginLeft: 0, marginRight: 0 },
                    open: { scaleY: 1, opacity: 1, marginLeft: "0.55em", marginRight: "0.55em" },
                }}
                transition={{ ...spring, delay: 0.08 }}
            />
            <span className="flex size-[1em] text-black [&>svg]:size-full">{icon}</span>
        </motion.div>
    )
}