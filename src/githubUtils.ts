export interface RepoEntry {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  updatedAt: string;
  forked: boolean;
}

/** Extract fields from github returned json into a repo entry array */
export function extractRepoEntries(data: any): RepoEntry[] {
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
export async function fetchDataFromGithub(): Promise<RepoEntry[]> {
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
      const filtered: RepoEntry[] = removeRedundantRepos(allEntries);
      return filtered;

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
export async function getData() {
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

/** Fetch specified readme raw content from github */
export async function fetchReadMe(repoName: string): Promise<string> {
  const branches = ["main", "master"];
  for (var branch of branches) {
    const rawUrl = `https://raw.githubusercontent.com/straws11/${repoName}/${branch}/README.md`;
    const response = await fetch(rawUrl);
    if (response.ok) {
      const content = await response.text();
      return rewriteImageUrls(content, repoName);
    }
  }
  // readme doesn't exist
  return "## No additional project information";
}

/** Replace relative urls to reflect absolute githubusercontent urls */
function rewriteImageUrls(markdown: string, repoName: string): string {
  const baseUrl = `https://raw.githubusercontent.com/straws11/${repoName}/main/`;
  return markdown.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g, (_match, alt, path) => {
    return `![${alt}](${baseUrl}${path.replace(/^\.\//, '')})`;
  });
}

