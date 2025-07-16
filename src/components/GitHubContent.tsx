import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useState } from "react";

interface GitHubCardProps {
    name: string;
    description: string;
    url: string;
    language: string;
    pushedDate: string;
    forked: boolean;
}

function GitHubCard(props: GitHubCardProps) {
    const { name, description, url, language, pushedDate, forked } = props;
    const formattedDate = pushedDate.split("T")[0];

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="block transition-transform duration-300 ease-in-out hover:scale-105 w-full"
        >
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

                {/* Icon block */}
                <div className="self-center sm:self-start shrink-0">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-4xl sm:text-5xl text-black"
                    />
                </div>
            </div>
        </a>
    );
}

interface RepoEntry {
    name: string;
    description: string | null;
    url: string;
    language: string | null;
    updatedAt: string;
    forked: boolean;
}

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

/** Extract fields from github returned json into a repo entry array */
function extractRepoEntries(data: any): RepoEntry[] {
    if (data.constructor !== Array) return [];
    const entries = data.map((repo) => {
        const entry: RepoEntry = {
            url: repo.html_url,
            name: repo.name,
            language: repo.language,
            description: repo.description,
            updatedAt: repo.updated_at,
            forked: repo.fork,
        };
        return entry;
    });
    return entries;
}

/** Make github request and extract relevant data */
async function fetchDataFromGithub(): Promise<RepoEntry[]> {
    try {
        const repoUrl = "https://api.github.com/users/straws11/repos";
        // make a get request
        const response = await fetch(repoUrl,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        // handle api response
        if (response.ok) {
            const data = await response.json();
            if (data === null) {
                console.error("Response body is undefined!");
                return [];
            }
            // data is present
            console.log("GitHub Response:", data);
            const allEntries: RepoEntry[] = extractRepoEntries(data);
            return removeRedundantRepos(allEntries);

        } else {
            //not 200 code
            console.error(`Request failed with status ${response.status}`);
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

/** Get data from either localStorage or make request if outdated/not existing */
async function getData() {
    const lastUpdate = localStorage.getItem("lastGitHubRetrieve");
    const lastUpdateTime = lastUpdate ? parseInt(lastUpdate, 10) : null;
    const currentTime = Date.now();

    var repoData: RepoEntry[];

    // if outdated, call api again
    if (
        !lastUpdateTime ||
        currentTime - lastUpdateTime > 24 * 60 * 60 * 1000
    ) {
        console.log("Calling");
        repoData = await fetchDataFromGithub();
        //update cached data
        localStorage.setItem("lastGitHubRetrieve", currentTime.toString());
        localStorage.setItem("repoData", JSON.stringify(repoData));
    } else {
        // else retrieve from local storage
        console.log("retrieving");
        const cachedData = localStorage.getItem("repoData");
        repoData = cachedData ? JSON.parse(cachedData) : null;
    }
    return repoData;
}

/** Remove repos matching the blacklist, not relevant to show on page */
function removeRedundantRepos(allEntries: RepoEntry[]): RepoEntry[] {
    const blacklist: string[] = [
        "straws11", // homepage
        "dotfiles", // config
    ];
    return allEntries.filter((repo) => !blacklist.includes(repo.name));
}
