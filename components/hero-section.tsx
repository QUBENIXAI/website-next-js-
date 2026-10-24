"use client"

import { motion } from "motion/react"
import CtaButton from "./cta-button"
import { ArrowBendUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full overflow-x-hidden">
            <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-10 sm:px-6 sm:pt-16">
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
            <div className="mx-auto flex w-full max-w-6xl justify-center px-4 sm:px-6">
                <Image
                    src="/image.png"
                    alt="Hero Image"
                    width={4712}
                    height={2956}
                    priority
                    className="h-auto w-full"
                />
            </div>
        </div>
    )
}
