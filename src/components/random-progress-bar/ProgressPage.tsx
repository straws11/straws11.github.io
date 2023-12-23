import React from "react";
import YouTubeContent from "../youtube-contents/YouTubeContents";

export default function ProgressPage() {
	const [displayTimeFrame, setDisplayTimeFrame] = React.useState("year");

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<button
				onClick={() =>
					setDisplayTimeFrame(displayTimeFrame === "year" ? "month" : "year")
				}
				className="px-4 py-2 bg-green-200 border-solid border-black my-2"
			>
				{displayTimeFrame === "year" ? "Day" : "Year"}
			</button>
			{displayTimeFrame === "year" ? <YearProgress /> : <DayProgress />}
		</div>
	);
}

function DayProgress() {
	const milliPerDay = 1000 * 60 * 60 * 24;
	const curDate = new Date();
	const tomorrow = new Date(
		curDate.getFullYear(),
		curDate.getMonth(),
		curDate.getDate() + 1
	);

	const progress = 1 - (tomorrow.getTime() - curDate.getTime()) / milliPerDay;
	return (
		<>
			<h3 className="mb-3 text-sm sm:text-xl">
				Today is {(progress * 100).toFixed(4)}% complete!
			</h3>
			<progress
				className="max-w-lg w-2/3 h-20 text-blue-500 bg-gray-200 rounded-lg"
				value={progress * 10000}
				max="10000"
			/>
		</>
	);
}

function YearProgress() {
	const milliPerYear = 1000 * 60 * 60 * 24 * 365.25;
	const curDate = new Date();
	const yearStart = new Date(curDate.getFullYear(), 0, 1);
	const progress = (curDate.getTime() - yearStart.getTime()) / milliPerYear;
	return (
		<>
			<h3 className="mb-3 text-sm sm:text-xl">
				{curDate.getFullYear()} is {(progress * 100).toFixed(6)}% complete!
			</h3>
			<progress
				className="max-w-lg w-2/3 h-20 text-blue-500 bg-gray-200 rounded-lg"
				value={progress * 10000}
				max="10000"
			/>
		</>
	);
}
