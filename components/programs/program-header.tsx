import {Container} from "@/components/common/container";
import {JSX} from "react";

interface Props {
    title: string;
    subtitle: string;
}

export default function ProgramHeader({title, subtitle}: Props): JSX.Element {
    return (
        <section className="bg-white">
            <Container className="py-20">
                <div className="text-center">
                        <span className="text-base text-stone-600 tracking-widest">
                            {subtitle}
                        </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-800">
                        {title}
                    </h2>
                </div>
            </Container>
        </section>
    )
}
