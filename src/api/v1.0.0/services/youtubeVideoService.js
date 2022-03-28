const youtubeVideoModule = require('../modules/youtubeVideoModule')

async function youtubeVideoService(req, res) {
  const { url } = req.body

  try {
    const link = await youtubeVideoModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = youtubeVideoService
