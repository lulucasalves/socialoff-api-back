const youtubeVideoModule = require('../modules/youtubeVideoModule')
const youtubeThumbModule = require('../modules/youtubeThumbModule')

describe('return link', () => {
  it('return youtube video link', async () => {
    const url = 'https://www.youtube.com/watch?v=fNQfNsd7fdk'

    const response = await youtubeVideoModule(url)

    expect(typeof response).toBe('string')
  }, 60000)
})

describe('return link', () => {
  it('return youtube thumb link', async () => {
    const url = 'https://www.youtube.com/watch?v=fNQfNsd7fdk'

    const response = await youtubeThumbModule(url)

    expect(typeof response).toBe('string')
  }, 60000)
})
