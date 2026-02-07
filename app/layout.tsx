import type {Metadata} from "next";
import {Nanum_Myeongjo} from "next/font/google";
import "./globals.css";

const nanumMyeongjo = Nanum_Myeongjo({
    weight: ["400", "700", "800"],
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
})

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": "https://www.google.com/maps/place/?q=place_id:g/11kp9xk8bw",
    name: "선예담",
    alternateName: "Sunyedam Spa",

    url: "https://sunyedamspa.co.kr",
    image: "https://sunyedamspa.co.kr/images/logo.jpg",
    logo: "https://sunyedamspa.co.kr/images/logo.jpg",

    description:
        "반포 프라이빗 한옥 스파 선예담. 피부관리, 바디관리, 웨딩케어 전문 에스테틱.",

    telephone: "+82269494907",
    priceRange: "130,000원 ~ 380,000원",
    paymentAccepted: "Cash, Credit Card, KakaoPay, NaverPay",
    currenciesAccepted: "KRW",

    address: {
        "@type": "PostalAddress",
        streetAddress: "서울시 서초구 서초중앙로31길 18",
        addressLocality: "서초구",
        addressRegion: "서울",
        postalCode: "06593",
        addressCountry: "KR"
    },

    geo: {
        "@type": "GeoCoordinates",
        latitude: 37.499815,
        longitude: 127.010372
    },

    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            opens: "10:00",
            closes: "21:00"
        }
    ],

    sameAs: [
        "https://map.naver.com/p/entry/place/1963469522",
        "https://www.instagram.com/sunyedam_spa",
        "https://pf.kakao.com/_sZeYxj",
        "https://maps.google.com/?cid=0x7beb06f1675bbaec",
    ],
    areaServed: "Seocho-gu, Banpo-dong, Seoul",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "스파 프로그램",
        itemListElement: [
            {
                "@type": "Offer",
                url: "https://sunyedamspa.co.kr/programs/signature",
                itemOffered: {
                    "@type": "Service",
                    name: "시그니처 프로그램",
                }
            },
            {
                "@type": "Offer",
                url: "https://sunyedamspa.co.kr/programs/facial",
                itemOffered: {
                    "@type": "Service",
                    name: "페이셜 프로그램",
                }
            },
            {
                "@type": "Offer",
                url: "https://sunyedamspa.co.kr/programs/body",
                itemOffered: {
                    "@type": "Service",
                    name: "바디 프로그램",
                }
            }
        ]
    }
};

export const metadata: Metadata = {
    title: "선예담 | 반포 한옥 스파 · 프라이빗 피부관리 & 바디케어",
    description: "‘선을 예쁘게 담는 곳’ 선예담 스파입니다. 도심 속 한옥 스파에서 엄선된 티와 최고의 휴식을 담아냅니다.",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://sunyedamspa.co.kr",
        siteName: "선예담",
        title: "반포 프라이빗 스파 선예담",
        description: "‘선을 예쁘게 담는 곳’ 선예담 스파입니다. 도심 속 한옥 스파에서 엄선된 티와 최고의 휴식을 담아냅니다.",
        images: [
            {
                url: "/images/logo.jpg",   // 1200x630 권장
                width: 1200,
                height: 630,
                alt: "선예담 한옥 스파",
            },
        ],
    },
    alternates: {
        canonical: "https://sunyedamspa.co.kr",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={nanumMyeongjo.variable}>
        <body className="font-serif antialiased">
        {children}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        </body>
        </html>
    );
}
