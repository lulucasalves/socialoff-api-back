const twitterModule = require('../modules/twitterModule')

async function twitterService(req, res) {
  const { url } = req.body

  try {
    const link = await twitterModule(url)

    if (link) {
      res.status(200).json({ error: false, link })
    } else {
      res.status(400).json({
        error: true,
        link: ''
      })
    }
  } catch {
    res.status(400).json({
      error: true,
      link: ''
    })
  }
}

module.exports = twitterService
