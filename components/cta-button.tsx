"use client";

import { cn } from "@/lib/utils"
import {motion, useInView} from 'motion/react';
import {useRef} from 'react';

interface CtaButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
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

export default function CtaButton({label, icon, onClick, className, href}: CtaButtonProps) {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
    const inView = useInView(ref, {once: true, amount: 0.8})
    const words = label.split(" ")
    const customBackground = className?.split(/\s+/).some((token) => token.startsWith("bg-"))
    const classes = cn("rounded-md p-0.5 text-white", !customBackground && "bg-[#005EE1]", className)
    const motionProps = {
        className: classes,
        onClick,
        initial: "hidden" as const,
        animate: inView ? "rest" as const : "hidden" as const,
        whileHover: "hover" as const,
        whileTap: {scale: 0.98},
    }

    const face = (
            <div className={cn(
                "flex items-center justify-center gap-1.5 rounded-sm px-3 py-1.5 text-inherit sm:gap-2 sm:px-4 sm:py-2",
                !customBackground && "bg-linear-to-b from-[#77B0FF] to-[#036DFF]",
                className,
            )}>
                <p className="overflow-hidden text-center text-xs text-inherit sm:text-sm">
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
                    <span className='flex text-inherit [&_svg]:size-3.5 sm:[&_svg]:size-4'>
                        {icon}
                    </span>
                )}
            </div>
    )

    if (href) {
        return (
            <motion.a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={href}
                {...motionProps}
            >
                {face}
            </motion.a>
        )
    }

    return (
        <motion.button ref={ref as React.RefObject<HTMLButtonElement>} {...motionProps}>
            {face}
        </motion.button>
    )
}
