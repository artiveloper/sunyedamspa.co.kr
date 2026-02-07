import BaseLayout from "@/components/layout/base-layout";
import ProgramPhilosophy from "@/components/programs/program-philosophy";
import ProgramHeader from "@/components/programs/program-header";
import ProgramCourse from "@/components/programs/program-course";
import ProgramTabs from "@/components/programs/program-tabs";
import ProgramHero from "@/components/programs/program-hero";
import {ProgramDetailCard, ProgramDetailCardProps} from "@/components/programs/program-detail-card";
import type {Metadata} from "next";

const facialPrograms: ProgramDetailCardProps[] = [
    {
        tagLine: "Calming & Soothing",
        titleKo: "수水",
        titleEn: "SU",
        duration: "60min",
        price: "130,000 원(KRW)",
        descriptionKo:
            "민감하고 자극 받은 피부를 즉각적으로 진정시켜 주어,\n무너진 피부 장벽 강화를 도와주는 진정 수분 프로그램입니다.",
        descriptionEn:
            "A restorative hydration program that instantly soothes sensitive, irritated skin while fortifying compromised skin barriers.",
        processKo:
            "웰컴 리추얼 - 클렌징 - 엔자이모 딥클렌징 - 컴포트 수딩 마스크 - 넥&숄더 - 핸드 - 페이셜 매뉴얼 테크닉 - 카밍 특수 마스크 - 스트레칭",
        processEn:
            "Welcome ritual – Cleansing – Deep cleansing – Calming mask – Décolleté, neck & shoulders –  hand massage – Facial massage – soothing special mask – Stretching",
        image: {src: "/images/program/facial-su.jpg", alt: "수"},
        imagePosition: "right",
        background: "white",
    },
    {
        tagLine: "Moisturizing & Firming",
        titleKo: "윤潤",
        titleEn: "YUN",
        duration: "70min",
        price: "150,000 원(KRW)",
        descriptionKo:
            "피부 속 건조함의 근본을 케어하여 탈수 피부에 보습감을 주며,\n노화 지연을 도와주는 보습, 탄력 프로그램입니다.",
        descriptionEn:
            "A sophisticated hydration and firmness program that addresses deep dermal dehydration, infusing moisture while helping defer signs of aging.",
        processKo:
            "웰컴 리추얼 - 클렌징 - 엔자이모 딥클렌징 - 탄력 리페어 마스크 - 넥&숄더 - 팔 - 페이셜 매뉴얼 테크닉 - 24h 딥 모이스춰 특수 마스크 - 두피 - 스트레칭",
        processEn:
            "Welcome ritual – Cleansing – Deep cleansing – Moisture mask – Décolleté, neck & shoulders – Arms – Facial massage – 24-hour hydra special mask  – Scalp – Stretching",
        image: {src: "/images/program/facial-yun.jpg", alt: "윤"},
        imagePosition: "left",
        background: "stone",
        options: [
            {
                nameKo: "추가 고운선 얼굴",
                nameEn: "add Contour facial",
                price: "50,000 원",
                priceEn: "50,000 KRW"
            },
        ],
    },
    {
        tagLine: "Luminous & Brightening",
        titleKo: "백白",
        titleEn: "BAEK",
        duration: "80min",
        price: "180,000 원(KRW)",
        descriptionKo:
            "자극 없이 피부 상층부 죽은 각질 용해를 도와주어\n피부의 안색을 맑게 해주는 브라이트닝 광채 프로그램입니다.",
        descriptionEn:
            "An illuminating program that gently dissolves surface cellular buildup without irritation, unveiling clarity and luminous radiance.",
        processKo:
            "웰컴 리추얼 - 클렌징 - 브라이트닝 엔자이모 딥 클렌징 - 넥&숄더 - 브라이트닝 마스크 - 팔 - 페이셜 매뉴얼 테크닉 - 비타민 리포좀 특수 마스크 - 두피 - 스트레칭",
        processEn:
            "Welcome ritual – Cleansing – Brightening enzyme cleansing – Lightening mask – Décolleté, neck & shoulders – Arms – Facial massage – Liposomal Brightening special mask – Scalp – Stretching",
        image: {src: "/images/program/facial-baek.jpg", alt: "백"},
        imagePosition: "right",
        background: "white",
        options: [
            {
                nameKo: "추가 고운선 얼굴",
                nameEn: "add Contour facial",
                price: "50,000 원",
                priceEn: "50,000 KRW"
            },
        ],
    },
    {
        tagLine: "Collagen & Regenerating",
        titleKo: "옥玉",
        titleEn: "OK",
        duration: "90min",
        price: "250,000 원(KRW)",
        descriptionKo:
            "진행된 노화의 징후들을 부드럽게 하여 피부를 매끄럽게 해주며,\n건강하고 활력있는 피부로 도와주는 콜라겐 재생 프로그램입니다.",
        descriptionEn:
            "A collagen regeneration program that delicately smooths visible signs of aging while promoting skin vitality and renewed health.",
        processKo:
            "웰컴 리추얼 - 클렌징 - 엔자이모 딥클렌징 - 스템셀 핸드 스크럽 - 캐비어 리페어 마스크 - 넥&숄더 - 팔 - 페이셜 매뉴얼 테크닉 - 캐비어 콜라겐 마스크 - 풋&레그 - 두피 - 스트레칭",
        processEn:
            "Welcome ritual – Cleansing – Deep cleansing – hand scrub - Collagen mask – Décolleté, neck & shoulders – Arms – Facial massage – Caviar collagen mask –  Foot&Leg - Scalp – Stretching",
        image: {src: "/images/program/facial-ok.jpg", alt: "옥"},
        imagePosition: "left",
        background: "stone",
        options: [
            {
                nameKo: "추가 고운선 얼굴",
                nameEn: "add Contour facial",
                price: "50,000 원",
                priceEn: "50,000 KRW"
            },
        ],
    },
];

export const metadata: Metadata = {
    title: "Facial Program | 선예담",
    description: "선예담만의 섬세한 수기 테라피와 제품의 향 테라피가 함께하여 심리적인 휴식까지 제공합니다. 피부의 무너진 밸러스를 맞춰 주어 근본적인 피부 고민을 개선하여 생기있는 피부와 매끈한 페이스 라인으로 가꿔줍니다. 본연의 아름다움을 이끌어 자연스러운 미를 선사합니다.",
};

export default function FacialProgramPage() {
    return (
        <BaseLayout>
            <ProgramHero/>
            <ProgramTabs/>
            <ProgramHeader title="FACIAL | 균형과 변화" subtitle="Harmony & transformation"/>
            <ProgramPhilosophy/>
            <ProgramCourse
                steps={[
                    {
                        title: "Welcome Tea",
                        description: "계절 웰컴티, 마음을 가라앉히다.",
                        descriptionEn: "Still your mind.",
                    },
                    {
                        title: "Welcome Ritual",
                        description: "웰컴 리추얼, 멈추어 있던 감각을 깨우다.",
                        descriptionEn: "Awaken your dormant senses.",
                    },
                    {
                        title: "Facial Treatment",
                        description: "페이셜 트리트먼트, 빛을 채우다.",
                        descriptionEn: "Embrace the light.",
                    },
                    {
                        title: "Tea & Dessert",
                        description: "차와 다식, 순간에 집중하다.",
                        descriptionEn: "Dwell in the present moment.",
                    },
                ]}
            />

            {facialPrograms.map((program, index) => (
                <ProgramDetailCard key={index} {...program} />
            ))}
        </BaseLayout>
    );
}
