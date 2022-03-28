const puppeteer = require('puppeteer')
require('dotenv/config')

async function facebookModule(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  if (!url.includes('fb') && !url.includes('facebook')) {
    throw Error('invalid url')
  }

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

module.exports = facebookModule
