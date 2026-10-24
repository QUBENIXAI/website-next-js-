"use client"

import Image from "next/image";

interface OurTeamProps {
    name: string;
    designation: string;
    description: string;
    profileImage: string;
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
    }
]

export default function OurTeam() {

}