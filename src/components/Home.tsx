import Intro from "./Main";
import Links from "./Links";
import ScrollTransition from "./ScrollTransition";

export default function Home() {
    const components: JSX.Element[] = [<Intro />, <Links />];

    const scrollWrappedComponents = components.map((element, idx) => {
        return (
            <ScrollTransition key={idx} title={`${idx}`}>
                {element}
            </ScrollTransition>
        );
    });

    return <div className="bg-[#4D6995] pt-20">{scrollWrappedComponents}</div>;
}
