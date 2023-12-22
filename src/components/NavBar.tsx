import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="bg-gray-900 p-4">
			<div className="max-w-7x1 mx-auto flex justify-between items-center">
				<div className="flex items-center text-white font-bold text-x1">
					<img src="./assets/capybara.png" className="max-w-12 pr-2" />
					<a target="_blank" href="https://www.wikipedia.com/wiki/Capybara">
						Capybara
					</a>
				</div>
				<ul className="flex space-x-4">
					<li className="text-white">
						<Link to="/" className="text-white hover:text-gray-300">
							Home
						</Link>
					</li>
					<li className="text-white">
						<Link to="/cubing" className="text-white hover:text-gray-300">
							Speedcubing
						</Link>
					</li>
					<li>
						<Link
							to="/something-else"
							className="text-white hover:text-gray-300"
						>
							Something Else
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
