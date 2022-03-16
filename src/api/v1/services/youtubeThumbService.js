const youtubeThumbModule = require('../modules/youtubeThumbModule')

async function youtubeThumbService(req, res) {
  const { url } = req.body

  const link = await youtubeThumbModule(url)

  if (link) {
    res.status(200).json({ error: false, link })
  } else {
    res.status(400).json({
      error: true,
      link: ''
    })
  }
}

module.exports = youtubeThumbService
