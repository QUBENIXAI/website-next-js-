"use client"

import { IndustryVisual } from "./industry-visual"

export default function Bento3() {
    return (
        <article className="flex min-h-[300px] w-full min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-sm:min-h-0 sm:min-h-[260px] xl:min-h-0">
            <div className="relative flex h-[210px] shrink-0 items-center justify-center overflow-hidden px-6 py-4 sm:h-[250px] sm:px-4">
                <IndustryVisual />
            </div>

            <div className="mt-auto px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <h2 className="text-base font-medium tracking-tight text-black sm:text-[17px]">
                    Industry Specific AI Solutions
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-[#1a1a1a]">
                    Build AI solutions, API integrations, and data workflows around your industry&apos;s operations.
                </p>
            </div>
        </article>
    )
}
