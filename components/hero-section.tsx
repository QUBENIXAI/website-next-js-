"use client"

import { motion } from "motion/react"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
    return (
        <div className="w-full">
            <section className="mx-auto flex h-screen w-full max-w-6xl flex-col items-start justify-center px-4 sm:px-6">
                <h1 className="text-4xl font-semibold">Build Smarter Systems, 
                    <br />
                    Make Room for growth
                </h1>
                <div className="mt-4 flex items-center justify-start gap-4">
                    <CtaButton label="Explore Our Work" icon={<ArrowBendUpRightIcon />} />
                    <button className="bg-white text-black px-4 py-2 rounded-md">
                        About Us
                    </button>
                </div>
            </section>

        </div>
    )
}
