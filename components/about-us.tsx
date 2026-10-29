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
    },
    {
        image: '/images/stack/openai.svg',
        name: 'OpenAI'
    },
    {
        image: '/images/stack/python.svg',
        name: 'Python'
    },
    {
        image: '/images/stack/javascript.svg',
        name: 'Javascript'
    },
    {
        image: '/images/stack/elevenlabs.svg',
        name: 'ElevenLabs'
    },
    {
        image: '/images/stack/vercel.svg',
        name: 'Vercel'
    },
    {
        image: '/images/stack/postgres.svg',
        name: 'Postgres'
    },
]

const points = [
    {
        title: 'We are a team of 10+ developers and designers',
    }

]

export default function AboutUs() {
    return (
        <main id="about" className="relative isolate mx-auto h-auto max-w-8xl overflow-hidden rounded-2xl bg-linear-to-l from-[#1100FF] to-[#9AC4FF] p-10 md:p-20">
            {/* Noise texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            <section className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-stretch">
                <div className="relative h-72 w-full shrink-0 overflow-hidden sm:h-96 md:h-[420px] md:w-1/2">
                    <Image
                        src="https://i.pinimg.com/736x/89/52/b5/8952b5c321c87296b268088b893708da.jpg"
                        alt="About Qubenix"
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="gap-10">
                    <h1 className="text-4xl font-medium text-white">About Us</h1>
                    <p className="mt-5 text-base text-white">
                        Qubenix is an AI and technology company focused on helping
                        businesses work smarter through intelligent automation,
                        connected systems, and practical software solutions. We work
                        to reduce repetitive work, simplify complex processes, and
                        help organizations build a stronger technological foundation
                        for sustainable growth.
                    </p>
                </div>
            </section>
        </main>
    );
}