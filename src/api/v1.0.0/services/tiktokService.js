const tiktokModule = require('../modules/tiktokModule')

async function tiktokService(req, res) {
  const { url } = req.body

  try {
    const link = await tiktokModule(url)

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

module.exports = tiktokService
