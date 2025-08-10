import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Tutoring() {
    return (
        <main className="p-8 max-w-3xl mx-auto text-slate-300">
            <h2 className="text-xl sm:text-4xl font-extrabold text-cyan-400 mb-6">
                Online CS & Programming Tutoring
            </h2>
            <p className="text-lg sm:text-xl mb-10 max-w-prose">
                Personalized 1-on-1 sessions for programming and computer science students worldwide.
            </p>

            <section className="mb-10">
                <h3 className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Who I Help</h3>
                <ul className="space-y-2 text-md sm:text-xl text-slate-200 max-w-prose">
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>International CS students needing support with coursework, exams, and projects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Anyone who wants to learn or advance their skills in programming.</span>
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h3 className="text-lg sm:text-2xl font-bold text-cyan-400 mb-3">What I Teach</h3>
                <ul className="space-y-2 text-md sm:text-xl text-slate-200 max-w-prose">
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Beginner-friendly lessons in Python, JavaScript, Java, and C</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Advanced topics like OOP, pointers, and memory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Core computer science: data structures and algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Problem-solving skills and exam preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Flexible to cover any programming or CS topic you need</span>
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h3 className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">How It Works</h3>
                <ul className="space-y-2 text-md sm:text-xl text-slate-200 max-w-prose">
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Sessions are conducted via Google Meet or Discord with live coding and screensharing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Flexible scheduling and pay-as-you-go options.</span>
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h3 className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Pricing</h3>
                <ul className="space-y-2 text-md sm:text-xl text-slate-200 max-w-prose">
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Starting at $20 USD per hour.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faChevronRight} className="text-cyan-400 mt-1" />
                        <span>Free 20-minute introductory session available.</span>
                    </li>
                </ul>
            </section>
            <section className="mb-10 text-center">
                <a
                    className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 text-lg sm:text-xl font-semibold text-slate-900 hover:bg-cyan-400 transition"
                    href="mailto:dswarts11@gmail.com?subject=Tutoring%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Contact Me
                </a>
            </section>
        </main>
    );
}
