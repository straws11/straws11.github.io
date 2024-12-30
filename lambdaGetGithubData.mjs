import {Octokit} from '@octokit/core';
 
 export const handler = async (event) => {
  try {
    const apiKey = process.env.GITHUB_API_KEY;
    // all other api stuff
    
    const octokit = new Octokit({
      auth: apiKey
    });
    
    const response = await octokit.request('GET /user/repos', {
      visibility: 'public',
      headers: {
        'User-Agent': 'Personal-WebPage',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    
    // filter to only contain fields I want to use in my app
    const filteredData = response.data.map(repo =>({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      pushedAt: repo.pushed_at,
      
    }));
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(filteredData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({error: error.message}),
    };
  }
};
