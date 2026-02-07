import Image from "next/image";
import BaseLayout from "@/components/layout/base-layout";
import {Container} from "@/components/common/container";
import ContactCarousel from "@/components/contact/contact-carousel";
import KakaoMap from "@/components/contact/kakao-map";

export default function ContactPage() {

    return (
        <BaseLayout>
            <section className="relative min-h-screen flex items-end pb-36">
                {/* 배경 */}
                <Image
                    src="/images/contact/contact-hero.jpg"
                    alt="선예담 소개"
                    fill
                    priority
                    className="object-cover"
                />

                {/* 밝기 보정 */}
                <div className="absolute inset-0 bg-black/30"/>

                {/* 내용 */}
                <Container className="relative z-10">
                    <div className="flex">
                        {/* 오른쪽 고정 영역 */}
                        <div className="ml-auto max-w-xl text-right">
                            <h2 className="mb-6 font-semibold text-5xl text-stone-800 tracking-wide">Contact</h2>
                            <p className="text-xl text-stone-800 font-light leading-relaxed tracking-wide">
                                선물처럼 머무는 공간이 될 수 있기를 바라며,
                                <br/>
                                잔잔한 여운이 남는 선예에서 특별한 경험을 해보세요.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Container>
                <ContactCarousel/>
            </Container>

            <section className="py-20 bg-stone-50">
                <Container>
                    <div className="grid gap-16 md:grid-cols-2 items-center">

                        {/* 왼쪽 이미지 */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                            <Image
                                src="/images/contact/contact-info.jpg"
                                alt="선예담 공간"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* 오른쪽 정보 */}
                        <div className="text-stone-700 space-y-10">

                            {/* 영업시간 */}
                            <div className="space-y-6">
                                <div className="flex flex-row gap-2 items-baseline">
                                    <h3 className="text-3xl font-bold tracking-wide">영업 시간</h3>
                                    <span className="text-lg text-stone-700">Opening Hours</span>
                                </div>

                                <div className="space-y-3 text-lg">
                                    <div className="flex justify-between max-w-md">
                                        <span>월 MON – 금 FRI</span>
                                        <span>10:00 – 21:00</span>
                                    </div>
                                    <div className="flex justify-between max-w-md">
                                        <span>토 SAT – 일 SUN</span>
                                        <span>10:00 – 19:00</span>
                                    </div>
                                </div>

                                <p className="text-base text-stone-600 leading-relaxed">
                                    매월 첫 번째 일요일은 정기휴일입니다.<br/>
                                    We are closed on the first Sunday of each month.
                                </p>
                            </div>

                            {/* 예약문의 */}
                            <div className="space-y-6">
                                <div className="flex flex-row gap-2 items-baseline">
                                    <h3 className="text-3xl font-bold tracking-wide">예약 문의</h3>
                                    <span className="text-lg text-stone-700">Contact</span>
                                </div>

                                <div className="space-y-2 text-lg">
                                    <p>Tel: 02 – 6949 – 4907</p>
                                    <p>Email: sunyedam@sunyedamspa.co.kr</p>
                                </div>

                                {/* SNS 버튼 */}
                                <div className="flex gap-4 pt-2">
                                    {[
                                        { name: "WhatsApp", src: "/images/contact/whatsapp.png", href: "https://wa.me/821075394907" },
                                        { name: "LINE", src: "/images/contact/line.png", href: "https://line.me/ti/p/d3ZmatMVpA" },
                                        { name: "KAKAO", src: "/images/contact/kakao.png", href: "https://pf.kakao.com/_sZeYxj" },
                                        { name: "NAVER", src: "/images/contact/naver.jpeg", href: "https://talk.naver.com/W4HRH0" },
                                    ].map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-16 h-16 relative overflow-hidden border rounded-sm hover:opacity-80 transition"
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>

            <Container>
                <section className="py-20">
                    <div className="grid gap-16 md:grid-cols-2 items-start">

                        {/* 좌측 텍스트 */}
                        <div className="space-y-10 text-stone-700">

                            <div className="flex flex-row gap-2 items-baseline">
                                <h3 className="text-3xl font-bold tracking-wide">오시는 길</h3>
                                <span className="text-lg text-stone-700">Location</span>
                            </div>

                            <div className="space-y-6 text-lg leading-relaxed">
                                <div>
                                    <p>서울시 서초구 서초중앙로31길 18, 3F(그랑반포)</p>
                                    <p className="text-stone-500">
                                        3F, 18, Seochoungang-ro 31-gil, Seocho-gu, Seoul, Republic of Korea
                                    </p>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <p className="font-bold">주차</p>
                                    <div>
                                        <p className="text-stone-500">
                                            서울 서초구 서초중앙로31길 14-5 구립주차장<br/>
                                            (동근마을 공영주차장)
                                        </p>
                                        <p className="mt-2 text-stone-500 text-base">
                                            * 기본 2시간 무료 이용권 (프로그램에 따라 상이합니다)
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* 지도 */}
                        <div className="w-full h-auto overflow-hidden">
                            <KakaoMap/>
                        </div>
                    </div>
                </section>
            </Container>
        </BaseLayout>
    );
}
