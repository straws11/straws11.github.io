interface TechCardProps {
    techName: string;
    experienceTime: string;
    body: JSX.Element;
}

export default function TechCard(props: TechCardProps) {
    // a single card for information on a skill
    return (
        <div className="border border-black rounded-lg shadow-lg bg-green-700 p-2 m-8">
            <p className="text-xl lg:text-4xl bg-blue-700 rounded-md p-2 w-fit">
                {props.techName}
            </p>
            <p className="text-lg lg:text-2xl italic">{`Experience: ${props.experienceTime}`}</p>
            {props.body}
        </div>
    );
}
