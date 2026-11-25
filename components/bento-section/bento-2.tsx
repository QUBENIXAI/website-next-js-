"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { DotGrid, VoiceVisual } from "./voice-visual"

export default function Bento2() {
    return (
        <div className=" grid h-fit w-full min-w-0 shrink-0 grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
            <article className="border border-neutral-200 flex h-full min-w-0 flex-col rounded-lg bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-sm:order-2 sm:p-4">
                <div className="relative flex h-[148px] shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F5] sm:h-[168px]">
                    <FlowDots />
                    <Visual2 />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 px-1.5 pt-4 pb-1">
                    <h2 className="text-base font-medium tracking-tight text-black sm:text-[17px]">
                        CRM, ERP & Business Systems
                    </h2>
                    <p className="text-sm leading-6 text-[#1a1a1a]">
                        Centralize sales, projects, finance, and internal workflows with integrated CRM, ERP, and admin dashboards.
                    </p>
                </div>
            </article>

            <article className="border border-neutral-200 flex h-full min-w-0 flex-col overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-sm:order-1">
                <div className="relative flex h-[168px] shrink-0 items-center justify-center overflow-hidden sm:h-[196px]">
                    <DotGrid />
                    <VoiceVisual />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 px-4 pt-1 pb-4 sm:px-5">
                    <h2 className="text-base font-medium tracking-tight text-black sm:text-[17px]">
                        AI Voice Agents &amp; Calling
                    </h2>
                    <p className="text-sm leading-6 text-[#1a1a1a]">
                        Build AI-powered voice agents for inbound and outbound
                        calls, customer inquiries, lead qualification,
                        appointment scheduling.
                    </p>
                </div>
            </article>
        </div>
    )
}

const FLOW_CYCLE = 2.8

const FLOW_LINES = [
    "M11.4999 23.5L11.3171 52.5H72.4999",
    "M154.803 92L155 53H89",
]

const DOT_COLS = 16
const DOT_ROWS = 7

function FlowDots() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-2 grid place-items-center"
            style={{
                gridTemplateColumns: `repeat(${DOT_COLS}, 1fr)`,
                gridTemplateRows: `repeat(${DOT_ROWS}, 1fr)`,
                maskImage: "radial-gradient(circle at center, black 18%, rgba(0,0,0,0.55) 46%, transparent 76%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 18%, rgba(0,0,0,0.55) 46%, transparent 76%)",
            }}
        >
            {Array.from({ length: DOT_COLS * DOT_ROWS }, (_, i) => {
                return (
                    <motion.span
                        key={i}
                        className="size-[2.4px] rounded-full bg-[#2c2c2c]"
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: [0, 0, 0.9, 0.9, 0], scale: [0.2, 0.2, 1, 1, 0.35] }}
                        transition={{
                            duration: FLOW_CYCLE,
                            times: [0, 0.7, 0.8, 0.9, 1],
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )
            })}
        </div>
    )
}

function FlowPulse({ d }: { d: string }) {
    const ref = useRef<SVGPathElement>(null)

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduce) return
        let frame = 0
        const tick = (now: number) => {
            const el = ref.current
            if (el) {
                const progress = (now % (FLOW_CYCLE * 1000)) / (FLOW_CYCLE * 1000)
                let offset = -0.9
                let opacity = 0
                if (progress < 0.58) {
                    offset = -(progress / 0.58) * 0.9
                    opacity = 1
                } else if (progress < 0.66) {
                    offset = -0.9
                    opacity = 1 - (progress - 0.58) / 0.08
                }
                el.setAttribute("stroke-dashoffset", offset.toFixed(4))
                el.setAttribute("opacity", opacity.toFixed(3))
            }
            frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <path
            ref={ref}
            d={d}
            fill="none"
            stroke="#A78BFA"
            strokeWidth={0.7}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.1 0.9"
            strokeDashoffset={0}
            opacity={0}
        />
    )
}

const Visual2 = () => {
    return (
        <svg className="relative z-10 h-auto w-[72%] max-w-[250px] max-sm:h-[120px] max-sm:w-auto" viewBox="-4 -4 175 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4999 23.5L11.3171 52.5H72.4999" strokeWidth="0.65" strokeLinecap="round" stroke="#C4C4C4"/>
            <path d="M154.803 92L155 53H89" strokeWidth="0.65" strokeLinecap="round" stroke="#C4C4C4"/>
            {FLOW_LINES.map((d) => (
                <FlowPulse key={d} d={d} />
            ))}
            <rect x="73" y="45" width="16" height="15" rx="2" fill="black"/>
            <g clipPath="url(#bento-visual2-code)">
                <path d="M78.8899 51.5744L77.7792 52.5L78.8899 53.4256C78.9126 53.4438 78.9315 53.4663 78.9454 53.4918C78.9593 53.5174 78.968 53.5455 78.9709 53.5744C78.9738 53.6033 78.9709 53.6326 78.9624 53.6604C78.9539 53.6882 78.9399 53.714 78.9213 53.7364C78.9027 53.7587 78.8798 53.7771 78.854 53.7905C78.8281 53.8039 78.7999 53.812 78.7709 53.8144C78.7419 53.8167 78.7128 53.8133 78.6851 53.8042C78.6575 53.7952 78.6319 53.7807 78.6099 53.7616L77.2974 52.6679C77.2728 52.6474 77.253 52.6217 77.2394 52.5926C77.2258 52.5636 77.2188 52.5319 77.2188 52.4999C77.2188 52.4678 77.2258 52.4361 77.2394 52.4071C77.253 52.3781 77.2728 52.3524 77.2974 52.3318L78.6099 51.2381C78.6545 51.201 78.7121 51.1831 78.7698 51.1884C78.8276 51.1936 78.881 51.2217 78.9181 51.2663C78.9552 51.3109 78.9731 51.3684 78.9678 51.4262C78.9626 51.484 78.9345 51.5373 78.8899 51.5744ZM83.7024 52.3318L82.3899 51.2381C82.3679 51.2197 82.3424 51.2059 82.3149 51.1973C82.2875 51.1888 82.2586 51.1857 82.23 51.1884C82.2014 51.191 82.1736 51.1992 82.1481 51.2126C82.1227 51.2259 82.1002 51.2442 82.0818 51.2663C82.0446 51.3109 82.0267 51.3684 82.032 51.4262C82.0373 51.484 82.0653 51.5373 82.1099 51.5744L83.2206 52.5L82.1099 53.4256C82.0872 53.4438 82.0684 53.4663 82.0545 53.4918C82.0406 53.5174 82.0319 53.5455 82.029 53.5744C82.0261 53.6033 82.029 53.6326 82.0375 53.6604C82.046 53.6882 82.06 53.714 82.0786 53.7364C82.0972 53.7587 82.1201 53.7771 82.1459 53.7905C82.1717 53.8039 82.2 53.812 82.229 53.8144C82.2579 53.8167 82.2871 53.8133 82.3148 53.8042C82.3424 53.7952 82.368 53.7807 82.3899 53.7616L83.7024 52.6679C83.7271 52.6474 83.7469 52.6217 83.7605 52.5926C83.7741 52.5636 83.7811 52.5319 83.7811 52.4999C83.7811 52.4678 83.7741 52.4361 83.7605 52.4071C83.7469 52.3781 83.7271 52.3524 83.7024 52.3318ZM81.4496 49.8881C81.4226 49.8783 81.3939 49.8739 81.3652 49.8752C81.3365 49.8765 81.3083 49.8834 81.2823 49.8956C81.2563 49.9077 81.2329 49.9249 81.2135 49.9461C81.1941 49.9673 81.1791 49.9921 81.1693 50.0191L79.4193 54.8316C79.4095 54.8586 79.405 54.8873 79.4063 54.9161C79.4076 54.9448 79.4145 54.973 79.4266 54.999C79.4388 55.0251 79.456 55.0485 79.4772 55.0679C79.4984 55.0873 79.5233 55.1024 79.5503 55.1122C79.5743 55.1207 79.5995 55.125 79.6249 55.125C79.6699 55.125 79.7137 55.1112 79.7505 55.0854C79.7873 55.0596 79.8152 55.0231 79.8306 54.9809L81.5806 50.1684C81.5904 50.1414 81.5948 50.1127 81.5935 50.084C81.5922 50.0553 81.5853 50.0272 81.5731 50.0011C81.561 49.9751 81.5438 49.9517 81.5226 49.9324C81.5014 49.913 81.4766 49.8979 81.4496 49.8881Z" fill="white"/>
            </g>
            <rect width="25" height="24" rx="3" fill="#3F46B5"/>
            <path d="M17.7259 13.7343C17.7796 13.8274 17.7941 13.938 17.7664 14.0419C17.7387 14.1457 17.671 14.2343 17.5781 14.2884L12.7031 17.1321C12.641 17.1683 12.5704 17.1874 12.4985 17.1874C12.4266 17.1874 12.3559 17.1683 12.2938 17.1321L7.41883 14.2884C7.32727 14.2333 7.26106 14.1445 7.23454 14.041C7.20803 13.9375 7.22333 13.8278 7.27715 13.7355C7.33096 13.6432 7.41896 13.5758 7.52208 13.548C7.6252 13.5201 7.73515 13.534 7.82812 13.5866L12.5 16.311L17.1719 13.5866C17.265 13.5329 17.3756 13.5183 17.4794 13.546C17.5832 13.5737 17.6719 13.6414 17.7259 13.7343ZM17.1719 11.1491L12.5 13.8735L7.82812 11.1491C7.73562 11.103 7.62905 11.0939 7.53009 11.1237C7.43114 11.1534 7.34723 11.2198 7.29547 11.3092C7.2437 11.3986 7.22795 11.5044 7.25144 11.6051C7.27492 11.7057 7.33587 11.7936 7.42188 11.8509L12.2969 14.6946C12.359 14.7308 12.4296 14.7499 12.5015 14.7499C12.5734 14.7499 12.6441 14.7308 12.7062 14.6946L17.5812 11.8509C17.628 11.8244 17.6691 11.7888 17.7021 11.7463C17.7351 11.7038 17.7593 11.6552 17.7733 11.6033C17.7873 11.5513 17.7909 11.4971 17.7838 11.4438C17.7768 11.3905 17.7592 11.3391 17.7321 11.2926C17.7049 11.2461 17.6689 11.2055 17.626 11.1731C17.583 11.1407 17.5341 11.1171 17.482 11.1037C17.4299 11.0904 17.3756 11.0875 17.3224 11.0953C17.2691 11.1031 17.218 11.1214 17.1719 11.1491ZM7.21875 9.06246C7.21891 8.9913 7.23776 8.92144 7.27341 8.85986C7.30906 8.79828 7.36025 8.74714 7.42188 8.71156L12.2969 5.86781C12.359 5.83159 12.4296 5.8125 12.5015 5.8125C12.5734 5.8125 12.6441 5.83159 12.7062 5.86781L17.5812 8.71156C17.6425 8.74734 17.6934 8.79856 17.7287 8.86013C17.7641 8.9217 17.7827 8.99146 17.7827 9.06246C17.7827 9.13346 17.7641 9.20322 17.7287 9.26479C17.6934 9.32635 17.6425 9.37758 17.5812 9.41336L12.7062 12.2571C12.6441 12.2933 12.5734 12.3124 12.5015 12.3124C12.4296 12.3124 12.359 12.2933 12.2969 12.2571L7.42188 9.41336C7.36025 9.37778 7.30906 9.32664 7.27341 9.26506C7.23776 9.20348 7.21891 9.13361 7.21875 9.06246ZM8.43141 9.06246L12.5 11.436L16.5686 9.06246L12.5 6.68894L8.43141 9.06246Z" fill="white"/>
            <g transform="translate(142 77)">
                <rect width="25" height="24" rx="3" fill="#3F46B5"/>
                <path
                    transform="translate(5.6 5.1) scale(0.56)"
                    fill="white"
                    fillRule="evenodd"
                    d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"
                />
            </g>
            <defs>
                <clipPath id="bento-visual2-code">
                    <rect width="7" height="7" fill="white" transform="translate(77 49)"/>
                </clipPath>
            </defs>
        </svg>
    )
}
