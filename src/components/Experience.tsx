import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experiences = [
    {
        title: "Student Vacation Worker",
        place: "Gendac | Software, Innovations & IoT",
        timeframe: "July 2025 (2 weeks)",
        description: "Collaborated with two other interns to create a unique skills marketplace site.",
        achievements: [
            "Used C#, .NET and Blazor Web Server",
            "Experienced the day-to-day of a developer at Gendac",
            "Participated in daily standups",
            "Improved communication and teamwork skills",
            "Drank a lot of coffee"
        ],
    },
    {
        title: "Programming Tutor",
        place: "Self-Employed",
        timeframe: "April 2023 - Present",
        description: "Providing 1-on-1 tutoring sessions to high school and university students to develop and sharpen their skills in programming and building foundations in computer science concepts.",
        achievements: [
            "Improving communication skills",
            "Thinking about fundamental programming concepts in unique ways",
            "Breaking down fundamentals to a digestable level",
        ],
    },
] as const;

export default function Experience() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700 hover:shadow-xl transition-all"
                >
                    <h3 className="text-lg sm:text-2xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-md sm:text-xl text-slate-300 font-semibold mb-1">{exp.place}</p>
                    <p className="text-sm sm:text-lg text-slate-400 italic mb-2">{exp.timeframe}</p>
                    <p className="text-md sm:text-xl text-slate-200">{exp.description}</p>

                    <ul className="mt-4 space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 text-sm sm:text-lg text-slate-100"
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

