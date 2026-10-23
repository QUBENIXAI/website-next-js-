import { GlobeAnalytics } from "../globe";

export default function Card1() {
    return (
        <div className="relative h-[350px] w-[350px] overflow-hidden bg-white p-4">
            <div className="relative z-10 flex max-w-[15rem] flex-col gap-2">
                <h1 className="text-2xl font-medium">Global Counseling</h1>
                <p className="text-sm text-[#616161]">
                    Expert guidance to help you navigate global opportunities, make informed decisions, and move forward with confidence.
                </p>
            </div>
            <div className="absolute -right-[120px] -bottom-[150px] w-[440px]">
                <GlobeAnalytics markers={[]} />
            </div>
        </div>
    );
}
