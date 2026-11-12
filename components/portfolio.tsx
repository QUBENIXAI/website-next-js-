"use client"

import {motion} from 'motion/react'
import IconCraft from './icon-crafts/main'
import { StackSimpleIcon } from '@phosphor-icons/react'

const Products = [
    {
        image: "",
        title: "",
        description: "",
        productLink: "",
    },
    {
        image: "",
        title: "",
        description: "",
        productLink: "",
    },
    {
        image: "",
        title: "",
        description: "",
        productLink: "",
    },
    {
        image: "",
        title: "",
        description: "",
        productLink: "",
    },
]

const Works = [
    {

    }
]

export default function Portfolio() {
    return (
        <main>
            <section className="flex w-full flex-col items-center gap-4 sm:py-16 text-center">
                    <div className="flex flex-col items-center gap-5">
                        <IconCraft icon={<StackSimpleIcon/>} />
                        <h1 className="mb-2 text-4xl font-medium leading-[1.05] tracking-tight text-black sm:text-5xl xl:text-6xl">
                            Selected Works
                        </h1>
                    </div>

                    <p className="max-w-xl text-base leading-6 text-[#616161] sm:text-lg sm:leading-7 ">
                        A collection of products, experiments, and digital experiences
                        <br className="hidden sm:block" />
                        We have designed and built, both independently and in collaboration with clients.
                    </p>
                </section>
        </main>
    )
}