import Image from "next/image";

export default function ProgramHero() {
    return (
        <section className="relative h-[70vh]">
            <Image
                src="/images/program/program-hero.jpg"
                alt="선예담 프로그램"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"/>
        </section>
    )
}
