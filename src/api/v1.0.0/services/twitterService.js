const twitterModule = require('../modules/twitterModule')

async function twitterService(req, res) {
  const { url } = req.body

  try {
    const link = await twitterModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = twitterService
