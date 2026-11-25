import Image from "next/image"

const COLS = 9
const ROWS = 6

// Scattered photo tiles, keyed by "column-row" (0-indexed)
const PHOTOS: Record<string, string> = {
    "2-0": "/swabalambi/founders.jpg",
    "6-0": "/swabalambi/women-founders.jpg",
    "0-1": "/swabalambi/industry-visit.jpg",
    "8-1": "/swabalambi/chai.jpg",
    "0-3": "/swabalambi/md.jpg",
    "8-4": "/swabalambi/startup-chai.jpg",
    "0-5": "/swabalambi/ideathon.jpg",
    "7-5": "/swabalambi/chairman.jpg",
    "4-5": "/swabalambi/chai-with.jpg",
}

export default function SwabalambiMosaic() {
    return (
        <div
            className="absolute inset-0 z-0 grid gap-1.5 p-3"
            style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
            }}
        >
            {Array.from({ length: COLS * ROWS }, (_, index) => {
                const col = index % COLS
                const row = Math.floor(index / COLS)
                const photo = PHOTOS[`${col}-${row}`]

                return (
                    <div
                        key={index}
                        style={{ gridColumn: col + 1, gridRow: row + 1 }}
                        className="relative overflow-hidden rounded-lg bg-[#ededed]"
                    >
                        {photo && (
                            <Image
                                src={photo}
                                alt=""
                                fill
                                sizes="64px"
                                className="object-cover"
                            />
                        )}
                    </div>
                )
            })}

            {/* Centered logo block */}
            <div
                style={{ gridColumn: "3 / span 5", gridRow: "2 / span 4" }}
                className="relative z-10 flex items-center justify-center rounded-xl bg-white"
            >
                <Image
                    src="/swabalambi/logo.png"
                    alt="Swabalambi Odisha"
                    width={528}
                    height={392}
                    sizes="320px"
                    className="h-auto w-[76%] object-contain"
                />
            </div>
        </div>
    )
}
