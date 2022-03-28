const facebookModule = require('../modules/facebookModule')

async function facebookService(req, res) {
  const { url } = req.body

  try {
    const link = await facebookModule(url)

    res.status(200).json({ error: false, link })
  } catch {
    res.status(400).json({
      error: true,
      link: '',
      message: 'error in catch'
    })
  }
}

module.exports = facebookService
