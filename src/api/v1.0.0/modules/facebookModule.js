const puppeteer = require('puppeteer')
require('dotenv/config')

const myargs = [
  '--autoplay-policy=user-gesture-required',
  '--disable-background-networking',
  '--disable-background-timer-throttling',
  '--disable-backgrounding-occluded-windows',
  '--disable-breakpad',
  '--disable-client-side-phishing-detection',
  '--disable-component-update',
  '--disable-default-apps',
  '--disable-dev-shm-usage',
  '--disable-domain-reliability',
  '--disable-extensions',
  '--disable-features=AudioServiceOutOfProcess',
  '--disable-hang-monitor',
  '--disable-ipc-flooding-protection',
  '--disable-notifications',
  '--disable-offer-store-unmasked-wallet-cards',
  '--disable-popup-blocking',
  '--disable-print-preview',
  '--disable-prompt-on-repost',
  '--disable-renderer-backgrounding',
  '--disable-setuid-sandbox',
  '--disable-speech-api',
  '--disable-sync',
  '--hide-scrollbars',
  '--ignore-gpu-blacklist',
  '--metrics-recording-only',
  '--mute-audio',
  '--no-default-browser-check',
  '--no-first-run',
  '--no-pings',
  '--no-sandbox',
  '--no-zygote',
  '--password-store=basic',
  '--use-gl=swiftshader',
  '--use-mock-keychain'
]

async function facebookModule(url) {
  const timeout = 30000

  const browser = await puppeteer.launch({
    headless: true,
    args: myargs,
    timeout
  })

  const page = await browser.newPage()

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  )

  if (!url.includes('fb') && !url.includes('facebook')) {
    throw Error('invalid url')
  }

  if (url.includes('/photo') || url.includes('/post')) {
    await page.goto(url, { timeout })

    await page.waitForSelector('div div div div div div div div div div img')

    const link = await page.$$eval(
      'div div div div div div div div div div img',
      (scripts) => {
        return scripts.map((x) => x.getAttribute('src'))
      }
    )
    await browser.close()

    return link
  } else {
    await page.goto('https://fdown.net/', { timeout })

    await page.waitForSelector('form .input-group input')

    await page.type('form .input-group input', url)
    await page.click('form .input-group-btn button')

    await page.waitForSelector('#sdlink')

    const link = await page.$$eval('#sdlink', (x) => {
      return x.getAttribute('href')
    })

    await browser.close()

    return link
  }
}

module.exports = facebookModule
