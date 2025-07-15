import NavBar from "./components/NavBar";
import Links from "./components/Links";
import CVPage from "./components/CVPage";

function App() {
    return (
        <>
            <div className="app bg-[#50606b]">
                <CVPage />
                <footer className="bg-gray-900 text-white text-sm text-center py-4">
                    Copyright &copy; {new Date().getFullYear()} Dylan Swarts
                </footer>
            </div>
        </>
    );
}

export default App;
