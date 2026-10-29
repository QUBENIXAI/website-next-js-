export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-full flex-1 flex-col bg-[#f4f4f4]">
            {children}
            <footer className="px-6 py-10 text-center text-sm text-[#8a8a8a]">2026. All Rights Reserved</footer>
        </div>
    )
}
