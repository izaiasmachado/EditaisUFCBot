const puppeteer = require('puppeteer')

const date = new Date()
const url = `https://prograd.ufc.br/pt/category/editais-e-resultados/editais-${date.getFullYear()}/`

async function run () {
  const browser = await puppeteer.launch({
    args: ['--disable-web-security'],
    headless: true
  })

  const page = await browser.newPage()
  await page.goto(url)
    .catch(err => {
      throw err
    })

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
  return { post }
}

module.exports = { run }