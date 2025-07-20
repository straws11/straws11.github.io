import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchReadMe, getData, RepoEntry } from "../githubUtils";

interface GitHubCardProps {
    name: string;
    description: string;
    url: string;
    language: string;
    pushedDate: string;
    forked: boolean;
}

/** Card showing an individual project */
function GitHubCard(props: GitHubCardProps) {
    const { name, description, url, language, pushedDate, forked } = props;
    const formattedDate = pushedDate.split("T")[0];
    const [showReadMe, setShowReadMe] = useState<boolean>(false);
    const [loadingReadMe, setLoadingReadMe] = useState<boolean>(false);
    const [readMe, setReadMe] = useState<string>("");

    // disable scrolling while modal open
    useEffect(() => {
        if (showReadMe) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showReadMe]);

    /** Fetch and then update boolean to show readme */
    async function getShowReadMe() {
        setShowReadMe(true);
        if (readMe === "") {
            setLoadingReadMe(true);
            const readMe = await fetchReadMe(name);
            setReadMe(readMe);
            setLoadingReadMe(false);
        }
    }

    return (
        <div className="bg-[#8ca9bc] rounded-3xl shadow-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full overflow-hidden">
            {/* Text block */}
            <div className="flex-1 min-w-0 break-words">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-bold tracking-wider bg-[#3F708F] text-white rounded-xl px-3 py-1 inline-block text-base sm:text-lg">
                        {name}
                    </h3>

                    {forked && (
                        <span className="text-xs bg-[#3F708F] text-white px-2 py-0.5 rounded-full font-semibold">
                            Forked
                        </span>
                    )}

                    <button
                        onClick={getShowReadMe}
                        title="View README"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} className="hover:text-slate-200 transition-colors text-2xl sm:text-xl text-slate-800" />
                    </button>

                </div>

                <p className="italic text-sm sm:text-base mb-2 line-clamp-3 break-words">
                    {description}
                </p>

                <div className="flex justify-between text-xs sm:text-sm text-black/80 mt-4 flex-wrap gap-2">
                    <p>
                        Main Language: <span className="font-medium">{language}</span>
                    </p>
                    <p className="text-right">Updated: {formattedDate}</p>
                </div>
            </div>

            {/* GitHub icon link */}
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="self-center sm:self-start shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
                title="View on GitHub"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-4xl sm:text-5xl text-black"
                />
            </a>
            {/* ReadMe Modal */}
            {
                showReadMe && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                        <div className="bg-slate-700 p-6 rounded-xl max-w-[90vh] w-full max-h-[90vh] overflow-y-auto relative">
                            <button
                                className="absolute top-2 right-2 text-lg text-black"
                                onClick={() => setShowReadMe(false)}
                            >
                                ✖
                            </button>
                            {loadingReadMe ? (
                                <div className="flex flex-col justify-center items-center p-8 space-y-4">
                                    <p>Attempting to load readme file</p>
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
                                </div>
                            ) : (
                                <div className="prose dark:prose-invert max-w-none">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {readMe}
                                    </ReactMarkdown>
                                </div>)
                            }
                        </div>
                    </div>
                )
            }
        </div >
    );
}


/** Component containing all the github project cards */
export default function GitHubContent() {
    const [githubCards, setGithubCards] = useState<ReactNode[]>([]);

    useEffect(() => {
        getData().then((repoData: RepoEntry[]) => {
            // sort by update date
            const sortedRepoData = repoData
                .slice()
                .sort(
                    (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
                );

            // map to cards
            const cards = sortedRepoData.map((repo, idx) => (
                <GitHubCard
                    key={idx}
                    description={repo.description || ""}
                    language={repo.language || ""}
                    name={repo.name.toUpperCase()}
                    url={repo.url}
                    forked={repo.forked}
                    pushedDate={repo.updatedAt}
                />
            ));
            setGithubCards(cards);
        });
    }, []);

    return (
        <div className="bg-slate-900 text-slate-100 w-full px-4 sm:px-6 lg:px-8 py-6">
            {githubCards.length > 0 ? (
                <div className="grid w-full max-w-6xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                    {githubCards}
                </div>
            ) : (
                <h2 className="text-md md:text-2xl text-center p-20 italic text-slate-400">
                    Loading...
                </h2>
            )}
        </div>
    );
}
