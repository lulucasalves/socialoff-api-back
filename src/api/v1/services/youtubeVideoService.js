const youtubeVideoModule = require('../modules/youtubeVideoModule')

async function youtubeVideoService(req, res) {
  const { url } = req.body

  const link = await youtubeVideoModule(url)

  if (link) {
    res.status(200).json({ error: false, link })
  } else {
    res.status(400).json({
      error: true,
      link: ''
    })
  }
}

module.exports = youtubeVideoService
