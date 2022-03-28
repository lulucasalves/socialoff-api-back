const linkedinVideoModule = require('../modules/linkedinVideoModule')

async function linkedinVideoService(req, res) {
  const { url } = req.body

  try {
    const link = await linkedinVideoModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = linkedinVideoService
