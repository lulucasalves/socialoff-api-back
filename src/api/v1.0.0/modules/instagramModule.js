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
  console.log('4')

  // await page.goto(process.env.URL, { timeout })

  // await page.waitForSelector('#sf_url')

  // await page.type('#sf_url', url)
  // await page.click('#sf_submit')
  await page.goto(process.env.URL + url)
  console.log('5')

  await page.waitForSelector('.link-download')
  console.log('6')

  const link = await page.$$eval('.def-btn-box .link-download', (scripts) => {
    return scripts.map((x) => x.getAttribute('href'))
  })
  console.log('7')

  await browser.close()
  console.log('8')

  return link
}

module.exports = instagramModule
