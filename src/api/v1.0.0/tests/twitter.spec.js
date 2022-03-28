const twitterModule = require('../modules/twitterModule')

describe('return link', () => {
  it('return twitter link', async () => {
    const url =
      'https://twitter.com/taylorswift13/status/1459023801480474632/photo/1'

    const response = await twitterModule(url)

    expect(typeof response).toBe('object')
  }, 60000)
})
