import Image from "next/image"
import ProgramButton from "@/components/main/program-button";

interface ProgramCardProps {
    label?: string
    title: string
    description: string
    image: {
        src: string
        width: number
        height: number
        alt: string
    }
    imagePosition?: "left" | "right"
    className?: string
    href: string
}

export function ProgramSummary({
    label = "Program",
    title,
    description,
    image,
    imagePosition = "right",
    className = "",
    href,
}: ProgramCardProps) {
    const textContent = (
        <div>
            <span className="text-sm uppercase tracking-[0.25em] text-stone-400">
                {label}
            </span>
            <h3 className="mt-2 text-3xl font-light tracking-tight text-stone-800 mb-8">
                {title}
            </h3>
            <p className="text-base leading-7 text-stone-600 mb-8">
                {description}
            </p>
            <ProgramButton href={href} />
        </div>
    )

    const imageContent = (
        <div className={image.height > image.width ? "flex justify-center" : ""}>
            <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className="object-cover"
            />
        </div>
    )

    return (
        <article className={`grid grid-cols-2 gap-10 items-center ${className}`}>
            {imagePosition === "left" ? (
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
        </article>
    )
}
