const puppeteer = require('puppeteer')

const date = new Date()
const url = `https://prograd.ufc.br/pt/category/editais-e-resultados/editais-${date.getFullYear()}/`

async function run () {
  console.log('> Running WebScrapper')

  const browser = await puppeteer.launch({
    args: [
      '--disable-web-security'
    ],
    headless: true
  })

  const page = await browser.newPage()
  await page.goto(url)
    .then(() => console.log(`> Successfully conected to ${url}`))
    .catch(err => console.log(err))

  const post = await page.evaluate(() => {
    function getPostInfo (postNumber) {
        const posts = document.getElementsByTagName('section')[postNumber]
        const titleTag = posts.getElementsByTagName('a')[0]
    
        return {
            title: titleTag.innerText,
            link: titleTag.href
        }
    }

    return getPostInfo(0)
  })

  await browser.close()
  console.log('> WebSrapper Closed!')

  return { post }
}

module.exports = { run }