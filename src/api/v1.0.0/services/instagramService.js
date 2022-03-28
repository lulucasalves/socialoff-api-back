const instagramModule = require('../modules/instagramModule')

async function instagramService(req, res) {
  const { url } = req.body

  try {
    const link = await instagramModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = instagramService
