const puppeteer = require('puppeteer')

async function linkedinPostModule(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  if (url.includes('https://media-exp1')) {
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
    const photo = await page.$eval(
      '.share-images__image-container img',
      ({ src }) => src
    )

    await browser.close()

    return photo
  } catch {
    const photo = await page.$eval(
      '.share-images__image-container img',
      ({ src }) => src
    )

    await browser.close()

    return photo
  }
}

module.exports = linkedinPostModule
