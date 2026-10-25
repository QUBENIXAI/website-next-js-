"use client";

import {motion, useInView} from 'motion/react';
import {useRef} from 'react';

interface CtaButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const wordEase = [0.22, 1, 0.36, 1] as const

function wordMotion(index: number) {
    const delay = index * 0.08
    const transition = {duration: 0.45, delay, ease: wordEase}

    return {
        hidden: {opacity: 0, y: "100%"},
        rest: {opacity: 1, y: "0%", transition},
        hover: {opacity: [0, 1], y: ["100%", "0%"], transition},
    }
}

export default function CtaButton({label, icon, onClick}: CtaButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)
    const inView = useInView(ref, {once: true, amount: 0.8})
    const words = label.split(" ")

    return (
        <motion.button
            ref={ref}
            className='rounded-md bg-[#005EE1] p-0.5'
            onClick={onClick}
            initial="hidden"
            animate={inView ? "rest" : "hidden"}
            whileHover="hover"
            whileTap={{scale: 0.98}}
        >
            <div className='flex items-center justify-center gap-2 rounded-sm bg-linear-to-b from-[#77B0FF] to-[#036DFF] px-4 py-2'>
                <p className="overflow-hidden text-center text-sm font-medium text-white">
                    {words.map((word, index) => (
                        <motion.span
                            key={`${word}-${index}`}
                            className="inline-block"
                            variants={wordMotion(index)}
                        >
                            {word}{index < words.length - 1 ? "\u00A0" : ""}
                        </motion.span>
                    ))}
                </p>
                {icon && (
                    <span className='flex text-white'>
                        {icon}
                    </span>
                )}
            </div>
        </motion.button>
    )
}
