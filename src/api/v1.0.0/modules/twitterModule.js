const puppeteer = require('puppeteer')
require('dotenv/config')

async function twitterModule(url) {
  if (!url.includes('twitter')) {
    throw Error('invalid url')
  }

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    await page.goto(process.env.URL)
  } catch {
    await page.goto(process.env.URL)
  }

  await page.waitForSelector('#sf_url')

  await page.type('#sf_url', url)

  await page.click('#sf_submit')

  await page.waitForSelector('.link-download')

  const link = await page.$$eval('.def-btn-box .link-download', (scripts) => {
    return scripts.map((x) => x.getAttribute('href'))
  })

  await browser.close()

  return link
}

module.exports = twitterModule
