import { useState } from "react";
import "../home.css";

export default function About() {
    const date = new Date();
    const myBday = new Date(2003, 11, 11);
    const msPerYear = 31557600000; // 1000 * 60 * 60 * 24 * 365.25
    const [age, setAge] = useState(Math.floor((date.getTime() - myBday.getTime()) / msPerYear));

    // for fun display
    const myStats = {
        location: "South Africa",
        education: [
            {
                degree: "BSc Computer Science & Applied Mathematics",
                year: date.getFullYear() - 2022,
            },
        ],
        hobbies: ["coding", "speedcubing", "hiking"],
        age: age,
    };

    return (
        <>
            {/* HERO SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 px-6 bg-slate-900 text-slate-100 gap-y-10 md:gap-x-8">
                {/* IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/assets/me2-cropped.jpeg"
                        alt="Dylan Swarts"
                        className="w-sm:w-1/2 md:w-4/5 max-w-xs border border-slate-700 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* TEXT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-2">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-cyan-400 break-words">
                        DYLAN SWARTS
                    </h1>
                    <h2 className="text-lg sm:text-2xl md:text-3xl italic tracking-wide text-slate-300">
          // Software Engineering
                    </h2>
                </div>
            </div>

            {/* STATS */}
            <div className="max-w-4xl mx-auto mt-12 px-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-6 overflow-x-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 underline mb-4">
                        "myStats":
                    </h2>
                    <pre className="text-sm sm:text-base md:text-lg text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
                        {JSON.stringify(myStats, null, 2)}
                    </pre>
                </div>
            </div>
        </>
    );
}
