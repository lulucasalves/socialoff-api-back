const instagramModule = require('../modules/instagramModule')

describe('return link', () => {
  it('return instagram link', async () => {
    const url = 'https://www.instagram.com/p/CbcSrZkgRGs/'

    const response = await instagramModule(url)

    expect(typeof response).toBe('object')
  }, 60000)
})
