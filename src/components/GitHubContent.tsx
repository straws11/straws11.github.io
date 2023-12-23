import axios from "axios";
export default function GitHubContent() {
	const username = "straws11";

	axios
		.get(`https://api.github.com/users/${username}/repos`)
		.then((response: { data: any }) => {
			console.log(response.data);
		})
		.catch((error: Error) => {
			console.error("Error fetching user repositories! Details:", error);
		});

	return (
		<div>
			<h1>hi</h1>
		</div>
	);
}
