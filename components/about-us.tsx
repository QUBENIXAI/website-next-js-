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
        <main className='w-full bg-blue-500 h-auto p-10 md:p-20'>

            <section className='flex gap-10 '>
                <div className='bg-white'>
                    <h1>Hello</h1>
                </div>
                <div className='gap-10'>
                    <h1 className='text-4xl font-medium text-white'>About Us</h1>
                    <p className='text-white text-base'>Qubenix is an AI and technology company focused on helping businesses work smarter through intelligent automation, connected systems, and practical software solutions.
                        <br />
                        We work to reduce repetitive work, simplify complex processes, and help organizations build a stronger technological foundation for sustainable growth.
                    </p>
                </div>
            </section>
        </main>
    )
}