"use client"

import {motion} from 'motion/react'
import Image from 'next/image';

interface StackProps {
    image: string;
    name: string;
}

const stacks: StackProps[] = [
    {
        image: '/images/stack/react.svg',
        name: 'React'
    },
    {
        image: '/images/stack/next.js.svg',
        name: 'Next.js'
    }
]

export default function Stack() {

    return (
        <div className="flex flex-wrap gap-4">
            {stacks.map((stack) => (
                <motion.div key={stack.name} className="flex flex-col items-center justify-center">
                    <Image src={stack.image} alt={stack.name} width={100} height={100} />
                </motion.div>
            ))}
        </div>
    )
}