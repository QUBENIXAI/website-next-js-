"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

interface OurTeamProps {
    name: string
    designation: string
    description: string
    profileImage: string
}

const TeamMembers: OurTeamProps[] = [
    {
        name: "Survasamir Jena",
        designation: "Founder & CEO",
        description: "Architects and directs the core engineering philosophy at Qubenix, uniting multi-agent reasoning, deterministic backend systems, and mission-critical automation into a single cohesive operating layer.",
        profileImage: "/team/Surva.png",
    },
    {
        name: "Bharat",
        designation: "Head of International Business",
        description: "Leads international client acquisition and relationship management, bridging global enterprise markets with Qubenix's automation and software engineering solutions.",
        profileImage: "/team/Bharat.png",
    },
    {
        name: "Manshi Mishra",
        designation: "Head of Business Development",
        description: "Leads business development pipelines, structuring strategic client engagements and scaling institutional adoption for high-growth businesses.",
        profileImage: "/team/Manshi.png",
    },
    {
        name: "Abhinash Pritiraj",
        designation: "VP of Technology",
        description: "Steers technical architecture, cloud scalability, and engineering execution across flagship applications, microservices, and enterprise deployments.",
        profileImage: "/team/Abhinash.png",
    },
    {
        name: "Akash Khushhal",
        designation: "Head of Product Design",
        description: "Leads product design engineering, interface design systems, and user experience paradigms across web, mobile, and internal tool ecosystems.",
        profileImage: "/team/Akash.png",
    },
    {
        name: "Abhinash Saho",
        designation: "Editorial Director",
        description: "Oversees editorial strategy, brand storytelling, and communication frameworks that articulate complex technical architecture clearly to stakeholders.",
        profileImage: "/team/Abhinash2.png",
    },
    {
        name: "Smiti Suhani Satapathy",
        designation: "Head of Content Strategy",
        description: "Heads content strategy and creative campaign development, directing messaging across enterprise campaigns, tutorials, and partner enablement.",
        profileImage: "/team/Smiti.png",
    },
    {
        name: "Sanket Panda",
        designation: "Marketing Intern",
        description: "Contributes to marketing analytics, multi-channel distribution, audience research, and data-driven growth initiatives.",
        profileImage: "/team/Sanket.png",
    },
]

const popSpring = { type: "spring" as const, stiffness: 320, damping: 30 }

function usePopScale() {
    const [scale, setScale] = useState(1.04)

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth
            if (width >= 1024) setScale(1.1)
            else if (width >= 640) setScale(1.06)
            else setScale(1.03)
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    return scale
}

function FrameCorners() {
    return (
        <>
            <span className="absolute -top-1 -left-1 size-2 bg-[#2F6BFF]" />
            <span className="absolute -top-1 -right-1 size-2 bg-[#2F6BFF]" />
            <span className="absolute -bottom-1 -left-1 size-2 bg-[#2F6BFF]" />
            <span className="absolute -right-1 -bottom-1 size-2 bg-[#2F6BFF]" />
        </>
    )
}

function TeamCard({
    member,
    popped,
    blurred,
    popScale,
    onToggle,
}: {
    member: OurTeamProps
    popped: boolean
    blurred: boolean
    popScale: number
    onToggle: () => void
}) {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!popped) return
        ref.current?.scrollIntoView({ block: "center", behavior: "smooth" })
    }, [popped])

    return (
        <motion.button
            ref={ref}
            type="button"
            onClick={onToggle}
            aria-expanded={popped}
            animate={{ scale: popped ? popScale : 1 }}
            transition={popSpring}
            className={`relative w-full min-w-0 cursor-pointer scroll-mt-28 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6BFF] ${popped ? "z-50" : ""} ${blurred ? "blur-xl sm:blur-2xl" : ""}`}
        >
            <div className="relative border border-dashed border-[#2F6BFF] bg-white">
                <FrameCorners />
                <AnimatePresence>
                    {popped && (
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={popSpring}
                            className="absolute top-0 left-1/2 z-10 w-max max-w-[calc(100%-0.75rem)] -translate-x-1/2 -translate-y-1/2 bg-[#2F6BFF] px-2 py-0.5 text-center text-[11px] leading-4 font-medium text-white sm:px-3 sm:py-1 sm:text-sm"
                        >
                            {member.designation}
                        </motion.span>
                    )}
                </AnimatePresence>
                <div className="relative aspect-4/5 w-full sm:aspect-3/4">
                    <Image
                        src={member.profileImage}
                        alt={member.name}
                        fill
                        sizes="(min-width: 768px) 30vw, 45vw"
                        className="object-cover object-top"
                    />
                    {popped ? (
                        <div className="absolute inset-x-0 bottom-0 bg-[#cfcfcf]/90 px-2.5 py-2.5 sm:px-4 sm:py-4">
                            <p className="text-sm font-semibold text-[#171717] sm:text-base">{member.name}</p>
                            <p className="mt-1 line-clamp-3 text-xs leading-4 text-[#4a4a4a] sm:line-clamp-4 sm:text-sm sm:leading-5">{member.description}</p>
                        </div>
                    ) : (
                        <div className="absolute inset-x-0 bottom-0 bg-white px-2.5 py-2 sm:px-4 sm:py-3">
                            <p className="text-xs font-medium text-[#171717] sm:text-sm md:text-base">{member.name}</p>
                            <p className="mt-0.5 line-clamp-2 text-[11px] leading-4 text-[#616161] sm:text-xs sm:leading-5 md:text-sm">{member.designation}</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.button>
    )
}

export default function OurTeam() {
    const [poppedMember, setPoppedMember] = useState<OurTeamProps | null>(null)
    const popScale = usePopScale()

    useEffect(() => {
        if (!poppedMember) return
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setPoppedMember(null)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [poppedMember])

    return (
        <>
            <AnimatePresence>
                {poppedMember && (
                    <motion.button
                        type="button"
                        aria-label="Close team member"
                        className="fixed inset-0 z-30 bg-background/45"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPoppedMember(null)}
                    />
                )}
            </AnimatePresence>
            <div className={`w-full max-w-2xl ${poppedMember ? "blur-2xl" : ""}`}>
                <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    Meet Our Team
                </h1>
                <p className="mt-3 text-center text-sm leading-6 text-[#6b6b6b] sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                    We bring together strategy, design, and engineering to turn complex
                    challenges into meaningful digital products.
                </p>
            </div>
            <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3 md:gap-8">
                {TeamMembers.map((member) => (
                    <TeamCard
                        key={member.name}
                        member={member}
                        popped={poppedMember?.name === member.name}
                        blurred={poppedMember !== null && poppedMember.name !== member.name}
                        popScale={popScale}
                        onToggle={() =>
                            setPoppedMember((current) => (current?.name === member.name ? null : member))
                        }
                    />
                ))}
            </div>
        </>
    )
}
