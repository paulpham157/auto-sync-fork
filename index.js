import { sendTelegramMessage } from './telegram.js';
import { getAllForkedRepos } from './listGithubRepos.js';
import { syncFork } from './syncFork.js';

const allRepos = await getAllForkedRepos();

if (allRepos.length > 0) {
    for (const { repoName, branchName } of allRepos) {
        await syncFork(repoName, branchName);
    }
}
