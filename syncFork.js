import { CONSTANT } from './constant.js';
import { sendTelegramMessage } from './telegram.js';

async function syncFork(repoName, branchName) {
  try {
    const response = await fetch(`${CONSTANT.BASE_URL}/repos/${CONSTANT.YOUR_USERNAME_OR_ORGANIZATION_NAME}/${repoName}/merge-upstream`, {
      method: 'POST',
      headers: CONSTANT.HEADERS,
      body: JSON.stringify({
        branch: branchName
      }),
    });
    const data = await response.json();
    const message = data.message;
    if (message.includes('There are merge conflicts')) {
        console.error(repoName + ':' + branchName, 'has conflicts that must be resolved');
        await sendTelegramMessage(repoName + ':' + branchName + ' has conflicts that must be resolved');
    }
  } catch (error) {
    console.error(repoName + ':' + branchName, 'Error:', error);
    await sendTelegramMessage(repoName + ':' + branchName + ' Error when syncing fork: ' + error);
  }
}

export { syncFork };