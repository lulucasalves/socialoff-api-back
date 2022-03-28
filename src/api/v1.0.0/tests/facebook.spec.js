const facebookModule = require('../modules/facebookModule')

describe('return link', () => {
  it('return facebook link', async () => {
    const url =
      'https://www.facebook.com/uberdepressivo/photos/a.1335569643140503/5352335728130521'

    const response = await facebookModule(url)

    expect(typeof response).toBe('object')
  }, 60000)
})
