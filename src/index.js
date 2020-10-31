const scraper = require('./services/scraper')
const telegram = require('./lib/telegram')

async function main () {  
  const { post } = await scraper.run()
  await telegram.sendMessage({ message: `${post.title}\n\n${post.link}` })
}

main()