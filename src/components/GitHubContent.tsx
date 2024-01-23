import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

interface GitHubCardProps {
    name: string;
    description: string;
    url: string;
    language: string;
}

function GitHubCard(props: GitHubCardProps) {
    const { name, description, url, language } = props;

    return (
        <a target="_blank" href={url}>
            <div className="grid grid-cols-[260px,80px] h-[150px] gap-4 w-fit bg-green-400 border border-black rounded-lg p-2 m-4 shadow-lg hover:bg-green-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <div>
                    <h3 className="font-bold tracking-wider m-1">{name}</h3>
                    <p className="italic">{description}</p>
                    <p>{`Main Language: ${language}`}</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faGithub} size="5x" />
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
        console.log(lastUpdate, lastUpdateTime, currentTime);

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
            console.log("sup!");
            const cachedData = localStorage.getItem("repoData");
            repoData = cachedData ? JSON.parse(cachedData) : null;
        }
        return repoData;
    }

    useEffect(() => {
        getData().then((repoData: RepoEntry[]) => {
            const cards = repoData.map((repo, idx) => (
                <GitHubCard
                    key={idx}
                    description={repo.description || ""}
                    language={repo.language || ""}
                    name={repo.name}
                    url={repo.url}
                />
            ));
            setGithubCards(cards);
        });
    }, []);

    return (
        <>
            <h2 className="text-white text-4xl text-center font-bold">
                My Projects
            </h2>
            <div className="grid grid-cols-2">{githubCards}</div>;
        </>
    );
}
