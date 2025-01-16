import { CONSTANT } from './constant.js';
import { sendTelegramMessage } from './telegram.js';

async function getAllForkedRepos() {
    try {
        let page = 1;
        const perPage = 30;
        let allRepos = [];
        let hasMore = true;

        while (hasMore) {
            const response = await fetch(`${CONSTANT.BASE_URL}/user/repos?page=${page}&per_page=${perPage}`, {
                method: 'GET',
                headers: CONSTANT.HEADERS
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
        console.error('Error:', error);
        await sendTelegramMessage('Error when getting all forked repos: ' + error);
        return [];
    }
}

export { getAllForkedRepos }; 