"use client"

import {useEffect, useState} from "react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        image: "/images/contact/contact-1.jpg",
        alt: "선예담 공간 1",
    },
    {
        image: "/images/contact/contact-2.jpg",
        alt: "선예담 공간 2",
    },
    {
        image: "/images/contact/contact-3.jpg",
        alt: "선예담 공간 3",
    },
    {
        image: "/images/contact/contact-4.jpg",
        alt: "선예담 공간 4",
    },
    {
        image: "/images/contact/contact-5.jpg",
        alt: "선예담 공간 5",
    },
    {
        image: "/images/contact/contact-6.jpg",
        alt: "선예담 공간 6",
    },
]

export default function ContactCarousel() {
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
        <Carousel
            setApi={setApi}
            className="my-20 w-full px-20"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent className="ml-0">
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="pl-0">
                        <AspectRatio ratio={16 / 12} className="bg-muted rounded-lg">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>

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
    )
}
