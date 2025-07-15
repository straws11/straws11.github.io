import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {
    return (
        <>
            <h2 className="text-center text-2xl md:text-4xl text-cyan-400 font-bold underline mb-4">
                Find Me Online
            </h2>
            <div className="flex flex-wrap justify-center gap-10 px-4">
                <a
                    href="https://www.github.com/straws11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-cyan-400 transition-transform transform hover:scale-110"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-5xl sm:text-6xl" />
                </a>

                <a
                    href="https://www.linkedin.com/in/dylan-swarts-1011xa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-cyan-400 transition-transform transform hover:scale-110"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-5xl sm:text-6xl" />
                </a>

                <a
                    href="https://www.instagram.com/strawsdylan.png/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-pink-400 transition-transform transform hover:scale-110"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-5xl sm:text-6xl" />
                </a>

                <a
                    href="https://www.youtube.com/@DylanSwarts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-red-500 transition-transform transform hover:scale-110"
                >
                    <FontAwesomeIcon icon={faYoutube} className="text-5xl sm:text-6xl" />
                </a>
            </div>
        </>
    );
}
