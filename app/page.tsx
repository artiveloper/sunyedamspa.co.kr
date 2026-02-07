import {Hero} from "@/components/main/hero"
import {Container} from "@/components/common/container";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Skeleton} from "@/components/ui/skeleton";
import {ProgramSummary} from "@/components/main/program-summary";
import BaseLayout from "@/components/layout/base-layout";
import {PATHS} from "@/constants/path";
import Link from "next/link";

export default function Page() {
    return (
        <BaseLayout>
            {/*히어로 섹션 - 대표 사진 슬라이드 */}
            <Hero/>

            {/*인트로*/}
            <section className="bg-stone-50">
                <Container className="py-30">
                    <span className="text-2xl">Find Your Balance</span>
                    <h2 className="mt-3 text-5xl font-bold">나를 위한 안식처</h2>

                    <div className="mt-16 flex">
                        <div className="ml-auto max-w-3/5">
                            <p className="text-base leading-8 text-stone-600">
                                선예담은 한옥의 고유한 아름다움을 현대적으로 재해석하여, 몸과 마음의 균형을 찾아가는 특별한 여정을 선사합니다.
                                선예담에서의 시간은 느림과 비움의 미학을 체험하는 순간으로,
                                분주한 도심 속에서 잔잔한 여백과 내면의 고요를 찾을 수 있는 공간입니다.
                                선예담만의 섬세한 프로그램은 각자의 고유한 아름다움과 깊이 있는 쉼을 채워갑니다.
                            </p>

                            <Button variant="outline" className="mt-8 rounded-none border-stone-400 text-stone-600 hover:bg-stone-100 hover:text-stone-800">
                                <Link href={PATHS.ABOUT}>More View</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/*주요 프로그램*/}
            <section className="bg-white">
                <Container className="py-20 space-y-6 -mb-[250px]">
                    <ProgramSummary
                        title="휴식의 깊이 | Signature"
                        description="깊은 휴식을 전달하고자 선예담의 노하우와 정성을 담은 시그니처 트리트먼트입니다. 바디와 페이셜을 함께 받음으로써 깊이 있는 휴식을 제공하고 변화의 시너지를 높여줍니다. 긴장되어 있는 바디를 릴렉싱 해주고, 피부 고민을 맑고 건강한 피부로 케어해줍니다. 선예담만의 차별화된 시그니처 코스로 진행됩니다."
                        image={{ src: "/images/main/width2.jpg", width: 570, height: 380, alt: "시그니처 프로그램" }}
                        href={PATHS.PROGRAMS.SIGNATURE}
                    />

                    <ProgramSummary
                        title="균형과 변화 | Facial"
                        description="선예담만의 섬세한 수기 테라피와 제품의 향 테라피가 함께하여 심리적인 휴식까지 제공합니다. 피부의 무너진 밸런스를 맞춰 주어 근본적인 피부 고민을 개선하여 생기있는 피부와 매끈한 페이스 라인으로 가꿔줍니다. 본연의 아름다움을 이끌어 자연스러운 미를 선사합니다."
                        image={{ src: "/images/main/height1.jpg", width: 380, height: 550, alt: "페이셜 프로그램" }}
                        imagePosition="left"
                        className="-translate-y-[50px]"
                        href={PATHS.PROGRAMS.FACIAL}
                    />

                    <ProgramSummary
                        title="재충전의 가치 | Body"
                        description="개인마다 몸의 체형이나 컨디션이 다르기 때문에 그에 맞는 개별 맞춤 테라피를 진행합니다. 긴장되어 경직된 바디의 릴렉싱을 돕고, 원활한 순환을 유도하여 피로하고 무거웠던 바디에 활력을 줍니다. 지친 일상 속 재충전을 선물합니다."
                        image={{ src: "/images/main/height2.jpg", width: 450, height: 600, alt: "바디 프로그램" }}
                        className="-translate-y-[150px]"
                        href={PATHS.PROGRAMS.BODY}
                    />

                    <div className="grid grid-cols-2 gap-10 items-center -translate-y-[250px]">
                        <Image src="/images/main/width1.jpg" width="570" height={380} alt="선예담 공간" className="object-cover"/>
                    </div>
                </Container>
            </section>

            {/*인스타그램*/}
            <section className="bg-stone-50">
                <Container className="py-20 space-y-10">
                    <h2 className="text-2xl font-bold tracking-wide text-center text-stone-700">Instagram</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <Skeleton className="h-[300px] w-full rounded-none bg-stone-200" />
                        <Skeleton className="h-[300px] w-full rounded-none bg-stone-200" />
                        <Skeleton className="h-[300px] w-full rounded-none bg-stone-200" />
                        <Skeleton className="h-[300px] w-full rounded-none bg-stone-200" />
                    </div>
                </Container>
            </section>
        </BaseLayout>
    )
}
