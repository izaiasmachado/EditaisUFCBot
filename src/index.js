const scraper = require('./services/scraper')
const watchdog = require('./services/watchdog')
const parser = require('./services/parser')
const telegram = require('./lib/telegram')

async function main () {
  const data = await scraper.run()
  const changed = await watchdog.hasChanged(data)
  const message = await parser(data)

  if (!changed) return false
  await telegram.sendMessage(message)
    .then(async () => {
      await watchdog.save(data)
    })
    .catch(() => {})
}

setInterval(main, process.env.TTL)