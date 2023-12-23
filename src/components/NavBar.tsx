import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="bg-gray-900 p-4">
			<div className="mx-auto flex justify-between items-center">
				<div className="flex items-center font-bold text-white text-xs sm:text-lg">
					{/*<img src="./assets/capybara.png" className="max-w-12 pr-2" />
					<a target="_blank" href="https://www.wikipedia.com/wiki/Capybara">
						Capybara
	</a>*/}
					<img src="./assets/logo.jpg" className="max-w-12 rounded-full" />
				</div>
				<ul className="flex space-x-4 text-xs sm:text-lg">
					<li>
						<Link to="/" className="text-white hover:text-gray-300">
							Home
						</Link>
					</li>
					<li>
						<Link to="/cubing" className="text-white hover:text-gray-300">
							Speedcubing
						</Link>
					</li>
					<li>
						<Link
							to="/something-else"
							className="text-white hover:text-gray-300"
						>
							Random %
						</Link>
					</li>
					<li>
						<Link to="/my-youtube" className="text-white hover:text-gray-300">
							YouTube
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
