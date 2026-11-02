"use client"

import { motion } from "motion/react"

interface TestimonialProps {
    name: string;
    position: string;
    testimonial: string;
    profile: string;
}

const testimonials: TestimonialProps[] = [
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "Jane Doe", position: "CTO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
    { name: "John Doe", position: "CEO", testimonial: "This is a great product!", profile: "" },
]

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
    return (
        <div className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 sm:w-[380px]">
            <p className="text-base leading-relaxed text-black/70">
                "{testimonial.testimonial}"
            </p>

            <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-neutral-200" />

                <div>
                    <p className="text-sm font-medium text-black">
                        {testimonial.name}
                    </p>
                    <p className="text-xs text-black/50">
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
    items: TestimonialProps[];
    reverse?: boolean;
}) {
    return (
        <div className="group flex overflow-hidden">
            <motion.div
                className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...items, ...items].map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default function TestimonialSection() {
    const firstRow = testimonials.filter((_, index) => index % 2 === 0)
    const secondRow = testimonials.filter((_, index) => index % 2 !== 0)

    return (
        <section className="w-full space-y-4 overflow-hidden py-10">
            <TestimonialRow items={firstRow} />
            <TestimonialRow items={secondRow} reverse />
        </section>
    )
}