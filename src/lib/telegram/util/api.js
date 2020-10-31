const axios = require('axios')
const { TELEGRAM_TOKEN } = process.env

const api = axios.create({ baseURL: `https://api.telegram.org/bot${TELEGRAM_TOKEN}/` })
module.exports = api