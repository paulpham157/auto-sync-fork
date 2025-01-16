import 'dotenv/config';

const CONSTANT = {
    PERSONAL_TOKEN: process.env.PERSONAL_TOKEN,
    YOUR_USERNAME_OR_ORGANIZATION_NAME: process.env.YOUR_USERNAME_OR_ORGANIZATION_NAME,
    BASE_URL: "https://api.github.com",
    HEADERS: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.PERSONAL_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
    },
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
}

export { CONSTANT };