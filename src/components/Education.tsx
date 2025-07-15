import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const educations = [
    {
        title: "BSc Computer Science & Applied Mathematics",
        place: "Stellenbosch University",
        timeframe: "2023 - 2025",
        description: "Studied very hard in very many modules. Swag place",
        achievements: [
            "Top 5% in the faculty of science in 2023",
            "Current aggregate of 76%",
        ],
    },
    {
        title: "High School",
        place: "Strand High School",
        timeframe: "2018 - 2022",
        description: "high school go brr",
        achievements: [
            "Mathematics Olympiad",
            "Second place for final results with 87.7%",
        ],
    },
] as const;

export default function Education() {

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {educations.map((eduItem, index) => (
                <div
                    key={index}
                    className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700 hover:shadow-xl transition-all"
                >
                    <h3 className="text-2xl font-bold text-cyan-400">{eduItem.title}</h3>
                    <p className="text-xl text-slate-300 font-semibold mb-1">{eduItem.place}</p>
                    <p className="text-lg text-slate-400 italic mb-2">{eduItem.timeframe}</p>
                    <p className="text-xl text-slate-200">{eduItem.description}</p>

                    <ul className="mt-4 space-y-2">
                        {eduItem.achievements.map((achievement, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 text-lg text-slate-100"
                            >
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="text-green-500 relative top-[1px]"
                                />
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
