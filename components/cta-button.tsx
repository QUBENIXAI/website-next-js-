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
            <div className='flex items-center justify-center gap-1.5 rounded-sm bg-linear-to-b from-[#77B0FF] to-[#036DFF] px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2'>
                <p className="overflow-hidden text-center text-xs text-white sm:text-sm">
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
                    <span className='flex text-white [&_svg]:size-3.5 sm:[&_svg]:size-4'>
                        {icon}
                    </span>
                )}
            </div>
        </motion.button>
    )
}
