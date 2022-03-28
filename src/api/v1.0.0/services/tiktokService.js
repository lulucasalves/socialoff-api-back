const tiktokModule = require('../modules/tiktokModule')

async function tiktokService(req, res) {
  const { url } = req.body

  try {
    const link = await tiktokModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = tiktokService
