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
            {/* i can't remember what "title" is for */}
            <p className="text-black text-md md:text-4xl text-center tracking-widest animate-bounce">
                Find me here!
            </p>
            <div className="flex gap-11 justify-center p-4">
                <a href="https://www.github.com/straws11">
                    <FontAwesomeIcon icon={faGithub} className="text-3xl lg:text-6xl" />
                </a>
                <a href="https://www.linkedin.com/in/dylan-swarts-1011xa">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl lg:text-6xl" />
                </a>
                <a href="https://www.instagram.com/strawsdylan.png/">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl lg:text-6xl" />
                </a>
                <a href="https://www.youtube.com/@DylanSwarts">
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl lg:text-6xl" />
                </a>
            </div>
        </>
    );
}
