import BaseLayout from "@/components/layout/base-layout";
import ProgramPhilosophy from "@/components/programs/program-philosophy";
import ProgramHeader from "@/components/programs/program-header";
import ProgramCourse from "@/components/programs/program-course";
import ProgramTabs from "@/components/programs/program-tabs";
import {ProgramDetailCard, ProgramDetailCardProps} from "@/components/programs/program-detail-card";
import ProgramHero from "@/components/programs/program-hero";
import type {Metadata} from "next";

const signaturePrograms: ProgramDetailCardProps[] = [
    {
        titleKo: "시그니처 선",
        titleEn: "Signature SUN",
        duration: "90min",
        price: "200,000 원(KRW)",
        descriptionKo: "등과 페이셜 케어 프로그램입니다. 일상에서 가장 긴장도가 높은 넥&숄더, 등 전체를 섬세하게 집중케어 해주어 \n 피로 회복을 도와줍니다. 건조하고 피부 밸런스가 무너진 피부에 즉각적인 보습을 채워주며, \n피부 스트레스를 낮추어 피부 장벽을 강화해줍니다.",
        descriptionEn: "Our back and facial care program provides precise attention to areas of heightened tension—the neck, shoulders, and entire back. This therapeutic treatment facilitates recovery from fatigue while delivering instant hydration to moisture-depleted, unbalanced skin, fortifying the skin barrier through stress reduction.",
        processKo: "풋 스크럽 - 웰컴 리추얼 - 등 테라피 - 클렌징 - 엔자이모 딥클렌징 - 탄력 리페어 마스크 - 넥&숄더 - 팔 - 페이셜 매뉴얼 테크닉 - 24h 딥 모이스춰 특수 마스크 - 두피 - 스트레칭",
        processEn: "Foot scrub – Welcome ritual – Back – Cleansing – Deep cleansing – Repair mask – Décolleté, neck & shoulders – Arms – Facial massage – Special mask (with 24-hour hydration) – Scalp – Stretching",
        image: { src: "/images/program/signature-sun.jpg", alt: "시그니처 선" },
        imagePosition: "right",
        background: "white",
    },
    {
        titleKo: "시그니처 예",
        titleEn: "Signature YE",
        duration: "120min",
        price: "280,000 원(KRW)",
        descriptionKo: "머리부터 발 끝까지 깊은 릴렉스를 경험하실 수 있는 페이셜과 바디 전신 프로그램입니다.\n바디 전신 트리트먼트로 순환을 도와주고 긴장을 완화해주어 가벼운 컨디션으로 회복을 도와줍니다.\n건조하고 피부 밸런스가 무너진 피부에 즉각적인 보습을 채워주며, 피부 스트레스를 낮춰주어 피부 장벽을 강화해줍니다.",
        descriptionEn: "Our holistic facial and body program offers profound relaxation from crown to toe. \nThis comprehensive body treatment enhances circulation and dissolves tension, restoring vitality and lightness to your being. \nIt replenishes moisture to dehydrated, imbalanced skin while strengthening the skin barrier through gentle stress relief.",
        processKo: "풋 스크럽 - 웰컴 리추얼 - 바디 전신 테라피 - 클렌징 - 엔자이모 딥클렌징 - 탄력 리페어 마스크 - 넥&숄더 - 팔 - 페이셜 매뉴얼 테크닉 - 24h 딥 모이스춰 특수 마스크 - 두피 - 스트레칭",
        processEn: "Foot scrub – Welcome ritual – Back – Front lower body – Abdomen (for women only) – Cleansing – Deep cleansing – Repair mask – Décolleté, neck & shoulders – Arms – Facial massage – Special mask (with 24-hour hydration) – Scalp – Stretching",
        image: { src: "/images/program/signature-ye.jpg", alt: "시그니처 예" },
        imagePosition: "left",
        background: "stone",
    },
    {
        titleKo: "시그니처 담",
        titleEn: "Signature DAM",
        duration: "150min",
        price: "380,000 원(KRW)",
        descriptionKo: "머리부터 발끝까지 최상의 프리미엄 케어를 경험하실 수 있는 페이셜, 바디 전신 프로그램입니다.\n바디에 핫스톤이 림프 순환과 이완을 도와 가벼운 컨디션으로 회복을 도와줍니다. \n캐비어, 콜라겐 관리로 피부에 활력과 광채를 주어 젊은 피부를 경험하실 수 있도록 도와줍니다.\n페이셜 라인을 정교하게 균형 잡아주는 '고운선 관리'로 정돈되고 리프팅 된 페이스 라인으로 가꿔줍니다.",
        descriptionEn: "Experience the pinnacle of premium care with our comprehensive facial and body program. \nWarm hot stones enhance lymphatic flow and deep relaxation, guiding your body to a state of renewed lightness. \nOur caviar and collagen therapy infuses the skin with vitality and luminosity, revealing its youthful essence. \nThe elegant contour care precisely harmonizes facial lines, sculpting a refined and lifted profile.",
        processKo: "풋 스크럽 - 전신 웰컴 리추얼 - 바디 후면 핫 스톤 - 바디 전신 테라피 - 클렌징 - 엔자이모 딥클렌징 - 캐비어 마스크 - 넥&숄더 - 팔 - 페이셜 '고운선' 매뉴얼 테크닉 - 캐비어 콜라겐 마스크 - 두피 - 스트레칭",
        processEn: "Foot scrub – Welcome ritual – Back (with hot stone) – Front lower body – Abdomen (for women only) – Cleansing – Deep cleansing – Caviar mask – Décolleté, neck & shoulders – Arms – Facial contour massage – Collagen velvet mask (with caviar collagen ampoule) – Scalp – Stretching",
        image: { src: "/images/program/signature-dam.jpg", alt: "시그니처 담" },
        imagePosition: "right",
        background: "white",
    },
];

export const metadata: Metadata = {
    title: "Signature Program | 선예담",
    description: "깊은 휴식을 전달하고자 선예담의 노화우와 정성을 담은 시그니처 트리트먼트입니다. 바다와 페이셜을 함께 받음으로써 깊이 있는 휴식을 제공하고 변화의 시너지를 높여줍니다. 긴장되어 있는 바디를 릴렉싱 해주고, 피부 고민을 맑고 건강한 피부로 케어해줍니다. 선예담만의 차별화된 시그니처 코스로 진행됩니다.",
};

export default function SignatureProgramPage() {
    return (
        <BaseLayout>
            <ProgramHero/>
            <ProgramTabs />
            <ProgramHeader title="SIGNATURE | 휴식의 깊이" subtitle="The depth of repose"/>
            <ProgramPhilosophy />
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
                        title: "Body Treatment",
                        description: "바디 트리트먼트, 몸과 마음을 가볍게 비우다.",
                        descriptionEn: "Let your body and mind float free.",
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

            {signaturePrograms.map((program, index) => (
                <ProgramDetailCard key={index} {...program} />
            ))}
        </BaseLayout>
    );
}
