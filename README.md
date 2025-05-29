# Auto-sync fork

## What is this?

Auto-sync fork is a GitHub Actions workflow that automatically syncs your public fork with the upstream repository.

## How to install?

### Auto-run using GitHub Actions (Recommended)

- Go to repository settings
- Select Secrets and variables → Actions
- Add new secrets with name
  - **PERSONAL_TOKEN**: your GitHub account token/GitHub organization token, not repository token. example: `ghp_xxxxxxxxxxxxxxxxxxxxx`
- Add new variables with name
  - **YOUR_USERNAME_OR_ORGANIZATION_NAME**: your username or organization name. example: `paulpham157`

> **Note**
> Cronjob will run every Sunday at 00:00, you can change it in file `.github/workflows/sync.yml`

### Running Manually on Local Machine

- Install Node.js
- Install dependencies
- Copy `.env.example` to `.env` and fill in the values
- Run script 
```bash
npm start
```
- Make the process run in background
- Make a cron job on your own local machine to run every hour/day/week...

### Telegram Notification (Optional)

1. Create a new Telegram bot via [@BotFather](https://t.me/botfather)

2. Get the bot token from @BotFather

3. Get your chat ID by:
   - Send a message to your bot
   - Visit: https://api.telegram.org/botTELEGRAM_BOT_TOKEN/getUpdates on browser. Example: https://api.telegram.org/bot123:ABCDEF/getUpdates
   - Find your chat ID in the response

4. Add secrets in GitHub repository:
   - **TELEGRAM_BOT_TOKEN**: Your bot token. example: `123:ABCDEF`
   - **TELEGRAM_CHAT_ID**: Your chat ID. example: `1234567890`

## Wanna buy me a coffee?

- Click the sponsor button on [auto-sync-fork repository](https://github.com/paulpham157/auto-sync-fork) on GitHub

> **Note**
> This is also my first time using Gemini for Pull Request reviews. All configurations are stored in the `.gemini` directory
