import axios from "axios";
import items from "../../ytDataTest.js";
import YouTubeCard from "./YouTubeCard";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Video {
	videoId: string;
	thumbnail: string;
	title: string;
	description: string;
}

export default function YouTubeContent() {
	const fetchDataFromLambda = async () => {
		try {
			const lambdaEndpoint =
				"https://ju2kydngiyzvawghzxjspzd5jy0bzzks.lambda-url.eu-north-1.on.aws/";
			//make a get request to your lambda function
			const response = await axios.get(lambdaEndpoint);

			// handle api response
			console.log("Lambda Response:", response.data);
			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	//transform response list into video objects
	const videos: Video[] = items.map((item) => {
		const snip = item.snippet;
		return {
			videoId: snip.resourceId.videoId,
			thumbnail: snip.thumbnails.medium.url,
			title: snip.title,
			description: snip.description,
		};
	});

	const videoComponents = videos.map((vid: Video, idx) => {
		return <YouTubeCard video={vid} key={idx} />;
	});

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4 p-4 mx-8 md:p-8 text-white text-sm sm:text-xl md:text-xl">
				<h3 className="text-center sm:text-2xl font-bold">
					My Latest YouTube Content
				</h3>
				<hr className="border-white w-3/4" />
				<p className="text-center max-w-screen-md">
					Shows my 10 latest YouTube uploads. I've set up an AWS Lambda function
					which makes an API call to the YouTube API and returns the data to
					this site. It works... mostly. (I'm not a pro at TailwindCSS yet!)
					<br /> Click a thumbnail to watch the video on{" "}
					<FontAwesomeIcon icon={faYoutube} />{" "}
					<span className="hover:text-red-700 hover:underline">YouTube.</span>
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
				{/*<button onClick={fetchDataFromLambda}>Fetch Data!</button>*/}
				{videoComponents}
			</div>
		</>
	);
}
