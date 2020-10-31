const scraper = require('./services/scraper')
const telegram = require('./lib/telegram')
const watchdog = require('./services/watchdog')

async function main () {
  const { post } = await scraper.run()
  const changed = await watchdog.hasChanged({ post })
  if (changed) await telegram.sendMessage({ message: `${post.title}\n\n${post.link}` })
}

setInterval(main, 5 * 1000)