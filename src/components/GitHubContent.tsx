import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

interface GitHubCardProps {
    name: string;
    description: string;
    url: string;
    language: string;
    pushedDate: string;
}

function GitHubCard(props: GitHubCardProps) {
    const { name, description, url, language, pushedDate } = props;
    return (
        <a target="_blank" href={url} className="m-4">
            <div className="grid text-xs w-[250px] h-[192px] grid-cols-[200px,35px] sm:text-lg sm:w-full sm:grid-cols-[340px,60px] lg:grid-cols-[380px,83.5px] lg:w-[480px] xl: place-content-between bg-[#8ca9bc] p-2 rounded-3xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="h-[168px] flex flex-col justify-between">
                    <div><h3 className="font-bold tracking-wider m-1 bg-[#3F708F] rounded-2xl p-2">{name}</h3>
                    <p className="italic">{description}</p></div>
                    <div>
                        <p>{`Main Language: ${language}`}</p>
                        <p className="text-right">{`Updated on: ${
                            pushedDate.split("T")[0]
                        }`}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size={window.innerWidth > 1024 ? "5x" : "3x"}
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
    pushedAt: string;
}

export default function GitHubContent() {
    const [githubCards, setGithubCards] = useState<ReactNode[]>([]);

    const fetchDataFromLambda = async (): Promise<RepoEntry[]> => {
        try {
            const lambdaEndpoint =
                "https://nbpu7nrcc7rbqvrbpqk3o5ylhq0uojwd.lambda-url.eu-north-1.on.aws/";
            //make a get request to githubRepos lambda function
            const response = await axios.get(lambdaEndpoint);

            // handle api response
            if (response.status === 200) {
                if (response.data) {
                    console.log("Lambda Response:", response.data);
                    return response.data;
                } else {
                    throw new Error("Lambda response body is undefined!");
                }
            } else {
                //not 200 code
                throw new Error(
                    `Lambda request failed with status ${response.status}`
                );
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    async function getData() {
        // Get data from either localStorage or make request if outdated/not existing
        const lastUpdate = localStorage.getItem("lastGitHubRetrieve");
        const lastUpdateTime = lastUpdate ? parseInt(lastUpdate, 10) : null;
        const currentTime = Date.now();

        var repoData: RepoEntry[];

        // if outdated, call api again
        if (
            !lastUpdateTime ||
            currentTime - lastUpdateTime > 24 * 60 * 60 * 1000
        ) {
            repoData = await fetchDataFromLambda();
            //update cached data
            localStorage.setItem("lastGitHubRetrieve", currentTime.toString());
            localStorage.setItem("repoData", JSON.stringify(repoData));
        } else {
            // else retrieve from local storage
            const cachedData = localStorage.getItem("repoData");
            repoData = cachedData ? JSON.parse(cachedData) : null;
        }
        return repoData;
    }

    useEffect(() => {
        getData().then((repoData: RepoEntry[]) => {
            // sort by update date
            const sortedRepoData = repoData
                .slice()
                .sort(
                    (a, b) => Date.parse(b.pushedAt) - Date.parse(a.pushedAt)
                );

            // map to cards
            const cards = sortedRepoData.map((repo, idx) => (
                <GitHubCard
                    key={idx}
                    description={repo.description || ""}
                    language={repo.language || ""}
                    name={repo.name.toUpperCase()}
                    url={repo.url}
                    pushedDate={repo.pushedAt}
                />
            ));
            setGithubCards(cards);
        });
    }, []);

    return (
        <section id="projects">
            <h2 className="text-[#051C2C] text-xl md:text-4xl md:pt-16 text-center underline font-bold">
                MY PROJECTS
            </h2>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-2 mx-auto">
                    {githubCards}
                </div>
            </div>
        </section>
    );
}
