const tiktokModule = require('../modules/tiktokModule')

describe('return link', () => {
  it('return tiktok link', async () => {
    const url = 'https://www.tiktok.com/@alvess_bea/video/7062016412503510278'

    const response = await tiktokModule(url)

    expect(typeof response).toBe('string')
  }, 60000)
})
