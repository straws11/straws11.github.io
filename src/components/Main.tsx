import "../home.css";
import GitHubContent from "./GitHubContent";
import ScrollTransition from "./ScrollTransition";
import TechSkills from "./TechSkills";

export default function Main() {
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
                <section id="about" className="grid grid-cols-2 h-auto pt-20">
                    <div className="col-span-1">
                        <img
                            className="w-3/5 m-4 border rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                            src="/assets/me.jpg"
                            alt="Me"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-start px-4">
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
                {`NERD FONT`}
                <div className="grid justify-center text-white items-center">
                    <h2 className="text-4xl p-2 underline">{`"myStats":`}</h2>
                    <pre className="whitespace-pre-wrap text-2xl">
                        {JSON.stringify(myStats, null, 2)}
                    </pre>
                </div>
            </ScrollTransition>

            {/* Skills In Tech */}
            <ScrollTransition title="c">
                <TechSkills />
            </ScrollTransition>

            {/* GitHub Content*/}
            <ScrollTransition title="d">
                <GitHubContent />
            </ScrollTransition>
        </>
    );
}
