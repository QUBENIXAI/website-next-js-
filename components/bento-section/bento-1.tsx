"use client";

import { motion } from "motion/react";

export default function Bento1() {
    return (
        <div className="flex w-full flex-col rounded-2xl bg-gradient-to-b from-[#8DAFFF] to-[#0E42FF] px-3 py-3 sm:px-3.5 sm:py-3.5 xl:h-[695px] xl:w-[418px] xl:shrink-0">
    <div className="relative flex min-h-[240px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-white px-3 py-6 sm:min-h-[280px] sm:rounded-2xl sm:px-4 sm:py-8">
        <DotGrid />
        <div className="relative z-10 w-full">
            <BentoVisual1 />
        </div>
    </div>

    <div className="mt-4 flex flex-col gap-2 sm:mt-5 mb-2">
        <h2 className="text-base font-medium text-white sm:text-lg">
            Web/Apps & Digital Experience
        </h2>
        <p className="text-sm leading-6 text-white">
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
        <svg className="mx-auto h-auto w-full max-w-[333px]" viewBox="0 0 333 297" fill="none" xmlns="http://www.w3.org/2000/svg">
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