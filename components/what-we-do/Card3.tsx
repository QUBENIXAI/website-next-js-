"use client"

import {motion} from 'motion/react'

export default function Card3() {
    return (
        <div className="relative h-[350px] w-full max-w-[350px] overflow-hidden bg-white p-4 sm:p-5">
            <div className="relative z-10 flex max-w-[16rem] flex-col gap-2">
                <h1 className="text-xl font-medium sm:text-2xl">Coorporates</h1>
                <p className="text-sm leading-6 text-[#616161]">
                    Expert guidance to help you navigate global opportunities, make informed decisions, and move forward with confidence.
                </p>
            </div>
            <div className="absolute -right-[120px] -bottom-[150px] w-[440px]">
                
            </div>
        </div>
    )
}