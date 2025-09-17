import { useEffect, useState } from "react";
import uuid4 from "uuid4";
import CountdownTimer, { Countdown } from "./CountdownTimer";

/** Format date to the format required for input component */
function formatDateTime(d: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const mins = pad(d.getMinutes());
  return `${year}-${month}-${day}T${hours}:${mins}`;
}

export default function Misc() {
  const [countdowns, setCountdowns] = useState<Countdown[]>([]);
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  /** Create new countdown timer */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newTimer: Countdown = { id: uuid4(), title: title, end: date };
    const all = [...countdowns, newTimer];
    setCountdowns(all);
    localStorage.setItem("countdowns", JSON.stringify(all));
    setTitle("");
    setDate(new Date());
  }

  function removeTimer(id: string): void {
    const filtered = countdowns.filter(timer => timer.id !== id);
    setCountdowns(filtered);
    localStorage.setItem("countdowns", JSON.stringify(filtered));
  }


  useEffect(() => {
    // load existing timers
    const stored = localStorage.getItem("countdowns");
    const items: Countdown[] = stored ? JSON.parse(stored) : [];
    setCountdowns(items.map(timer => ({ ...timer, end: new Date(timer.end) })));
  }, []);

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-y-4 justify-center">
        {/* My hardcoded one */}
        <CountdownTimer
          className="border border-amber-400 hover:shadow-amber-400/70 hover:shadow-md transition-all"
          countdown={{ id: uuid4(), title: "Time Until Degree Completion", end: new Date("2025-11-11T10:00:00") }}
        />
        {countdowns.map(timer => <CountdownTimer key={timer.id} countdown={timer} onDelete={() => removeTimer(timer.id)} />)}

      </div>
      {/* Add timer */}
      <form className="flex flex-col p-2 gap-4 mt-5 md:mt-10 items-left bg-slate-700 rounded-xl"
        onSubmit={handleSubmit}>
        <h2 className="text-xl sm:text-3xl md:text-4xl">Create Your Own Countdown</h2>
        <input
          className="rounded-md p-2 text-sm md:text-lg bg-slate-300 text-black w-1/2 lg:w-1/4"
          value={title}
          placeholder="Countdown Title..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        <input
          className="rounded-md p-2 text-sm md:text-lg bg-slate-300 text-black w-1/2 lg:w-1/4"
          type="datetime-local"
          value={formatDateTime(date)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))} />
        <button
          type="submit"
          className="text-sm md:text-lg text-black bg-slate-400 hover:bg-slate-500 w-fit px-3 rounded-xl"
        >Create Countdown
        </button>
      </form>
    </div>
  );
}
