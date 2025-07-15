export default function NavBar() {
    return (
        <nav className="bg-[#051C2C] p-4 fixed w-full top-0 z-50">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex items-center font-bold text-white text-xs sm:text-lg">
                    {/*<img src="./assets/capybara.png" className="max-w-12 pr-2" />
					<a target="_blank" href="https://www.wikipedia.com/wiki/Capybara">
						Capybara
	</a>*/}
                    <img
                        src="./assets/logo.jpg"
                        className="max-w-12 rounded-full"
                    />
                </div>
                <ul className="flex space-x-4 text-xs sm:text-lg">
                    <li>
                        <a
                            target="_blank"
                            href="https://straws11.github.io/word-search"
                            className="text-white hover:text-gray-300"
                        >
                            Word Search Project
                        </a>
                    </li>
                    <li>
                        <a className="text-white hover:text-gray-300"></a>
                    </li>
                    <li>
                        <a className="text-white hover:text-gray-300"></a>
                    </li>
                    <li>
                        <a className="text-white hover:text-gray-300"></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
