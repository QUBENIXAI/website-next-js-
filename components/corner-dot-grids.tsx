const cornerMasks = [
    { className: "top-0 left-0", mask: "radial-gradient(ellipse at 0% 0%, black 0%, black 36%, transparent 78%)" },
    { className: "top-0 right-0", mask: "radial-gradient(ellipse at 100% 0%, black 0%, black 36%, transparent 78%)" },
    { className: "bottom-0 left-0", mask: "radial-gradient(ellipse at 0% 100%, black 0%, black 36%, transparent 78%)" },
    { className: "bottom-0 right-0", mask: "radial-gradient(ellipse at 100% 100%, black 0%, black 36%, transparent 78%)" },
] as const

export default function CornerDotGrids() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {cornerMasks.map((corner) => (
                <div
                    key={corner.className}
                    className={`absolute size-64 sm:size-80 lg:size-96 ${corner.className}`}
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(23,23,23,0.5) 1.25px, transparent 1.4px)",
                        backgroundSize: "16px 16px",
                        maskImage: corner.mask,
                        WebkitMaskImage: corner.mask,
                    }}
                />
            ))}
        </div>
    )
}
