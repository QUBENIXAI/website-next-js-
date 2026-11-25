"use client"

import { BuildingsIcon } from "@phosphor-icons/react"
import IconCraft from "./icon-crafts/main"
import CornerDotGrids from "./corner-dot-grids"

type Industry = {
    name: string
    description: string
    builds: string
    badge: string
    image: string
}

const Industries: Industry[] = [
    {
        name: "Healthcare",
        description: "Software for hospitals, clinics, diagnostic centres and pharmacies \u2014 from the first appointment to the final bill.",
        builds: "EHR systems, patient portals, healthcare CRM and AI-assisted operations",
        badge: "7 specialisations",
        image: "/industries/healthcare.svg",
    },
    {
        name: "Banking and Financial Services",
        description: "Secure, compliant platforms for banks, fintechs, lenders and insurers, built around onboarding and money movement.",
        builds: "Digital onboarding, payment systems, compliance workflows and financial CRM",
        badge: "7 specialisations",
        image: "/industries/banking-and-financial-services.svg",
    },
    {
        name: "E-commerce and Retail",
        description: "Storefronts, marketplaces and retail back-offices that keep stock, orders and customers in sync across every channel.",
        builds: "Inventory management, order processing, payment systems and retail automation",
        badge: "6 specialisations",
        image: "/industries/e-commerce-and-retail.svg",
    },
    {
        name: "Logistics and Supply Chain",
        description: "End-to-end visibility from warehouse to doorstep for carriers, 3PLs and distributors moving goods at scale.",
        builds: "Fleet management, shipment tracking, warehouse systems and logistics automation",
        badge: "6 specialisations",
        image: "/industries/logistics-and-supply-chain.svg",
    },
    {
        name: "Education and EdTech",
        description: "Digital campuses for schools, universities and coaching institutes \u2014 admissions, learning and assessment in one place.",
        builds: "Learning management systems, student information systems and online assessments",
        badge: "6 specialisations",
        image: "/industries/education-and-edtech.svg",
    },
    {
        name: "Real Estate and Tech",
        description: "Tools for developers, brokers and property managers to list, sell, lease and maintain property portfolios.",
        builds: "Real estate CRM, lead management, listing marketplaces and property management platforms",
        badge: "6 specialisations",
        image: "/industries/real-estate-and-tech.svg",
    },
    {
        name: "Travel and Hospitality",
        description: "Booking, reservation and guest platforms for travel agencies, tour operators, hotels and resorts.",
        builds: "Booking engines, reservation systems, guest management and hospitality automation",
        badge: "6 specialisations",
        image: "/industries/travel-and-hospitality.svg",
    },
    {
        name: "Restaurant and Food Services",
        description: "Front-of-house to kitchen systems for restaurants, cloud kitchens and delivery-first food brands.",
        builds: "POS systems, table reservations, order management and kitchen inventory",
        badge: "6 specialisations",
        image: "/industries/restaurant-and-food-services.svg",
    },
    {
        name: "On-Demand Services",
        description: "Marketplaces that match customers with service providers in real time \u2014 booked, tracked and paid in-app.",
        builds: "Time-slot booking, provider management, live dispatch and in-app payments",
        badge: "6 specialisations",
        image: "/industries/on-demand-services.svg",
    },
    {
        name: "Automotive, EV and E-Mobility",
        description: "Software for dealers, service centres, EV operators and mobility platforms across the whole vehicle lifecycle.",
        builds: "Dealer management, service booking, charging network software and fleet electrification tools",
        badge: "6 specialisations",
        image: "/industries/automotive-ev-and-e-mobility.svg",
    },
    {
        name: "Energy and Utilities",
        description: "Monitoring and operations platforms for solar, power and water utilities managing distributed assets.",
        builds: "Energy monitoring, consumption dashboards, asset management and field-operations automation",
        badge: "6 specialisations",
        image: "/industries/energy-and-utilities.svg",
    },
    {
        name: "Manufacturing",
        description: "Shop-floor to supplier systems that give manufacturers live control over production, quality and upkeep.",
        builds: "Production planning, procurement, quality control and maintenance management",
        badge: "6 specialisations",
        image: "/industries/manufacturing.svg",
    },
    {
        name: "Construction",
        description: "Project and site software that keeps contractors' crews, materials and equipment on schedule.",
        builds: "Project workflows, workforce scheduling, equipment tracking and site monitoring",
        badge: "6 specialisations",
        image: "/industries/construction.svg",
    },
    {
        name: "Agriculture",
        description: "Agritech platforms that connect farms, equipment and buyers \u2014 from field data through to market.",
        builds: "Farm management, crop monitoring, farmer apps and agri marketplaces",
        badge: "6 specialisations",
        image: "/industries/agriculture.svg",
    },
    {
        name: "Aviation",
        description: "Operational systems for airlines, airports and maintenance teams where timing and safety leave no margin.",
        builds: "Passenger apps, maintenance tracking, cargo operations and crew workflows",
        badge: "6 specialisations",
        image: "/industries/aviation.svg",
    },
    {
        name: "Telecommunication",
        description: "Subscriber, billing and provisioning platforms for operators and ISPs serving millions of connections.",
        builds: "Network management, billing and subscriptions, service provisioning and support desks",
        badge: "6 specialisations",
        image: "/industries/telecommunication.svg",
    },
    {
        name: "Media and Entertainment",
        description: "Publishing, streaming and subscription platforms that carry content from production to paying audiences.",
        builds: "Streaming platforms, media asset management, subscriptions and audience analytics",
        badge: "6 specialisations",
        image: "/industries/media-and-entertainment.svg",
    },
    {
        name: "Gaming and Sports",
        description: "Platforms for game studios, esports organisers and sports clubs to run competitions and grow fan bases.",
        builds: "Tournament management, player management, fan apps and sports analytics",
        badge: "6 specialisations",
        image: "/industries/gaming-and-sports.svg",
    },
    {
        name: "Social Networking",
        description: "Community and creator platforms built for engagement, safe conversations and sustainable growth.",
        builds: "Messaging, feeds, content moderation tools and community management",
        badge: "6 specialisations",
        image: "/industries/social-networking.svg",
    },
    {
        name: "Fitness and Wellness",
        description: "Booking, membership and coaching software for gyms, studios, personal trainers and wellness centres.",
        builds: "Membership management, class scheduling, trainer apps and member engagement",
        badge: "6 specialisations",
        image: "/industries/fitness-and-wellness.svg",
    },
    {
        name: "Events and Conferences",
        description: "End-to-end event platforms for organisers \u2014 from registration and ticketing to the venue floor.",
        builds: "Ticketing, registration, attendee apps and event automation",
        badge: "6 specialisations",
        image: "/industries/events-and-conferences.svg",
    },
    {
        name: "Government and Public Sector",
        description: "Citizen-facing portals and back-office systems that make public services faster and more transparent.",
        builds: "Citizen portals, document management, service-delivery workflows and administrative automation",
        badge: "6 specialisations",
        image: "/industries/government-and-public-sector.svg",
    },
    {
        name: "SaaS",
        description: "Product engineering for software companies \u2014 multi-tenant platforms from first release to enterprise scale.",
        builds: "Multi-tenant architecture, billing, onboarding, product analytics and AI features",
        badge: "6 specialisations",
        image: "/industries/saas.svg",
    },
    {
        name: "Legal and Professional Services",
        description: "Client portals, matter management and practice systems for law firms, consultancies and accounting practices.",
        builds: "Client portals, matter and case management, document workflows and time and billing",
        badge: "7 specialisations",
        image: "/industries/legal-and-professional-services.svg",
    },
    {
        name: "Professional Training and Certification",
        description: "Training, assessment and credential platforms for certification bodies, training providers and corporate learning teams.",
        builds: "Training management, exam and assessment systems, credential issuance and learner and employer portals",
        badge: "7 specialisations",
        image: "/industries/professional-training-and-certification.svg",
    },
]

function FrameCorners() {
    return (
        <>
            <span className="absolute -top-1 -left-1 size-2 bg-[#A78BFA]" />
            <span className="absolute -top-1 -right-1 size-2 bg-[#A78BFA]" />
            <span className="absolute -bottom-1 -left-1 size-2 bg-[#A78BFA]" />
            <span className="absolute -right-1 -bottom-1 size-2 bg-[#A78BFA]" />
        </>
    )
}

function IndustryCard({ industry }: { industry: Industry }) {
    return (
        <article className="h-full w-full min-w-0">
            <div className="relative flex h-full flex-col border border-dashed border-[#A78BFA] bg-white">
                <FrameCorners />
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[#0E0B26]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={industry.image}
                        alt={industry.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col bg-white px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4">
                    <div className="flex items-start justify-between gap-3">
                        <h2 className="text-base font-medium tracking-tight text-[#171717] sm:text-lg">
                            {industry.name}
                        </h2>
                        <span className="shrink-0 pt-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#8a8a8a] sm:text-[11px]">
                            {industry.badge}
                        </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#616161]">
                        {industry.description}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#616161]">
                        <span className="font-medium text-[#171717]">We build:</span>{" "}
                        {industry.builds}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default function IndustriesSection() {
    return (
        <div className="relative isolate w-full">
            <CornerDotGrids corners="top" />
            <div className="relative z-0 mx-auto flex w-full max-w-6xl flex-col items-center bg-background px-4 py-10 sm:px-6 sm:py-16">
                <IconCraft icon={<BuildingsIcon />} />
                <div className="mt-5 w-full max-w-2xl">
                    <h1 className="text-center text-4xl font-medium tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
                        Industries We Serve
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-center text-base leading-6 text-[#6b6b6b] sm:mt-4 sm:text-lg sm:leading-7 lg:text-xl lg:leading-8">
                        Software shaped around the way your industry runs. Across 25 sectors, we design and engineer the
                        platforms, workflows, and AI-ready systems each business depends on.
                    </p>
                    {/* <div className="mt-5 flex items-center justify-center">
                        <CtaButton label="Build with us" icon={<CirclesThreePlusIcon />} href="mailto:info@qubenix.in" />
                    </div> */}
                </div>

                <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
                    {Industries.map((industry) => (
                        <IndustryCard key={industry.name} industry={industry} />
                    ))}
                </div>
            </div>
        </div>
    )
}
