"use client";

import {motion} from 'motion/react';

interface CtaButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function CtaButton({label, icon, onClick}: CtaButtonProps) {
    return (
        <motion.button
            className='rounded-md bg-[#005EE1] p-0.5'
            onClick={onClick}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
                rest: { scale: 1, y: 0 },
                hover: { scale: 1.04, y: -3 },
                tap: { scale: 0.98, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
        >
            <motion.div className='flex items-center justify-center gap-2 rounded-sm bg-linear-to-b from-[#77B0FF] to-[#036DFF] px-4 py-2'>
                <p className='text-center text-sm font-medium text-white'>{label}</p>
                {icon && (
                    <motion.span
                        className='flex text-white'
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 4 },
                            tap: { x: 1 },
                        }}
                    >
                        {icon}
                    </motion.span>
                )}
            </motion.div>
        </motion.button>
    )
}