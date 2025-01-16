# auto-sync-fork

## Auto-run using GitHub Actions (Recommended)

- Go to repository settings
- Select Secrets and variables → Actions
- Add new secrets with name
  - PERSONAL_TOKEN: your github account token, not repository token. example: ghp_xxx
- Add new variables with name
  - YOUR_USERNAME_OR_ORGANIZATION_NAME: your username or organization name. example: paulpham157
- # Cronjob default is weekly on Sunday at 00:00, change suitable for you in .github/workflows/sync.yml

## Running Manually on Local Machine

- Install node.js
- Install dependencies
- Copy .env.example to .env and fill in the values
- Run script "npm start"

## Telegram Notification Setup (Optional)

1. Create a new Telegram bot via [@BotFather](https://t.me/botfather)
2. Get the bot token from @BotFather
3. Get your chat ID by:
   - Send a message to your bot
   - Visit: https://api.telegram.org/botTELEGRAM_BOT_TOKEN/getUpdates on browser. Example: https://api.telegram.org/bot123:ABCDEF/getUpdates
   - Find your chat ID in the response
4. Add secrets in GitHub repository:
   - TELEGRAM_BOT_TOKEN: Your bot token. example: 123:ABCDEF
   - TELEGRAM_CHAT_ID: Your chat ID. example: 1234567890
