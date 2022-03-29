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

async function instagramModule(url) {
  if (!url.includes('instagram')) {
    throw Error('invalid url')
  }

  console.log('1')

  const timeout = 30000

  const browser = await puppeteer.launch({
    headless: true,
    args: myargs
  })
  console.log('2')

  const page = await browser.newPage()
  console.log('3')

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  )

  await page.goto('https://snapinsta.app/', { timeout })
  await page.waitForSelector('#url')

  await page.type('#url', url)
  await page.click('#send')

  await page.waitForSelector('.download-items .abutton')

  const link = await page.$$eval('.download-items .abutton', (scripts) => {
    return scripts.map((x) => x.getAttribute('href'))
  })

  await browser.close()

  return link
}

module.exports = instagramModule
