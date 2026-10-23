import Card1 from "./Card1";
import Card2 from "./Card2";

export default function WhatWeProvide() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center  text-center">
                <h1 className="text-4xl">What We Provide</h1>
                <p className="text-sm text-[#616161]">We offer a range of services to help you grow your business. We are a team of experts who are passionate about helping you grow your business.</p>
            </section>

            <div className="flex items-center justify-center gap-4 mt-10">
                <Card1 />
                <Card2 />

            </div>
        </div>
    )
}