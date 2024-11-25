import React from "react";
interface TechCardProps {
    techName: string;
    experienceTime: string;
    body: JSX.Element;
}

// export default function TechCard(props: TechCardProps) {
const TechCard = React.forwardRef(function TechCard(props: TechCardProps, ref: React.Ref<HTMLDivElement>) {
    // a single card for information on a skill
    return (
        <div ref={ref} className="border border-[#051C2C] rounded-lg shadow-lg bg-[#3F708F] p-2 m-8">
            <p className="text-xl lg:text-4xl bg-[#8ca9bc] rounded-md p-2 w-fit">
                {props.techName}
            </p>
            <p className="text-lg lg:text-2xl italic">{`Experience: ${props.experienceTime}`}</p>
            {props.body}
        </div>
    );
});
export default TechCard;
