const puppeteer = require('puppeteer')

async function facebookModule(url) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  try {
    await page.goto(`https://pt.savefrom.net/86`)
  } catch {
    await page.goto(`https://pt.savefrom.net/86`)
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
