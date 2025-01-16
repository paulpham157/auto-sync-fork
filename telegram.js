import { CONSTANT } from './constant.js';

async function sendTelegramMessage(message) {
    
    if (!CONSTANT.TELEGRAM_BOT_TOKEN || !CONSTANT.TELEGRAM_CHAT_ID) {
        return;
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${CONSTANT.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CONSTANT.TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error sending Telegram message:', error);
    }
}

export { sendTelegramMessage }; 