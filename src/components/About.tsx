import { useState } from "react";
import "../home.css";

export default function About() {
    const date = new Date();
    const myBday = new Date(2003, 10, 11);
    const msPerYear = 31557600000; // 1000 * 60 * 60 * 24 * 365.25
    const [age, setAge] = useState(Math.floor((date.getTime() - myBday.getTime()) / msPerYear));

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
            <section
                id="about"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-20 px-6 bg-slate-900 text-slate-100"
            >
                {/* IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <img
                        className="w-3/5 border rounded-2xl border-slate-700 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        src="/assets/me.jpg"
                        alt="Dylan Swarts"
                    />
                </div>

                {/* TEXT */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
                    <h1 className="text-3xl md:text-5xl tracking-[0.8em] font-bold text-cyan-400">
                        DYLAN SWARTS
                    </h1>
                    <h2 className="text-xl md:text-3xl tracking-widest italic font-semibold text-slate-300">
      // Computer Science Major
                    </h2>
                </div>
            </section>

            {/* STATS */}
            <section className="max-w-4xl mx-auto mt-10 px-6">
                <div className="bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-700">
                    <h2 className="text-2xl md:text-4xl text-cyan-400 font-bold underline mb-4">{`"myStats":`}</h2>
                    <pre className="whitespace-pre-wrap text-sm md:text-xl text-slate-200 font-mono">
                        {JSON.stringify(myStats, null, 2)}
                    </pre>
                </div>
            </section>
        </>
    );
}
