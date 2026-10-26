"use client";

import { motion } from "motion/react";

export default function Bento1() {
    return (
        <div className="w-[418px] h-[695px] bg-gradient-to-b from-[#8DAFFF] to-[#0E42FF] px-3 py-3 rounded-2xl">
    <div className="relative overflow-hidden rounded-2xl bg-white px-4 py-8">
        <DotGrid />
        <div className="relative z-10">
            <BentoVisual1 />
        </div>
    </div>

    <div className="flex flex-col mt-5 gap-2">
        <h1 className="font-medium text-white">
            Web/Apps & Digital Experience
        </h1>
        <p className="text-white text-sm">
            We design and build high-performance websites, scalable applications, and seamless digital experiences tailored to your brand, your customers, and your business goals. From intuitive user interfaces to robust digital solutions, we combine thoughtful design and modern technology.
        </p>
    </div>
</div>
    )
}

const DOT_COLS = 26
const DOT_ROWS = 22

function DotGrid() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-x-4 top-5 bottom-5 grid place-items-center"
            style={{
                gridTemplateColumns: `repeat(${DOT_COLS}, 1fr)`,
                gridTemplateRows: `repeat(${DOT_ROWS}, 1fr)`,
                maskImage: "radial-gradient(circle at center, black 10%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.28) 62%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 10%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.28) 62%, transparent 80%)",
            }}
        >
            {Array.from({ length: DOT_COLS * DOT_ROWS }, (_, i) => (
                <motion.span
                    key={i}
                    className="size-[2.2px] rounded-full bg-[#3a3a3a]"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                        duration: 1.7 + (i % 5) * 0.3,
                        delay: ((i * 137) % 2200) / 1000,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.16, 1],
                    }}
                />
            ))}
        </div>
    )
}

const BentoVisual1 = () => {
    return (
        <svg width="333" height="297" viewBox="0 0 333 297" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="51" width="282" height="297" rx="10" fill="#E5E5E5"/>
            <rect x="65" y="28" width="254" height="184" rx="10" fill="white"/>
            <circle cx="70" cy="13" r="4" fill="white"/>
            <circle cx="85" cy="13" r="4" fill="white"/>
            <circle cx="100" cy="13" r="4" fill="white"/>
            <rect x="65" y="219" width="254" height="6" rx="3" fill="white"/>
            <rect x="219" y="230" width="100" height="6" rx="3" fill="white"/>
            <rect x="189" y="241" width="130" height="6" rx="3" fill="white"/>
            <rect x="0.2" y="75.2" width="101.6" height="173.6" rx="9.8" fill="white"/>
            <rect x="0.2" y="75.2" width="101.6" height="173.6" rx="9.8" stroke="black" strokeWidth="0.4"/>
            <rect x="7" y="98" width="87" height="58" rx="5" fill="#E5E5E5"/>
            <rect x="7" y="164" width="61" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="169" width="34" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="174" width="34" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="193" width="84" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="198" width="84" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="203" width="84" height="3" rx="1.5" fill="#E5E5E5"/>
            <rect x="7" y="208" width="84" height="3" rx="1.5" fill="#E5E5E5"/>
            <circle cx="13" cy="87" r="6" fill="#E5E5E5"/>
        </svg>

    )
}