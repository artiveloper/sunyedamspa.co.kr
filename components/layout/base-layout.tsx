import FooterContact from "@/components/common/footer";
import {Header} from "@/components/common/header";

export default function BaseLayout(props: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            <main className="text-stone-800">
                {props.children}
            </main>
            <FooterContact/>
        </>
    )
}
