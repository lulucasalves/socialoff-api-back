const linkedinVideoModule = require('../modules/linkedinVideoModule')
const linkedinPostModule = require('../modules/linkedinPostModule')

describe('return link', () => {
  it('return linkedin video link', async () => {
    const url =
      'https://www.linkedin.com/posts/delltechnologies_empresasqueinspiram-activity-6907490295878176768-8LpB'

    const response = await linkedinVideoModule(url)

    expect(typeof response).toBe('string')
  }, 60000)
})

describe('return link', () => {
  it('return linkedin post link', async () => {
    const url =
      'https://www.linkedin.com/posts/demetriusolivo_mundocorporativo-futurismo-mercadodetrabalho-activity-6912406315264798720-2c0U'

    const response = await linkedinPostModule(url)

    expect(typeof response).toBe('string')
  }, 60000)
})
