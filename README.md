# auto-sync-fork

## What is this?

Auto-sync fork is a GitHub Actions workflow that automatically syncs your fork with the upstream repository.

## How to install?

### Auto-run using GitHub Actions (Recommended)

- Go to repository settings
- Select Secrets and variables → Actions
- Add new secrets with name
  - **PERSONAL_TOKEN**: your github account token/github organization token, not repository token. example: 
```
ghp_xxx
```
- Add new variables with name
  - **YOUR_USERNAME_OR_ORGANIZATION_NAME**: your username or organization name. example: 
```
paulpham157
```

> **Note**  
> Cronjob mặc định chạy hàng tuần vào lúc 00:00 Chủ nhật. Bạn có thể thay đổi theo ý muốn trong file `.github/workflows/sync.yml`

### Running Manually on Local Machine

- Install node.js
- Install dependencies
- Copy .env.example to .env and fill in the values
- Run script "npm start"
- Make a cron job in your local machine to run every hour/day/week...

### Telegram Notification (Optional)

1. Create a new Telegram bot via [@BotFather](https://t.me/botfather)
2. Get the bot token from @BotFather
3. Get your chat ID by:
   - Send a message to your bot
   - Visit: https://api.telegram.org/botTELEGRAM_BOT_TOKEN/getUpdates on browser. Example: https://api.telegram.org/bot123:ABCDEF/getUpdates
   - Find your chat ID in the response
4. Add secrets in GitHub repository:
   - **TELEGRAM_BOT_TOKEN**: Your bot token. example: 123:ABCDEF
   - **TELEGRAM_CHAT_ID**: Your chat ID. example: 1234567890
