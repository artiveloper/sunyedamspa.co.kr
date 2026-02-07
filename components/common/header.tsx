"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"
import Link from "next/link"
import Image from "next/image"
import { PATHS } from "@/constants/path"

export function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    /* ---------------- scroll detect ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight
            setScrolled(window.scrollY > heroHeight - 100)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    /* ---------------- active check ---------------- */
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    /* ---------------- nav style ---------------- */
    const navStyle = (href: string) => {
        const active = isActive(href)

        const base =
            "relative font-semibold transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"

        if (scrolled) {
            return active
                ? `${base} text-stone-900 after:w-full after:bg-stone-900`
                : `${base} text-stone-500 hover:text-stone-900 after:bg-stone-900`
        }

        return active
            ? `${base} text-white after:w-full after:bg-white`
            : `${base} text-white/80 hover:text-white after:bg-white`
    }

    /* ---------------- mobile link ---------------- */
    const mobileNavStyle = (href: string) => {
        const active = isActive(href)
        return `font-medium ${
            active ? "text-stone-900" : "text-stone-500"
        }`
    }

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur border-b border-stone-200"
                    : "bg-transparent"
            }`}
        >
            <Container className="flex h-16 items-center justify-between">
                {/* logo */}
                <Link href={PATHS.HOME}>
                    <Image
                        src="/images/logo.png"
                        alt="선예담"
                        width={60}
                        height={40}
                        className={`transition-all duration-300 ${
                            scrolled ? "" : "invert"
                        }`}
                    />
                </Link>

                {/* desktop nav */}
                <nav className="hidden md:flex gap-10 text-md">
                    <Link href={PATHS.ABOUT} className={navStyle(PATHS.ABOUT)}>
                        About
                    </Link>
                    <Link href={PATHS.PROGRAMS.ROOT} className={navStyle(PATHS.PROGRAMS.ROOT)}>
                        Program
                    </Link>
                    <Link href={PATHS.CONTACT} className={navStyle(PATHS.CONTACT)}>
                        Contact
                    </Link>
                </nav>

                {/* mobile button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={`md:hidden transition-colors duration-300 ${
                        scrolled ? "text-stone-800" : "text-white"
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </Button>
            </Container>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden border-t border-stone-200 bg-white">
                    <div className="flex flex-col gap-5 p-6 text-base">
                        <Link
                            href={PATHS.ABOUT}
                            className={mobileNavStyle(PATHS.ABOUT)}
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href={PATHS.PROGRAMS.ROOT}
                            className={mobileNavStyle(PATHS.PROGRAMS.ROOT)}
                            onClick={() => setOpen(false)}
                        >
                            Program
                        </Link>
                        <Link
                            href={PATHS.CONTACT}
                            className={mobileNavStyle(PATHS.CONTACT)}
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
