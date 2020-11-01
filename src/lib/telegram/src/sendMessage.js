const api = require('../util/api')
const { TELEGRAM_CHANNEL_ID } = process.env

module.exports = async ({ text, parse_mode }) => {
    const { data } = await api.get(`sendMessage`, {
        params: {
            chat_id: TELEGRAM_CHANNEL_ID,
            text,
            parse_mode
        }
    })    
    return data
}