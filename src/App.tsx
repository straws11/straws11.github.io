import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cubing" element={<h1>Hmm, seems to be nothing here</h1>} />
					<Route
						path="/something-else"
						element={<h1>There seems to be nothing here..</h1>}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
