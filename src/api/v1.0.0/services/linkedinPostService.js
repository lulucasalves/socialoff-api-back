const linkedinPostModule = require('../modules/linkedinPostModule')

async function linkedinPostService(req, res) {
  const { url } = req.body

  try {
    const link = await linkedinPostModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = linkedinPostService
