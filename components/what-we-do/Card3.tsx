"use client"

import {motion, useInView} from 'motion/react'
import {useLayoutEffect, useRef, useState} from 'react'

export default function Card3() {
    return (
        <div className="rounded-lg relative h-[250px] w-full max-w-[340px] overflow-hidden bg-white p-4 sm:h-[350px] sm:max-w-[350px] sm:p-5">
            <div className="relative z-10 flex max-w-[16rem] flex-col gap-1.5 sm:gap-2">
                <h1 className="text-lg font-medium sm:text-2xl">Coorporates</h1>
                <p className="text-xs leading-5 text-[#616161] sm:text-sm sm:leading-6">
                    Systems and guidance that help corporate teams align work, streamline operations, and move complex programs forward with clarity.
                </p>
            </div>
            <div className="absolute inset-x-0 bottom-4 flex justify-center sm:bottom-15">
                <Card3Visual />
            </div>
        </div>
    )
}

const lines: {d: string, startsAtCenter: boolean}[] = [
    {d: "M348 20.25H220.895C193.355 20.25 205.536 39.25 198.122 39.25H187", startsAtCenter: false},
    {d: "M-2 20.25H124.316C151.684 20.25 139.579 39.25 146.947 39.25H158", startsAtCenter: false},
    {d: "M-2 43.25H124.316H150L176.5 43.25", startsAtCenter: false},
    {d: "M171 43.25H297.316H323L349.5 43.25", startsAtCenter: true},
    {d: "M-2 67.25H124.316C151.684 67.25 139.579 48.25 146.947 48.25H158", startsAtCenter: false},
    {d: "M350 67.25H223.684C196.316 67.25 208.421 48.25 201.053 48.25H190", startsAtCenter: false},
    {d: "M-2.00002 86.25H127.474C155.526 86.25 143.118 53.25 150.671 53.25H162", startsAtCenter: false},
    {d: "M-2.00002 0.25H127.474C155.526 0.25 143.118 33.25 150.671 33.25H162", startsAtCenter: false},
    {d: "M348 0.25H218.526C190.474 0.25 202.882 33.25 195.329 33.25H184", startsAtCenter: false},
    {d: "M351 86.25H221.526C193.474 86.25 205.882 53.25 198.329 53.25H187", startsAtCenter: false},
]

const Card3Visual = () => {
    const ref = useRef<SVGSVGElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.4 })

    return (
        <svg ref={ref} className="h-auto w-full" viewBox="0 0 350 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            {lines.map((line) => (
                <LinePulse key={line.d} d={line.d} startsAtCenter={line.startsAtCenter} play={inView} />
            ))}
            <rect x="156" y="28.25" width="35" height="35" rx="17.5" fill="#CDCDCD"/>
            <path d="M181.894 44.9944L180.299 41.8031C180.24 41.6857 180.159 41.5809 180.059 41.4949C179.96 41.4089 179.845 41.3433 179.72 41.3018C179.596 41.2603 179.464 41.2437 179.333 41.2531C179.202 41.2624 179.074 41.2975 178.957 41.3563L177.403 42.1331L174.128 41.2669C174.044 41.245 173.956 41.245 173.872 41.2669L170.598 42.1331L169.043 41.3563C168.926 41.2975 168.798 41.2624 168.667 41.2531C168.536 41.2437 168.404 41.2603 168.28 41.3018C168.155 41.3433 168.04 41.4089 167.941 41.4949C167.841 41.5809 167.76 41.6857 167.701 41.8031L166.106 44.9938C166.047 45.1112 166.012 45.2391 166.003 45.3701C165.994 45.5011 166.01 45.6327 166.052 45.7573C166.093 45.8819 166.159 45.9971 166.245 46.0963C166.331 46.1956 166.436 46.2769 166.553 46.3356L168.241 47.18L171.709 49.6569C171.76 49.6932 171.817 49.7197 171.878 49.735L175.878 50.735C175.962 50.756 176.05 50.755 176.133 50.732C176.216 50.709 176.292 50.6648 176.353 50.6038L179.795 47.1613L181.446 46.3356C181.683 46.217 181.864 46.009 181.947 45.7575C182.031 45.506 182.012 45.2315 181.893 44.9944H181.894ZM178.463 47.08L176.313 45.3575C176.216 45.2804 176.095 45.2416 175.971 45.2486C175.848 45.2556 175.732 45.308 175.645 45.3956C174.532 46.5169 173.291 46.375 172.5 45.875L175.203 43.25H177.191L178.891 46.6506L178.463 47.08ZM168.596 42.25L169.875 42.8888L168.277 46.0794L167 45.4413L168.596 42.25ZM175.846 49.6956L172.214 48.7881L169.139 46.5919L170.889 43.0919L174 42.2675L174.613 42.4294L171.8 45.1594L171.795 45.165C171.689 45.2709 171.608 45.3992 171.559 45.5404C171.509 45.6817 171.492 45.8323 171.508 45.9811C171.524 46.1299 171.574 46.2732 171.653 46.4003C171.732 46.5275 171.839 46.6352 171.965 46.7156C173.25 47.5363 174.801 47.4031 176.022 46.4031L177.75 47.7913L175.846 49.6956ZM179.721 46.0788L178.126 42.8913L179.404 42.25L181 45.4413L179.721 46.0788ZM174.236 51.8706C174.209 51.9787 174.147 52.0747 174.059 52.1433C173.971 52.2119 173.863 52.2492 173.752 52.2494C173.711 52.2493 173.67 52.2443 173.63 52.2344L171.026 51.5831C170.965 51.5681 170.907 51.5416 170.856 51.505L169.209 50.3288C169.108 50.2493 169.041 50.1338 169.023 50.0063C169.005 49.8789 169.037 49.7493 169.111 49.6446C169.186 49.5399 169.299 49.4681 169.425 49.4442C169.552 49.4203 169.683 49.4461 169.791 49.5163L171.36 50.6375L173.875 51.265C174.004 51.2972 174.114 51.3791 174.182 51.4928C174.251 51.6065 174.271 51.7426 174.239 51.8713L174.236 51.8706Z" fill="white"/>
        </svg>
    )
}

const LinePulse = ({d, startsAtCenter, play}: {d: string, startsAtCenter: boolean, play: boolean}) => {
    const ref = useRef<SVGPathElement>(null)
    const [length, setLength] = useState(0)

    useLayoutEffect(() => {
        if (ref.current) setLength(ref.current.getTotalLength())
    }, [d])

    const pulse = 16
    const offset = startsAtCenter
        ? [length, length * 0.86, length * 0.2, 0]
        : [0, length * 0.14, length * 0.8, length]

    return (
        <>
            <path ref={ref} d={d} strokeWidth="0.5" stroke="#D9D9D9"/>
            {play && length > 0 && (
                <motion.path
                    d={d}
                    fill="none"
                    stroke="#2F6BFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray={`${pulse} ${length}`}
                    initial={{strokeDashoffset: offset[0], opacity: 0}}
                    animate={{
                        strokeDashoffset: offset,
                        opacity: [0, 0.9, 0.9, 0],
                    }}
                    transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.14, 0.72, 1],
                        repeatDelay: 0.45,
                    }}
                />
            )}
        </>
    )
}