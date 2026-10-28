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

export default function AboutUs() {

    return (
        <main className='w-full bg-blue-500'>

            <h1>Hello</h1>
        </main>
    )
}