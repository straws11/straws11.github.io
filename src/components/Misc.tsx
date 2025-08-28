import { useEffect, useState } from "react";

/** Format time as days, hours, minutes, seconds */
function formatTime(millis: number): string {
    if (millis < 0) return "0d 0h 0m 0s";
    const totalSeconds = Math.floor(millis / 1000);
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

export default function Misc() {
    const [timeLeft, setTimeLeft] = useState<number>(-1);

    useEffect(() => {
        let isMounted = true;
        const calcTimeLeft = () => {
            const lastExam = new Date("2025-11-11");
            const left = lastExam.getTime() - Date.now();
            setTimeLeft(left);
            if (isMounted) {
                setTimeout(calcTimeLeft, 1000);
            }
        };
        calcTimeLeft();
        return () => { isMounted = false };
    }, []);

    const timeLeftStr = formatTime(timeLeft);
    return (
        <div className="grid grid-rows-2 gap-y-4 justify-center">
            <p className="text-xl sm:text-3xl md:text-4xl">Time Until Degree Completion</p>
            <p className="text-2xl sm:text-4xl md:text-5xl text-green-300">{timeLeftStr}</p>
        </div>
    );
}
