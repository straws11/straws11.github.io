import { useEffect, useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export type Countdown = {
  id: string;
  title: string;
  end: Date;
};

interface CountdownTimerProps {
  className?: string;
  countdown: Countdown;
  onDelete?: () => void;
};

export default function CountdownTimer(props: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(-1);

  useEffect(() => {
    let isMounted = true;
    const calcTimeLeft = () => {
      const endDate = props.countdown.end;
      const left = endDate.getTime() - Date.now();
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
    <div className={`flex flex-col items-center border rounded-xl p-4 border-slate-700 ${props.className ?? ""}`}>
      <div className="grid grid-rows-2 gap-y-4 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl">{props.countdown.title}</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl text-green-300">{timeLeftStr}</p>
      </div>
      <div className="flex w-full mt-2 justify-between items-center text-xs md:text-sm text-slate-300">
        <p>{props.countdown.end.toDateString()}</p>
        {props.onDelete &&
          <button
            className="flex items-center justify-center rounded-full w-10 h-10 bg-red-400 hover:bg-red-600"
            onClick={props.onDelete}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        }
      </div>
    </div>
  );
}
