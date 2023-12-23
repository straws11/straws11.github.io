import React from "react";
import { Video } from "./YouTubeContents";

interface YouTubeCardProps {
	video: Video;
}

export default function YouTubeCard(props: YouTubeCardProps) {
	const vid = props.video;
	const [showFull, setShowFull] = React.useState(false);

	return (
		<div className="flex flex-col justify-center max-w-md items-center border border-black bg-gray-200 rounded-lg p-4 m-5 overflow-hidden">
			<h1 className="font-bold text-sm sm:text-lg text-center">{vid.title}</h1>
			{/* Show more / Show less handling */}
			{showFull ? (
				<div className="inline-flex">
					<p className="max-w-xs px-4 py-2">{vid.description}</p>
					<button
						className="text-gray-500 font-bold hover:text-black"
						onClick={() => setShowFull(!showFull)}
					>
						{" "}
						Show Less
					</button>
				</div>
			) : (
				<div className="inline-flex">
					<p className="max-w-fit px-4 py-2">{vid.description.substring(0, 50) + "..."}</p>
					<button
						className="text-gray-500 font-bold hover:text-black"
						onClick={() => setShowFull(!showFull)}
					>
						{" "}
						Show More
					</button>
				</div>
			)}
			<a
				className="max-w-max inline-block"
				target="_blank"
				href={`https://youtube.com/watch?v=${vid.videoId}`}
			>
				<img className="rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" src={vid.thumbnail} />
			</a>
		</div>
	);
}
