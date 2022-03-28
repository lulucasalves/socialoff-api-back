const puppeteer = require('puppeteer')

async function linkedinVideoModule(url) {
  if (!url.includes('linkedin') && !url.includes('dms')) {
    throw Error('invalid url')
  }

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  if (url.includes('https://dms.licdn')) {
    return url
  }

  if (!url.includes('https://www.')) {
    const [, urlPersonal] = url.split('linkedin.com')
    const newUrl = `https://www.linkedin.com${urlPersonal}`
    await page.goto(newUrl)
  } else {
    await page.goto(url)
  }

  try {
    const video = await page.$eval('video', (x) =>
      x.getAttribute('data-sources')
    )

    const convertJson = JSON.parse(video)

    const genLink = convertJson[1].src

    await browser.close()

    return genLink
  } catch {
    const video = await page.$eval('video', (x) =>
      x.getAttribute('data-sources')
    )

    const convertJson = JSON.parse(video)

    const genLink = convertJson[1].src

    await browser.close()

    return genLink
  }
}

module.exports = linkedinVideoModule
