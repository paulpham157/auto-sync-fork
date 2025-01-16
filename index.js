import 'dotenv/config';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const BASE_URL = "https://api.github.com";
const HEADERS = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28'
}

async function getAllForkedRepos() {
    try {
        let page = 1;
        const perPage = 30;
        let allRepos = [];
        let hasMore = true;

        while (hasMore) {
            const response = await fetch(`${BASE_URL}/user/repos?page=${page}&per_page=${perPage}`, {
                method: 'GET',
                headers: HEADERS
            });

            const repos = await response.json();
            
            if (!repos || repos.length === 0) {
                hasMore = false;
                break;
            }

            const repoDetails = repos
                .filter((repo) => repo.fork === true)
                .map((repo) => (
                            {
                                repoName: repo.name,
                                branchName: repo.default_branch
                            }
                        )
                    );

            allRepos = [...allRepos, ...repoDetails];

            if (repos.length < perPage) {
                hasMore = false;
                break;
            }
            
            page++;
        }

        return allRepos;
    } catch (error) {
        console.error('Lỗi:', error);
        return [];
    }
}

async function syncFork(repoName, branchName) {
  try {
    const response = await fetch(`${BASE_URL}/repos/paulpham157/${repoName}/merge-upstream`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        branch: branchName
      }),
    });
    const data = await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

const allRepos = await getAllForkedRepos();

for (const { repoName, branchName } of allRepos) {
    await syncFork(repoName, branchName);
}
