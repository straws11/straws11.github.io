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
			<div className="flex text-center justify-center p-4">
				<hr className="w-full" />
			</div>
			<p className="text-white text-center text-xs tracking-widest animate-bounce">
				Check me out here!
			</p>
			<div className="flex gap-11 justify-center p-4">
				<a href="https://www.github.com/straws11">
					<FontAwesomeIcon icon={faGithub} size="3x" />
				</a>
				<a href="https://www.linkedin.com/in/dylan-swarts-1011xa">
					<FontAwesomeIcon icon={faLinkedinIn} size="3x" />
				</a>
				<a href="https://www.instagram.com/strawsdylan.png/">
					<FontAwesomeIcon icon={faInstagram} size="3x" />
				</a>
				<a href="https://www.youtube.com/@DylanSwarts">
					<FontAwesomeIcon icon={faYoutube} size="3x" />
				</a>
			</div>
			
		</>
	);
}
