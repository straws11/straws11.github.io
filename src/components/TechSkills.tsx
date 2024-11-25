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

const skills: { [key: number]: { skill: string; icon: IconDefinition } } = {
    1: { skill: "Python", icon: faPython },
    2: { skill: "Java", icon: faJava },
    3: { skill: "TypeScript/JavaScript", icon: faJs },
    4: { skill: "Git Version Control", icon: faGitAlt },
    5: { skill: "GitHub", icon: faGithub },
    6: { skill: "Terminal", icon: faTerminal },
    7: { skill: "Rust", icon: faRust },
};
// TODO combine skills and skillsBody, no reason to keep separated
const skillsBody: { [key: number]: { text: JSX.Element; exp: Date } } = {
    1: {
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
    2: {
        text: (
            <p className="text-md md:text-2xl">
                Built a simple Android application for timing and generating
                statistics for a niche speedcubing event. Experience with Java
                Socket Programming in a simple Multiplayer Space Invaders Game
                (WIP).
            </p>
        ),
        exp: new Date(2022, 10),
    },
    3: {
        text: (
            <p className="text-md md:text-2xl">
                Built this personal website using TypeScript, React and
                TailwindCSS, as well as this{" "}
                <a
                    className="text-[#8ca9bc] hover:text-[#082C37]"
                    href="https://straws11.github.io/word-search"
                >
                    word search game.
                </a>{" "}
                Also utilized AWS Lambda for secure API requests to GitHub to
                extract repository information.
            </p>
        ),
        exp: new Date(2023, 12),
    },
    4: {
        text: (
            <p className="text-md md:text-2xl">
                Utilize Git for all university and personal projects.
            </p>
        ),
        exp: new Date(2022, 10),
    },
    5: {
        text: (
            <p className="text-md md:text-2xl">
                Hosting all{" "}
                <a
                    className="text-[#8ca9bc] hover:text-[#082C37]"
                    href="#projects"
                >
                    personal projects
                </a>{" "}
                on GitHub, as well as this site deployed on GitHub Pages.
            </p>
        ),
        exp: new Date(2022, 10),
    },
    6: {
        text: (
            <p className="text-md md:text-2xl">
                Comfortable using terminal to manage files, install
                applications, interact with git. Use Tmux and NeoVim daily.
            </p>
        ),
        exp: new Date(2023, 6),
    },
    7: {
        text: (
            <p className="text-md md:text-2xl">
                Learning a lot about websockets, endpoints and postgres using
                Rust as backend language for{" "}
                <a
                    className="text-[#8ca9bc] hover:text-[#082C37]"
                    href="https://github.com/JBLDKY/starblazers"
                >
                    Starblazers!
                </a>
            </p>
        ),
        exp: new Date(2024, 5),
    },
};

export default function TechSkills() {
    const [skillInfo, setSkillInfo] = useState<JSX.Element>(<></>);

    const targetRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState<Boolean>(false);

    useEffect(() => {
        if (shouldScroll && targetRef.current) {
            const scrollCoord = targetRef.current.getBoundingClientRect().top + window.scrollY;
            // targetRef.current.scrollIntoView();
            window.scrollTo({ top: scrollCoord - 80, behavior: "smooth"});
            // targetRef.current.scrollBy({top: scrollTo - 20, behavior: "smooth"});
            setShouldScroll(false);
        }
    }, [shouldScroll]);

    function clickSkill(id: number) {
        setSkillInfo(
            <TechCard
                ref={targetRef}
                experienceTime={formatExperienceTime(skillsBody[id].exp)}
                techName={skills[id].skill}
                body={skillsBody[id].text}
            />
        );
        setShouldScroll(true);
    }

    // create text format for experience time
    function formatExperienceTime(startDate: Date) {
        const difference = Date.now() - startDate.getTime();
        const yearDiff = 31_556_952_000;
        if (difference < yearDiff) {
            return "less than 1 year";
        } else if (difference < 2 * yearDiff) {
            return "more than 1 year";
        } else {
            return "more than " + Math.round(difference / yearDiff) + " years";
        }
    }

    // create each clickable technology icon
    const components = Object.entries(skills).map(([id, obj]) => {
        const { skill, icon } = obj;
        return (
            <div key={id} className="flex items-center gap-4 justify-center border-[#051C2C]">
                <button onClick={() => clickSkill(Number(id))}>
                    <FontAwesomeIcon icon={icon} size="3x" />
                    <p>{skill}</p>
                </button>
            </div>
        );
    });

    // split into two columns
    const totalSkills = components.length;
    /*const skillCols = (
        <>
            <div className="space-y-6">
                {components.slice(0, totalSkills / 2 + 1)}
            </div>
            <div className="space-y-6">
                {components.slice(totalSkills / 2 + 1)}
            </div>
        </>
    );*/

    return (
        <>
            <h6 className="text-xl md:text-4xl text-center text-[#051C2C] underline pt-10 md:pt-16 font-bold">
                SKILLS AND TECHNOLOGIES
            </h6>
            <div className="grid grid-cols-2 text-sm sm:text-lg lg:text-4xl lg:grid-cols-3 m-4 gap-2 space-y-6">
                {components}
            </div>
            {skillInfo}
        </>
    );
}
