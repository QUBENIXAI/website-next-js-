"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowBendUpRightIcon } from '@phosphor-icons/react'
import CtaButton from '../cta-button';

interface GridItem {
    type: 'empty' | 'image';
    src?: string;
    alt?: string;
}

const gridItems: GridItem[] = [
    // Row 0 (partially cut off at top edge)
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
    // Row 1
    { type: 'empty' },
    { type: 'image', src: '/team/Bharat.png', alt: 'Bharat' },
    { type: 'empty' },
    // Row 2
    { type: 'image', src: '/team/Surva.png', alt: 'Surva' },
    { type: 'empty' },
    { type: 'image', src: '/team/Akash.png', alt: 'Akash' },
    // Row 3
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
    // Row 4 (partially visible above headline)
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
]

export default function TeamBrief() {
    return (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[1rem] bg-white px-6 sm:px-7">
            {/* Top Grid of Tiles with overflow-hidden and -mt to achieve top-edge clipping */}
            <div className="relative w-full overflow-hidden pt-1">
                <GridVisual />
            </div>

            {/* Bottom Content: Headline and Button */}
            <div className="relative z-10 mt-6 flex flex-col items-start gap-4 pt-2 mb-5">
                <p className="text-[15px] sm:text-base font-medium text-black leading-snug">
                    The Architects behind the Scalable Solutions
                </p>

                {/* <Link
                    href="/our-team"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#036DFF] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#005bd5] active:scale-[0.98]"
                >
                    <span>Meet the Whole Team</span>
                    <ArrowBendUpRightIcon size={16} weight="bold" />
                </Link> */}
                <CtaButton label='Meet the Whole Team' icon={<ArrowBendUpRightIcon />}/>
            </div>
        </div>
    )
}

const GridVisual = () => {
    const emptyTileStyle =
        "w-full aspect-square rounded-[14px] sm:rounded-[14px] bg-white shadow-[inset_0_4px_10px_rgba(0,0,0,0.12),inset_0_-2px_6px_rgba(0,0,0,0.04)] border border-black/5 transition-transform duration-200 hover:scale-[1.02]";

    const imageTileStyle =
        "w-full aspect-square rounded-[14px] sm:rounded-[14px] overflow-hidden relative shadow-sm border border-black/5 bg-neutral-100 transition-transform duration-200 hover:scale-[1.03]";

    return (
        <div className="-mt-8 sm:-mt-10 grid grid-cols-3 gap-3 sm:gap-3.5 w-full">
            {gridItems.map((item, index) => {
                if (item.type === 'empty' || !item.src) {
                    return <div key={index} className={emptyTileStyle} />
                }

                return (
                    <div key={index} className={imageTileStyle}>
                        <Image
                            src={item.src}
                            alt={item.alt || 'Team member'}
                            fill
                            sizes="(max-width: 768px) 33vw, 160px"
                            className="object-cover"
                        />
                    </div>
                )
            })}
        </div>
    )
}
