import Image from "next/image";
import {Container} from "@/components/common/container";
import {AspectRatio} from "@/components/ui/aspect-ratio";

type ProgramOption = {
    nameKo:  string;
    nameEn?: string;
    price:   string;
    priceEn?: string;
};

export interface ProgramDetailCardProps {
    tagLine?: string;
    titleKo: string;
    titleEn: string;
    duration: string;
    price: string;
    descriptionKo: string;
    descriptionEn: string;
    processKo: string;
    processKoDescription?: string
    processEn: string;
    image: {
        src: string;
        alt: string;
        overlayText?: string;
    };
    imagePosition?: "left" | "right";
    background?: "white" | "stone";
    options?: ProgramOption[];
}

export function ProgramDetailCard({
                                      tagLine,
                                      titleKo,
                                      titleEn,
                                      duration,
                                      price,
                                      descriptionKo,
                                      descriptionEn,
                                      processKo,
                                      processKoDescription,
                                      processEn,
                                      image,
                                      imagePosition = "right",
                                      background = "white",
                                      options
                                  }: ProgramDetailCardProps) {
    const isImageLeft = imagePosition === "left";
    const bgClass = background === "stone" ? "bg-stone-50" : "";

    const textContent = (
        <div className={`flex-1 max-w-2xl ml-auto text-center ${isImageLeft ? "lg:text-left" : "lg:text-right"} text-stone-800`}>
            {/* 타이틀 */}
            <div className={`inline-grid grid-cols-[auto_auto] gap-x-6 gap-y-3 ${isImageLeft ? "" : "ml-auto"}`}>
                <span className="text-2xl font-bold">{titleKo}</span>
                <span className="text-2xl font-bold">{titleEn}</span>
                <span className="text-base text-stone-600">{duration}</span>
                <span className="text-base text-stone-600">{price}</span>
            </div>

            {/* 설명 */}
            <div className="mt-12 space-y-6 text-sm leading-8 whitespace-pre-line">
                <p>{descriptionKo}</p>
                <p>{descriptionEn}</p>
            </div>

            {/* 프로세스 */}
            <div className="mt-12 space-y-6 text-sm leading-7">
                <div>
                    <p className="mb-2 font-bold">· 트리트먼트 순서</p>
                    <p>{processKo}</p>
                    {
                        processKoDescription &&
                        <p className="mt-4 text-xs">{processKoDescription}</p>
                    }
                </div>
                <div>
                    <p className="mb-2 font-bold">· Treatment Process</p>
                    <p>{processEn}</p>
                </div>
            </div>

            {/* 옵션 */}
            {options && options.length > 0 && (
                <div
                    className={`mt-12 font-bold space-y-3 text-sm ${
                        isImageLeft ? "text-left" : "text-right"
                    }`}
                >
                    {options.map((opt, i) => (
                        <div key={i} className="inline-grid grid-cols-[auto_auto] gap-x-6 gap-y-1">
                            <span className="whitespace-nowrap">+ {opt.nameKo}</span>
                            <span className="whitespace-nowrap">{opt.price}</span>
                            <span className="whitespace-nowrap">+ {opt.nameEn}</span>
                            <span className="whitespace-nowrap">{opt.priceEn ?? opt.price}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const imageContent = (
        <div className="w-full max-w-[460px] lg:shrink-0 mx-auto lg:mx-0">
            <AspectRatio ratio={3 / 4}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </AspectRatio>
        </div>
    );

    return (
        <section className={bgClass}>
            <Container>
                {tagLine && (
                    <p className={`pt-10 text-lg font-semibold text-stone-700 ${isImageLeft ? "text-left" : "text-right"}`}>
                        {tagLine}
                    </p>
                )}
                <div className={`flex flex-col lg:flex-row gap-16 ${tagLine ? "pt-4 pb-10" : "py-10"} items-start`}>
                    {isImageLeft ? (
                        <>
                            {imageContent}
                            {textContent}
                        </>
                    ) : (
                        <>
                            {textContent}
                            {imageContent}
                        </>
                    )}
                </div>
            </Container>
        </section>
    );
}
