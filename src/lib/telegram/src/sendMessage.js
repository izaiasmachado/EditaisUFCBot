const api = require('../util/api')
const { TELEGRAM_CHANNEL_ID } = process.env

module.exports = async ({ message }) => {
    const { data } = await api.get(`sendMessage?chat_id=${TELEGRAM_CHANNEL_ID}&text=${encodeURI(message)}&parse_mode=markdown`)    
    return (data.ok) ? data : new Error(`Couldn't send message`)
}