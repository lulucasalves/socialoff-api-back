const puppeteer = require('puppeteer')

async function youtubeVideoModule(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://pt.savefrom.net/86/#url=${url}`)

  await page.waitForTimeout(5000)

  await page.click('#sf_submit')

  await page.waitForSelector('.drop-down-box')

  await page.click('.drop-down-box')

  await page.waitForSelector('.link-group .link-download')

  const link = await page.$eval('.link-group .link-download', (x) =>
    x.getAttribute('href')
  )

  await browser.close()

  return link
}

module.exports = youtubeVideoModule
