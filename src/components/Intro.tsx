import {
    faGitAlt,
    faGithub,
    faJava,
    faJs,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import "../home.css";
import ScrollTransition from "./personal-profile-card/ScrollTransition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
    const date = new Date();
    const myBday = new Date(2003, 10, 11);
    const msPerYear = 31557600000; // 1000 * 60 * 60 * 24 * 365.25
    const age = Math.floor((date.getTime() - myBday.getTime()) / msPerYear);

    // for fun display
    const myStats = {
        age: age,
        location: "South Africa",
        education: [
            {
                degree: "Computer Science",
                focal: "Data Science",
                year: date.getFullYear() - 2022,
            },
        ],
        hobbies: ["speedcubing", "coding"],
    };

    return (
        <>
            <ScrollTransition title="a">
                <section
                    id="about"
                    className="grid grid-cols-2 bg-slate-600 h-auto pt-20"
                >
                    <div className="col-span-1">
                        <img
                            className="w-10/12 m-4 border rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                            src="/assets/me.jpg"
                            alt="Me"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center px-4">
                        <h1 className="text-sky-500 text-5xl text-center p-2 tracking-widest font-bold">
                            Dylan Swarts
                        </h1>
                        <h2 className="text-blue-200 text-2xl text-center p-4 tracking-widest italic font-bold">
                            // Computer Science Major
                        </h2>
                    </div>
                </section>
            </ScrollTransition>
            <ScrollTransition title="b">
                <div className="grid justify-center text-white items-center">
                    <h2 className="text-4xl p-2 underline">{`"myStats":`}</h2>
                    <pre className="whitespace-pre-wrap text-2xl">
                        {JSON.stringify(myStats, null, 2)}
                    </pre>
                </div>
            </ScrollTransition>
            <ScrollTransition title="c">
                <h6 className="text-4xl text-center text-white underline p-4">
                    Skills and Technologies
                </h6>
                <div className="grid grid-cols-2 text-4xl m-4 gap-2">
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faPython} size="3x" />
                            <p>Python</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faJava} size="3x" />
                            <p>Java</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faJs} size="3x" />
                            <p>TypeScript/JavaScript</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faGitAlt} size="3x" />
                            <p>Git Version Control</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                            <p>GitHub</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faTerminal} size="3x" />
                            <p>Terminal</p>
                        </div>
                    </div>
                </div>
            </ScrollTransition>
            <ScrollTransition title="d">
                <h2 className="text-blue-200 text-xl text-center p-4 animate-float tracking-widest">
                    Interests
                </h2>
                <h3 className="text-blue-200 text-lg p-4 pl-0 pt-0">
                    Speedcubing
                </h3>
                <p className="text-gray-100 text-sm sm:text-lg p-4">
                    Outside of university studies, I enjoy competing in
                    Speedcubing competitions, with a focus on solving Rubik's
                    Cubes blindfolded. I first learned how to solve a Rubik's
                    Cube in 2017, and after my first competition in November of
                    that year, I basically never stopped.
                    <br />
                    <br />
                    However, university and personal coding adventures have
                    resulted in a decline in progress, as well as a slow decent
                    down the continental rankings I once highly valued.
                </p>
                <h3 className="text-blue-200 text-lg p-4 pl-0">Other</h3>
                <p className="text-gray-100 text-sm sm:text-lg p-4">
                    Besides speedcubing, I try to make some time to go hiking in
                    the beautiful mountains we have in the area. Perhaps I'll
                    build a section for sharing some of those images.
                    <br />
                    <br />
                    Before university, I also played some{" "}
                    <div className="text-blue-200 inline-block transition duration-300 hover:scale-125 hover:-translate-y-3 hover:text-green-300">
                        <a
                            className=""
                            href="https://www.wikipedia.com/wiki/Minecraft"
                        >
                            Minecraft
                        </a>
                    </div>
                    , but that's also taken the backburner.
                </p>
            </ScrollTransition>
        </>
    );
}
