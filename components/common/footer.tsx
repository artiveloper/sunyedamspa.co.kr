import Link from "next/link";
import { PATHS } from "@/constants/path";
import Image from "next/image";

export default function FooterContact() {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer className="w-full bg-stone-100 text-stone-600">
            <div className="mx-auto max-w-5xl px-6 py-10 text-center space-y-6">
                {/* SNS Icons */}
                <div className="flex items-center justify-center gap-8">
                    <a
                        href="https://www.instagram.com/sunyedam_spa"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <Image
                            src="/images/footer/instagram.png"
                            alt="Instagram"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a
                        href="https://blog.naver.com/sunyedamspa"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        aria-label="Naver"
                    >
                        <Image
                            src="/images/footer/naver.png"
                            alt="Naver"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a
                        href="https://pf.kakao.com/_sZeYxj"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        aria-label="Kakao"
                    >
                        <Image
                            src="/images/footer/kakao.png"
                            alt="Kakao"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>

                {/* Menu */}
                <nav className="flex justify-center gap-10 text-sm">
                    <Link href={PATHS.ABOUT} className="text-stone-600 hover:text-stone-800 transition-colors">
                        About
                    </Link>
                    <Link href={PATHS.PROGRAMS.ROOT} className="text-stone-600 hover:text-stone-800 transition-colors">
                        Program
                    </Link>
                    <Link href={PATHS.CONTACT} className="text-stone-600 hover:text-stone-800 transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Divider */}
                <div className="w-16 h-px bg-stone-300 mx-auto" />

                {/* Info */}
                <div className="space-y-1 text-sm leading-relaxed text-stone-500">
                    <p>대표 : 김민주</p>
                    <p>서울 서초구 서초중앙로31길 18 그랑바프 3층 선예담스파</p>
                    <p>02-6949-4907</p>
                </div>

                {/* Copyright */}
                <p className="text-xs text-stone-600 tracking-wide">
                    © {year} Sunyedam Spa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
