"use client"

import { GlobeAnalytics } from "../globe";
import { useState } from "react";

export default function Card1() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="relative h-[250px] w-full max-w-[340px] overflow-hidden bg-white p-4 sm:h-[350px] sm:max-w-[350px] sm:p-5">
            <div className="relative z-10 flex max-w-[16rem] flex-col gap-1.5 sm:gap-2">
                <h1 className="text-lg font-medium sm:text-2xl">Global Counseling</h1>
                <p className="text-xs leading-5 text-[#616161] sm:text-sm sm:leading-6">
                    Expert guidance to help you navigate global opportunities, make informed decisions, and move forward with confidence.
                </p>
            </div>
            <div className="absolute -right-[72px] -bottom-[88px] w-[280px] sm:-right-[120px] sm:-bottom-[150px] sm:w-[440px]">
                <GlobeAnalytics markers={[]} />
            </div>
        </div>
    );
}
