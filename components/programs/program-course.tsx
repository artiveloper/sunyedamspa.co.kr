import Image from "next/image"

export type CourseStep = {
    title: string
    description: string
    descriptionEn?: string
}

interface Props {
    title?: string
    steps: CourseStep[]
}

export default function ProgramCourse({
                                      title = "[COURSE]",
                                      steps,
                                  }: Props) {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
            {/* background */}
            <Image
                src="/images/program/program-intro-bg.jpg"
                alt="course background"
                fill
                priority
                className="object-cover object-center scale-105"
            />

            {/* white veil */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

            {/* content */}
            <div className="relative px-6 max-w-xl text-center text-neutral-700">
                <div className="space-y-10 leading-loose tracking-wide">

                    <p className="text-lg font-bold text-neutral-800">
                        {title}
                    </p>

                    {steps.map((step, i) => (
                        <div key={i} className="space-y-1">
                            <p className="text-lg font-bold text-neutral-800">
                                {step.title}
                            </p>
                            <p>{step.description}</p>
                            {step.descriptionEn && (
                                <p className="text-neutral-600">{step.descriptionEn}</p>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
