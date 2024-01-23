import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProgressPage from "./components/random-progress-bar/ProgressPage";
import GitHubContent from "./components/GitHubContent";
import YouTubeContent from "./components/youtube-contents/YouTubeContents";
import CubingInfo from "./components/speedcubing/CubingInfo";
import ScrollTransition from "./components/personal-profile-card/ScrollTransition";
import Links from "./components/personal-profile-card/Links";
import Intro from "./components/Intro";

function App() {
    const components = [
        <Intro />,
        <Links />,
        <CubingInfo />,
        <ProgressPage />,
        <GitHubContent />,
        <YouTubeContent />,
    ];

    const wrappedComponents = components.map((element, idx) => (
        <ScrollTransition key={idx} title={`${idx}`}>
            {element}
        </ScrollTransition>
    ));

    return (
        <>
            <div className="app bg-gray-500">
                <NavBar />
                {wrappedComponents}
            </div>
            <footer className="bg-gray-900 text-white text-sm text-center py-4">
                Copyright &copy; {new Date().getFullYear()} Dylan Swarts
            </footer>
        </>
    );
}

export default App;
