const youtubeThumbModule = require('../modules/youtubeThumbModule')

async function youtubeThumbService(req, res) {
  const { url } = req.body

  try {
    const link = await youtubeThumbModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = youtubeThumbService
