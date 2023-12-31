import About from "./personal-profile-card/About";
import Info from "./personal-profile-card/Info";
import Links from "./personal-profile-card/Links";

export default function Home() {
	return (
		<div className="bg-gray-600 p-5 lg:p-20 lg:w-9/12 lg:m-auto shadow-lg">
			<Info />
			<About />
			<Links />
		</div>
	);
}
