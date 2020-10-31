const scraper = require('./scraper')

async function main () {
  const { post } = await await scraper.run()
  console.log(post)
}

main()
