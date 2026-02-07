import Image from "next/image";
import {Container} from "@/components/common/container";
import BaseLayout from "@/components/layout/base-layout";
import {AspectRatio} from "@/components/ui/aspect-ratio";

export default function AboutPage() {
    return (
        <BaseLayout>
            {/*히어로 섹션 - 대표 사진 */}
            <section className="relative min-h-screen">
                <Image
                    src="/images/about/about-hero.jpg"
                    alt="선예담 소개"
                    fill
                    priority
                    className="object-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/150"/>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-2xl text-stone-800 font-light tracking-wide">
                            오래도록 여운이 남는 곳,
                        </p>
                    </div>
                </div>
            </section>

            <Container className="py-20 space-y-24">
                <article className="grid grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-base text-stone-700">
                            A Moment of Tranquility
                        </span>
                        <h3 className="mt-2 text-3xl font-light tracking-tight text-stone-800 mb-6">
                            고요한 여유의 시간
                        </h3>
                        <p className="text-base leading-7 text-stone-600 mb-4">
                            밖에서의 분주함 속에서 조급했던 마음을 내려놓고 <br/>
                            나에게 집중하며 여유를 갖는 시간
                        </p>
                        <p className="text-sm leading-6 text-stone-700">
                            Leave behind the world{"'"}s haste and urgency. <br/>
                            Find moments of serenity in self-reflection.
                        </p>
                    </div>
                    <AspectRatio ratio={16 / 12} className="bg-muted rounded-lg">
                        <Image
                            src={"/images/about/about-1.jpg"}
                            alt={"고요한 여유의 시간"}
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                </article>

                <article className="grid grid-cols-2 gap-10 items-center">
                    <AspectRatio ratio={16 / 12} className="bg-muted rounded-lg">
                        <Image
                            src={"/images/about/about-2.jpg"}
                            alt={"재충전을 위한 공간"}
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                    <div>
                        <span className="text-base text-stone-700">
                            A Sanctuary for Renewal
                        </span>
                        <h3 className="mt-2 text-3xl font-light tracking-tight text-stone-800 mb-6">
                            재충전을 위한 공간
                        </h3>
                        <p className="text-base leading-7 text-stone-600 mb-4">
                            지친 일상 속 몸과 마음에 환기가 필요할 때, <br/>
                            선예담에서 안식처가 되어드립니다.
                        </p>
                        <p className="text-sm leading-6 text-stone-700">
                            When your body and mind yearn for renewal amidst life{"'"}s demands, <br/>
                            Let Sunyedam be your sanctuary.
                        </p>
                    </div>
                </article>

                <div>
                    <div className="relative w-full h-[1200px]">
                        <Image
                            src="/images/about/about-3.jpg"
                            alt="선예담 공간"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>

                    <div className="text-center pt-20">
                        <span className="text-5xl text-stone-800">
                            Find Your Balance
                        </span>
                        <p className="py-10 text-base leading-8 text-stone-600">
                            선예담은 한옥의 고유한 아름다움을 현대적으로 재해석하여, 몸과 마음의 균형을 찾아가는 특별한 여정을 선사합니다. <br/>
                            선예담에서의 시간은 느림과 비움의 미학을 체험하는 순간으로, 분주한 도심 속에서 잔잔한 여백과 내면의 고요를 찾을 수 있는 공간입니다. <br/>
                            선예담만의 섬세한 프로그램은 각자의 고유한 아름다움과 깊이 있는 쉼을 채워갑니다.
                        </p>
                        <p className="text-sm leading-8 text-stone-600">
                            Sunyedam artfully reimagines the timeless elegance of traditional Korean
                            architecture, <br/>
                            guiding you on an extraordinary journey to harmony of body and mind. <br/>
                            Time at Sunyedam is an intimate encounter with the aesthetics of mindful slowness, <br/>
                            a haven where gentle stillness and inner peace flourish amid urban energy. <br/>
                            Our meticulously crafted programs nurture each guest{"'"}s unique beauty while providing
                            profound restoration.
                        </p>
                    </div>
                </div>
            </Container>
        </BaseLayout>
    )
}
