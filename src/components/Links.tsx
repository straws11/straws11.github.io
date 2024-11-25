import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollTransition from "./ScrollTransition";

export default function Links() {
    const size = window.innerWidth > 1024 ? "5x" : "2x";
    return (
        <>
            {/* i can't remember what "title" is for */}
            <p className="text-black text-center text-md md:text-3xl tracking-widest animate-bounce">
                Find me here!
            </p>
            <div className="flex gap-11 justify-center p-4">
                <a href="https://www.github.com/straws11">
                    <FontAwesomeIcon icon={faGithub} size={size} />
                </a>
                <a href="https://www.linkedin.com/in/dylan-swarts-1011xa">
                    <FontAwesomeIcon icon={faLinkedinIn} size={size} />
                </a>
                <a href="https://www.instagram.com/strawsdylan.png/">
                    <FontAwesomeIcon icon={faInstagram} size={size} />
                </a>
                <a href="https://www.youtube.com/@DylanSwarts">
                    <FontAwesomeIcon icon={faYoutube} size={size} />
                </a>
            </div>
        </>
    );
}
