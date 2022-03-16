const puppeteer = require('puppeteer')

async function twitterModule(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://pt.savefrom.net/86/#url=${url}`)

  await page.waitForTimeout(5000)

  await page.click('#sf_submit')

  await page.waitForSelector('.link-download')

  const link = await page.$$eval('.def-btn-box .link-download', (scripts) => {
    return scripts.map((x) => x.getAttribute('href'))
  })

  await browser.close()

  return link
}

module.exports = twitterModule
