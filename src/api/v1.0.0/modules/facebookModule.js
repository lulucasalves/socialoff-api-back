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
    headless: false,
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

  await page.goto('https://x2download.com/en/download-video-facebook', {
    timeout
  })

  await page.waitForSelector('#s_input')

  await page.type('#s_input', url)
  await page.click('#search-form button')

  await page.waitForSelector('#asuccess')

  const link = await page.$eval('#asuccess', (x) => {
    return x.getAttribute('href')
  })

  await browser.close()

  return link
}

module.exports = facebookModule
