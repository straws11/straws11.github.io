import {
    IconDefinition,
    faGitAlt,
    faGithub,
    faJava,
    faJs,
    faPython,
    faRust,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechCard from "./TechInfo";
import { useState, useRef, useEffect } from "react";

const skills: { [key: number]: { skill: string; icon: IconDefinition; text: JSX.Element; exp: Date } } = {
    1: {
        skill: "Rust",
        icon: faRust,
        text: (
            <p className="text-md md:text-2xl">
                Learning a lot about websockets, endpoints and postgres using
                Rust as backend language for{" "}
                <a
                    className="text-slate-200 underline hover:text-cyan-400"
                    href="https://github.com/JBLDKY/starblazers"
                >
                    Starblazers!
                </a>{" "}
                Using Actix Web and sqlx for a major private project, with a
                clean API used by the TS frontend.
            </p>
        ),
        exp: new Date(2024, 5),
    },
    2: {
        skill: "TypeScript",
        icon: faJs,
        text: (
            <p className="text-md md:text-2xl">
                Built this personal website using TypeScript, React and
                TailwindCSS, as well as this{" "}
                <a
                    className="text-slate-200 underline hover:text-cyan-400"
                    href="https://straws11.github.io/word-search"
                >
                    word search game.
                </a>{" "}
                Proficiency assessment API consumer project using React.
                Large private project frontend with React and TailwindCSS.
            </p>
        ),
        exp: new Date(2023, 12),
    },
    7: {
        skill: "Python",
        icon: faPython,
        text: (
            <p className="text-md md:text-2xl">
                Used matplotlib and pandas during a Data Science Hackathon in
                2023. Completed 2 university semester projects, one being an
                obstacle version of chess, utilising OOP concepts and working
                with a simple GUI library.
            </p>
        ),
        exp: new Date(2022, 12),
    },
    3: {
        skill: "Git",
        icon: faGitAlt,
        text: (
            <p className="text-md md:text-2xl">
                Utilize Git for all university and personal projects. Familiar with branching and best practices.
            </p>
        ),
        exp: new Date(2022, 10),
    },
    4: {
        skill: "Java",
        icon: faJava,
        text: (
            <p className="text-md md:text-2xl">
                Built a simple Android application for timing and generating
                statistics for a niche speedcubing event. Built several group mini-projects
                (all scoring +90%) for a computer networking course using Java sockets. Springboot
                experience as an initial backend stack.
            </p>
        ),
        exp: new Date(2022, 10),
    },
    5: {
        skill: "GitHub",
        icon: faGithub,
        text: (
            <p className="text-md md:text-2xl">
                Hosting all{" "}
                <a
                    className="text-slate-200 underline hover:text-cyan-400"
                    href="#projects"
                >
                    personal projects
                </a>{" "}
                on GitHub, as well as this site deployed on GitHub Pages.
                Experience working with branches and PRs.
            </p>
        ),
        exp: new Date(2022, 10),
    },
    6: {
        skill: "Terminal",
        icon: faTerminal,
        text: (
            <p className="text-md md:text-2xl">
                Extremely comfortable using unix terminal to manage files, install
                applications, interact with git and other tooling. Use Tmux and NeoVim daily.
                Optimized workflow to the point where most work is done in the terminal.
            </p>
        ),
        exp: new Date(2023, 6),
    },
};

export default function TechSkills() {
    const [skillInfo, setSkillInfo] = useState<JSX.Element>(<></>);
    const targetRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState<Boolean>(false);

    useEffect(() => {
        if (shouldScroll && targetRef.current) {
            const scrollCoord = targetRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: scrollCoord - 80, behavior: "smooth" });
            setShouldScroll(false);
        }
    }, [shouldScroll]);

    function clickSkill(id: number) {
        setSkillInfo(
            <TechCard
                ref={targetRef}
                experienceTime={formatExperienceTime(skills[id].exp)}
                techName={skills[id].skill}
                body={skills[id].text}
            />
        );
        setShouldScroll(true);
    }

    function formatExperienceTime(startDate: Date) {
        const difference = Date.now() - startDate.getTime();
        const yearDiff = 31_556_952_000;
        if (difference < yearDiff) return "less than 1 year";
        else if (difference < 2 * yearDiff) return "more than 1 year";
        else return "more than " + Math.round(difference / yearDiff) + " years";
    }

    // actual buttons with icon & name
    const components = Object.entries(skills).map(([id, obj]) => {
        const { skill, icon } = obj;
        return (
            <div className="w-[70%]"
                key={id}>
                <button
                    onClick={() => clickSkill(Number(id))}
                    className="flex flex-col items-center justify-center gap-2 bg-slate-800 text-slate-100 border border-slate-700 shadow-md hover:shadow-lg hover:scale-105 transition-all h-[140px] w-full rounded-2xl text-center"
                >
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-3xl sm:text-4xl text-cyan-400"
                    />
                    <p className="text-sm sm:text-base font-medium truncate w-full">
                        {skill}
                    </p>
                </button>
            </div>
        );
    });

    return (
        <>
            <h6 className="text-2xl md:text-4xl text-cyan-400 font-bold text-center my-8 underline tracking-wider">
                SKILLS & TECHNOLOGIES
            </h6>

            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {components}
            </div>

            {skillInfo}
        </>
    );
}
