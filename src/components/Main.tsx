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
                year: date.getFullYear() - 2022,
            },
        ],
        hobbies: ["speedcubing", "coding"],
    };

    return (
        <>
            <ScrollTransition title="a">
                <section id="about" className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 py-20">
                    <div className="col-span-1 flex justify-center items-center md:block">
                        <img
                            className="w-3/5 m-4 border rounded-2xl border-[#051C2C] shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                            src="/assets/me.jpg"
                            alt="Me"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-start px-4">
                        <h1 className="text-[#051C2C] md:text-5xl text-xl text-center md:text-start p-2 tracking-[0.8em] font-bold">
                            DYLAN SWARTS
                        </h1>
                        <h2 className="text-[#051C2C] text-2xl md:text-5xl text-center p-4 tracking-widest italic font-bold">
                            // Computer Science Major
                        </h2>
                    </div>
                </section>
            </ScrollTransition>
            <ScrollTransition title="b"> 
                <div className="grid justify-center text-[] items-center border rounded-2xl bg-[#8ca9bc]">
                    <h2 className="text-xl md:text-4xl p-2 underline">{`"myStats":`}</h2>
                    <pre className="whitespace-pre-wrap text-sm md:text-2xl">
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
