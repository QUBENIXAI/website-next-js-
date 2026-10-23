import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function WhatWeProvide() {
    return (
        <div className="flex w-full flex-col items-center px-4 sm:px-6">
            <section className="flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-2xl sm:text-3xl">
                    What We Provide
                </h1>
                <p className="text-sm leading-6 text-[#616161] sm:text-base sm:leading-7">We offer a range of services to help you grow your business. We are a team of experts who are passionate about helping you grow your business.</p>
            </section>

            <div className="mt-8 flex w-full max-w-6xl flex-col items-center justify-center gap-4 sm:mt-10 md:flex-row md:flex-wrap">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </div>
    )
}