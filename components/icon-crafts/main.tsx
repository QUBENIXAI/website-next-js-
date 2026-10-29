"use client"

import {motion} from 'motion/react'

export default function IconCraft({ icon }: { icon: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-10 h-10 flex items-center justify-center p-2 bg-neutral-200 rounded-md'
        >
            <div className='bg-white p-2 rounded-sm'>
                {icon}
            </div>
        </motion.div>
    )
}