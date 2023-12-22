import "../../home.css";

export default function Info() {
	return (
		<>
			<img
				className="w-1/3 h-auto mx-auto border rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
				src="/assets/me.jpg"
				alt="Straws"
			/>
			<h1 className="text-sky-500 text-4xl text-center p-2 tracking-wider font-bold">
				<span className="bg-gradient-to-r from-purple-500 to-purple-400 text-transparent bg-clip-text">Dylan Swarts</span>
			</h1>
			{/*<div className="flex text-center justify-center">
				<hr className="w-1/2" />
			</div>*/}
			<h2 className="text-blue-200 text-lg text-center p-4 tracking-widest italic font-bold">
				// Computer Science Major
			</h2>
			<div className="flex justify-center p-5">
				<hr className="w-9/12" />
			</div>
			{/*<div className="flex gap-1.5 justify-center text-white">
				<button className="bg-blue-500 flex items-center gap-4 px-5 py-2 text-base cursor-pointer rounded-full transition duration-200 hover:bg-blue-700">
					<FontAwesomeIcon icon={faEnvelope} />
					<a href="mailto:dswarts11@gmail.com">Email</a>
				</button>
				<button className="bg-blue-500 flex items-center gap-4 px-5 py-2 text-base cursor-pointer rounded-full transition duration-200 hover:bg-blue-700">
					<FontAwesomeIcon icon={faLinkedin} />
					<a
						target="_blank"
						href="https://www.linkedin.com/in/dylan-swarts-1011xa/"
					>
						LinkedIn
					</a>
				</button>
	</div>*/}
		</>
	);
}
