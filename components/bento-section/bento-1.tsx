"use client";

import { motion } from "motion/react";

export default function Bento1() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Bento 1</h1>
        </motion.div>
    )
}