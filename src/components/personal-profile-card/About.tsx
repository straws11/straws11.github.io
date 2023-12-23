export default function About() {
	const date = new Date();
	const myBday = new Date(2003, 10, 11);
	const msPerYear = 31557600000; // 1000 * 60 * 60 * 24 * 365.25
	const age = Math.floor((date.getTime() - myBday.getTime()) / msPerYear);
	return (
		<>
			<h2 className="text-blue-200 text-xl text-center p-4 animate-float tracking-widest">
				About Me
			</h2>
			<p className="text-gray-50 text-sm sm:text-lg">
				I'm a {age} year old from South Africa, currently enrolled in a Bachelor
				of Science in Computer Science, with a focus on Data Science.
				<br />
				I'm fairly decent at working with Python, Java and TypeScript.
				<sub>also Delphi lol</sub>
			</p>
			<h2 className="text-blue-200 text-xl text-center p-4 animate-float tracking-widest">
				Interests
			</h2>
			<h3 className="text-blue-200 text-lg p-4 pl-0 pt-0">Speedcubing</h3>
			<p className="text-gray-100 text-sm sm:text-lg">
				Outside of university studies, I enjoy competing in Speedcubing
				competitions, with a focus on solving Rubik's Cubes blindfolded. I first
				learned how to solve a Rubik's Cube in 2017, and after my first
				competition in November of that year, I basically never stopped.
				<br />
				<br />
				However, university and personal coding adventures have resulted in a
				decline in progress, as well as a slow decent down the continental
				rankings I once highly valued.
			</p>
			<h3 className="text-blue-200 text-lg p-4 pl-0">Other</h3>
			<p className="text-gray-100 text-sm sm:text-lg">
				Besides speedcubing, I try to make some time to go hiking in the
				beautiful mountains we have in the area. Perhaps I'll build a section
				for sharing some of those images.
				<br />
				<br />
				Before university, I also played some{" "}
				<div className="text-blue-200 inline-block transition duration-300 hover:scale-125 hover:-translate-y-3 hover:text-green-300">
					<a className="" href="https://www.wikipedia.com/wiki/Minecraft">
						Minecraft
					</a>
				</div>
				, but that's also taken the backburner.
			</p>
		</>
	);
}
