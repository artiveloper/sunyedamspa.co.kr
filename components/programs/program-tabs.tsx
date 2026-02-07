"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx"
import { PATHS } from "@/constants/path"

const tabs = [
    {label: "Signature", href: PATHS.PROGRAMS.SIGNATURE},
    {label: "Facial", href: PATHS.PROGRAMS.FACIAL},
    {label: "Body", href: PATHS.PROGRAMS.BODY},
]

export default function ProgramTabs() {
    const pathname = usePathname()

    return (
        <div className="sticky top-0 z-100 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl grid grid-cols-3 text-center">

                {tabs.map(tab => {
                    const active = pathname.startsWith(tab.href)

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={clsx(
                                "py-5 text-lg tracking-wide transition-colors",
                                active
                                    ? "text-stone-900 font-semibold"
                                    : "text-stone-400 hover:text-stone-700"
                            )}
                        >
                            {tab.label}
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}
