"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import {useEffect, useState} from "react"
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        image: "/images/main/main-hero-1.jpg",
        alt: "선예담 공간 1",
    },
    {
        image: "/images/main/main-hero-2.jpg",
        alt: "선예담 공간 2",
    },
]

export function Hero() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section className="relative min-h-screen">
            <Carousel
                setApi={setApi}
                className="w-full h-screen"
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="h-screen ml-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="h-screen pl-0">
                            <div className="relative w-full h-full">
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10"/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center space-y-6">
                        <p className="text-5xl text-stone-800 font-light tracking-wide">
                            Recharge yourself
                        </p>
                        <h1 className="text-2xl text-stone-800/90 font-light">
                            오감에 집중하는 시간
                        </h1>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                current === index
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/70"
                            }`}
                            aria-label={`슬라이드 ${index + 1}로 이동`}
                        />
                    ))}
                </div>
            </Carousel>
        </section>
    )
}
