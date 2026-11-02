"use client"

import Image from "next/image"
import { animate, motion, useMotionValue } from "motion/react"
import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"

interface TestimonialProps {
    name: string
    position: string
    testimonial: string
    profile: string
}

const testimonials: TestimonialProps[] = [
    {
        name: "Sarah Mitchell",
        position: "Founder & CEO",
        testimonial: "Qubenix helped us streamline several time-consuming processes. Their approach to automation has made our operations significantly more efficient and allowed our team to focus on what matters most.",
        profile: "https://i.pinimg.com/736x/ae/32/35/ae32350bccaf286509ffa3bcd989c906.jpg",
    },
    {
        name: "Daniel Roberts",
        position: "CTO",
        testimonial: "What impressed us most was their ability to understand our requirements and translate them into practical technical solutions. The entire experience was smooth, collaborative, and professional.",
        profile: "https://i.pinimg.com/736x/2f/ab/67/2fab6751b7ff2d24a423b32cf0eee4e2.jpg",
    },
    {
        name: "Emily Carter",
        position: "Head of Operations",
        testimonial: "We were looking for ways to reduce repetitive work across our systems. Qubenix helped us connect our existing tools and build workflows that save our team valuable time every day.",
        profile: "https://i.pinimg.com/736x/2f/49/92/2f49928bbc91624fddd6ebbdaf7ef203.jpg",
    },
    {
        name: "Michael Anderson",
        position: "Managing Director",
        testimonial: "Working with Qubenix was a great experience. Their team brought a clear understanding of our business challenges and delivered solutions that aligned perfectly with our long-term goals.",
        profile: "https://i.pinimg.com/736x/23/8d/8f/238d8fb057461b33020c11347b691f61.jpg",
    },
    {
        name: "Olivia Bennett",
        position: "Product Manager",
        testimonial: "Their attention to detail and ability to simplify complex technical requirements really stood out. We appreciated the transparency, communication, and thoughtfulness throughout the process.",
        profile: "https://i.pinimg.com/1200x/28/6c/a2/286ca2e613618f5b5527bd7235ae27b3.jpg",
    },
    {
        name: "James Wilson",
        position: "Founder",
        testimonial: "Qubenix helped us think beyond traditional workflows and explore how intelligent automation could improve our business. Their solutions gave us a much clearer path toward scaling.",
        profile: "https://i.pinimg.com/1200x/c5/32/0b/c5320b390d6a0bc8736a373fde113585.jpg",
    },
    {
        name: "Sophia Thompson",
        position: "Chief Operating Officer",
        testimonial: "From understanding our existing infrastructure to implementing integrations, the team made everything straightforward. We now have a more connected and efficient working environment.",
        profile: "https://i.pinimg.com/1200x/e8/1e/46/e81e46fc7b4931b6c7731f9126de1a21.jpg",
    },
    {
        name: "Ryan Parker",
        position: "VP of Engineering",
        testimonial: "The technical expertise and problem-solving approach were impressive. Qubenix understood the bigger picture instead of simply implementing features, which made a real difference.",
        profile: "https://i.pinimg.com/736x/d4/b8/e3/d4b8e354092c8acc789d6bdebee2e52b.jpg",
    },
]

function TestimonialCard({
    testimonial,
}: {
    testimonial: TestimonialProps
}) {
    return (
        <div className="flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-5 sm:w-[360px] sm:p-6">
            <p className="text-sm leading-7 text-black/70 sm:text-base">
                "{testimonial.testimonial}"
            </p>

            <div className="mt-8 flex items-center gap-3">
                {testimonial.profile ? (
                    <Image
                        src={testimonial.profile}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="size-10 shrink-0 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-500">
                        {testimonial.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                    </div>
                )}

                <div className="min-w-0">
                    <p className="text-sm font-medium text-black">
                        {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs text-black/45">
                        {testimonial.position}
                    </p>
                </div>
            </div>
        </div>
    )
}

function TestimonialRow({
    items,
    reverse = false,
}: {
    items: TestimonialProps[]
    reverse?: boolean
}) {
    const x = useMotionValue(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const animation = useRef<ReturnType<typeof animate> | null>(null)

    useEffect(() => {
        const track = trackRef.current

        if (!track) return

        const halfWidth = track.scrollWidth / 2

        const start = reverse ? -halfWidth : 0
        const end = reverse ? 0 : -halfWidth

        x.set(start)

        animation.current = animate(x, end, {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
        })

        return () => animation.current?.stop()
    }, [reverse, items, x])

    return (
        <div
            className="flex overflow-hidden"
            onMouseEnter={() => animation.current?.pause()}
            onMouseLeave={() => animation.current?.play()}
        >
            <motion.div
                ref={trackRef}
                className="flex w-max gap-3 pr-3 sm:gap-4 sm:pr-4"
                style={{ x }}
            >
                {[...items, ...items].map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.name}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default function TestimonialSection() {
    const firstRow = testimonials.filter(
        (_, index) => index % 2 === 0
    )

    const secondRow = testimonials.filter(
        (_, index) => index % 2 !== 0
    )

    return (
        <main className="w-full overflow-hidden py-16 sm:py-24">
            <section className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8">
                <SectionHeading className="text-3xl font-medium tracking-tight sm:text-5xl">
                    What people say
                </SectionHeading>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-lg sm:leading-7">
                    Hear from the people who trust us to build smarter,
                    more connected solutions for their businesses.
                </p>
            </section>

            <section className="mt-10 flex w-full flex-col gap-3 sm:mt-14 sm:gap-4">
                <TestimonialRow items={firstRow} />
                <TestimonialRow items={secondRow} reverse />
            </section>
        </main>
    )
}