import {Button} from "@/components/ui/button";
import Link from "next/link";

interface ProgramButtonProps {
    href: string;
}

export default function ProgramButton({ href }: ProgramButtonProps) {
    return (
        <Button variant="outline" className="rounded-none border-stone-400 text-stone-600 hover:bg-stone-100 hover:text-stone-800" asChild>
            <Link href={href}>프로그램 알아보기</Link>
        </Button>
    )
}
