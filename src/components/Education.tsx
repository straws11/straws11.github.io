import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const educations = [
    {
        title: "BSc Computer Science & Applied Mathematics",
        place: "Stellenbosch University",
        timeframe: "2023 - 2025",
        description: "Undergraduate degree with exposure to modules in pure mathematics, applied mathematics, statistics, data science and computer science.",
        achievements: [
            "Top 15% in the Faculty of Science in 2023",
            "First year aggregate of 81.75%",
            "Second year aggregate of 77.63%",
            "Multiple top 10 placements for Computer Science modules"
        ],
    },
    {
        title: "High School",
        place: "Strand High School",
        timeframe: "2018 - 2022",
        description: "",
        achievements: [
            "UCT Mathematics Olympiad Merit: 2018, 2019, 2022",
            "SAMF Boland Mathematics Team: 2018, 2019",
            "Second place at school, graduating with 87.8%",
            "Distinctions in all 7 subjects",
        ],
    },
] as const;

export default function Education() {

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 grid-cols-3">
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
