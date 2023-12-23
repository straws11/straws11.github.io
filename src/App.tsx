import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProgressPage from "./components/random-progress-bar/ProgressPage";
import GitHubContent from "./components/GitHubContent";
import YouTubeContent from "./components/youtube-contents/YouTubeContents";
import CubingInfo from "./components/speedcubing/CubingInfo";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="app bg-gray-500">
					<NavBar />
					{/*<GitHubContent />*/}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cubing" element={<CubingInfo />} />
						<Route path="/something-else" element={<ProgressPage />} />
						<Route path="/my-youtube" element={<YouTubeContent />} />
					</Routes>
				</div>
			</BrowserRouter>
			<footer className="bg-gray-900 text-white text-sm text-center py-4">
				Copyright &copy; {new Date().getFullYear()} Dylan Swarts
			</footer>
		</>
	);
}

export default App;
