// const puppeteer = require('puppeteer')

// async function start() {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   const where = 'linkedin'

//   if (where === 'youtube' || where === 'tiktok') {
//     const link = 'https://www.tiktok.com/@bealvesc/video/6931417063797918981'

//     await page.goto(`https://pt.savefrom.net/86/#url=${link}`)

//     await page.waitForTimeout(5000)

//     await page.click('#sf_submit')

//     await page.waitForSelector('.drop-down-box')

//     await page.click('.drop-down-box')

//     await page.waitForSelector('.link-group .link-download')

//     const scripts = await page.$eval('.link-group .link-download', (x) =>
//       x.getAttribute('href')
//     )

//     console.log(scripts)
//   } else if (
//     where === 'instagram' ||
//     where === 'facebook' ||
//     where === 'twitter'
//   ) {
//     const link = 'https://twitter.com/i/status/1244791209903693824'

//     await page.goto(`https://pt.savefrom.net/86/#url=${link}`)

//     await page.waitForTimeout(5000)

//     await page.click('#sf_submit')

//     await page.waitForSelector('.link-download')

//     const scripts = await page.$$eval(
//       '.def-btn-box .link-download',
//       (scripts) => {
//         return scripts.map((x) => x.getAttribute('href'))
//       }
//     )

//     console.log(scripts)
//   } else if (where == 'linkedin') {
//     const type = 'image'
//     const link =
//       'https://www.linkedin.com/posts/steffanie-sorrenti-258b1218a_bomdia-softwares-dev-activity-6909547532620632064-iU9L?utm_source=linkedin_share&utm_medium=member_desktop_web'

//     if (type === 'image') {
//       await page.goto(link)

//       const photos = await page.$eval(
//         '.share-images__image-container img',
//         ({ src }) => src
//       )

//       console.log(photos)
//     }

//     if (type === 'video') {
//       await page.goto(link)

//       const photos = await page.$eval('video', (x) =>
//         x.getAttribute('data-sources')
//       )

//       const convertJson = JSON.parse(photos)

//       const genLink = convertJson[1].src

//       console.log(genLink)
//     }
//   }
//   await browser.close()
// }
