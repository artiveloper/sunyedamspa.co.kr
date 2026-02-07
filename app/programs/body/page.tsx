import BaseLayout from "@/components/layout/base-layout";
import ProgramPhilosophy from "@/components/programs/program-philosophy";
import ProgramHeader from "@/components/programs/program-header";
import ProgramCourse from "@/components/programs/program-course";
import ProgramTabs from "@/components/programs/program-tabs";
import ProgramHero from "@/components/programs/program-hero";
import {ProgramDetailCard, ProgramDetailCardProps} from "@/components/programs/program-detail-card";
import type {Metadata} from "next";

const bodyPrograms: ProgramDetailCardProps[] = [
    {
        titleKo: "온기",
        titleEn: "ONGI",
        duration: "70min",
        price: "150,000 원(KRW)",
        descriptionKo:
            "바디 후면과 넥&숄더 집중 케어 프로그램입니다.\n전문 테라피스트가 개인 맞춤형 케어를 제공하여 긴장을 완화하고 순환을 도와줍니다.\n긴장되어 있는 바디를 풀어주어, 가벼운 바디 컨디션으로 회복을 선사합니다.",
        descriptionEn:
            "A focused therapeutic program for the posterior body, neck, and shoulders. \nOur expert therapists deliver personalized care to dissolve tension and enhance vital circulation. \nThis treatment releases deep-seated tension, restoring your body to a state of renewed lightness.",
        processKo:
            "풋 스크럽 - 전신 웰컴 리추얼 - 등 - 하체 후면 - 넥&숄더 - 스트레칭",
        processEn:
            "Foot scrub – Welcome ritual – Back – Back lower body – Décolleté, neck &shoulders – Stretching",
        image: { src: "/images/program/body-ongi-70.jpg", alt: "온기 70분" },
        imagePosition: "right",
        background: "white",
        options: [
            {
                nameKo: "추가 산전관리",
                nameEn: "add Prenatal care",
                price: "30,000 원",
                priceEn: "30,000 KRW"
            },
        ],
    },
    {
        titleKo: "온기",
        titleEn: "ONGI",
        duration: "90min",
        price: "200,000 원(KRW)",
        descriptionKo:
            "바디 전신 케어 프로그램입니다.\n전문 테라피스트가 개인 맞춤형 케어를 제공하여 긴장을 완화하고 순환을 도와줍니다.\n긴장되어 있는 바디를 풀어주어, 가벼운 바디 컨디션으로 회복을 선사합니다.",
        descriptionEn:
            "A comprehensive full-body therapeutic program.\nOur expert therapists provide bespoke care to release tension and enhance vital circulation.\nThis treatment dissolves bodily tension, guiding you to a state of renewed vitality.",
        processKo:
            "풋 스크럽 - 전신 웰컴 리추얼 - 등 - 하체 후면 - 하체 전면 - 복부 - 넥&숄더 - 스트레칭",
        processKoDescription:
            "* 복부 케어는 여성만 진행됩니다.",
        processEn:
            "Foot scrub – Welcome ritual – Back – Back lower body – Front lower body – Abdomen (for women only) – Arms – Décolleté, neck&shoulders – Scalp – Stretching",
        image: { src: "/images/program/body-ongi-90.jpg", alt: "온기 90분" },
        imagePosition: "left",
        background: "stone",
        options: [
            {
                nameKo: "추가 산전관리",
                nameEn: "add Prenatal care",
                price: "30,000 원",
                priceEn: "30,000 KRW"
            },
        ],
    },
    {
        titleKo: "정화",
        titleEn: "JEONGHWA",
        duration: "120min",
        price: "290,000 원(KRW)",
        descriptionKo:
            "선예담만의 특별한 레시피의 바디 토탈 케어로 전신을 생기있고 부드럽게 해줍니다.\n특수 스크럽으로 상층부 각질을 관리하여 맑고 벨벳처럼 부드러운 피부결을 선사합니다.\n전진 마스크로 슬리밍 효과와 함께 탄력있는 바디로 가꿔줍니다.\n바디 전신 케어로 긴장을 완화하고 순환을 도와주어 가벼운 컨디션으로 회복을 도와줍니다.",
        descriptionEn:
            "Sunyedam's signature total body care treatment revitalizes and softens the entire body with our proprietary therapeutic blend.\nOur specialized scrub treatment refines surface texture and releases negative ions, revealing pristine, velvet-smooth skin.\nA full-body masque delivers sculpting effects while enhancing overall firmness.\nThis complete care experience dissolves tension and amplifies circulation, restoring the body to a state of lightness.",
        processKo:
            "전신 스크럽 - 전신 마스크 - 전신 웰컴 리추얼 - 등 - 하체 전,후면 - 넥&숄더 - 두피 - 스트레칭",
        processEn:
            "Body scrub – Body Mask -  Welcome ritual – Back – Back lower body – Front lower body – Décolleté, neck &shoulders – Stretching",
        image: { src: "/images/program/body-jeonghwa.jpg", alt: "정화" },
        imagePosition: "right",
        background: "white",
    },
];

export const metadata: Metadata = {
    title: "Body Program | 선예담",
    description: "개인마다 몸의 체형이나 컨디션이 다르기 때문에 그에 맞는 개별 맞춤 테라피를 진행합니다. 긴장되어 경직된 바디의 릴렉싱을 돕고, 원활한 순환을 유도하여 피로하고 무거웠던 바디에 활력을 줍니다.",
};

export default function BodyProgramPage() {
    return (
        <BaseLayout>
            <ProgramHero/>
            <ProgramTabs />
            <ProgramHeader title="BODY | 재충전의 가치" subtitle="The essence of renewal"/>
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
                        title: "Tea & Dessert",
                        description: "차와 다식, 순간에 집중하다.",
                        descriptionEn: "Dwell in the present moment.",
                    },
                ]}
            />

            {bodyPrograms.map((program, index) => (
                <ProgramDetailCard key={index} {...program} />
            ))}
        </BaseLayout>
    );
}
