"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

export default function BlogReveal({ children }: { children: ReactNode }) {
    return (
        <motion.article
            className="w-full px-5 py-8 sm:px-8"
            initial={{ filter: "blur(18px)", opacity: 0.65 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.article>
    )
}
