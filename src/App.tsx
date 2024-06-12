import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Main from "./components/Main";

function App() {
    return (
        <>
            <div className="app bg-gradient-to-b from-[#36009C] to-[#9765E0]">
                <NavBar />
                <Main />
                <Links />
                <footer className="bg-gray-900 text-white text-sm text-center py-4">
                    Copyright &copy; {new Date().getFullYear()} Dylan Swarts
                </footer>
            </div>
        </>
    );
}

export default App;
