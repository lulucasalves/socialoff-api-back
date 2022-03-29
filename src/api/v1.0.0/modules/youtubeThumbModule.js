async function youtubeThumbModule(url) {
  if (!url.includes('youtube')) {
    throw Error('invalid url')
  }

  if (!url.includes('https://www.')) {
    const [, urlPersonal] = url.split('youtube.com')
    const newUrl = `https://www.youtube.com${urlPersonal}`

    const [, hash] = newUrl.split('watch?v=')

    const link = `https://i.ytimg.com/vi/${hash}/maxresdefault.jpg`

    return link
  } else {
    const [, hash] = url.split('watch?v=')

    const link = `https://i.ytimg.com/vi/${hash}/maxresdefault.jpg`

    return link
  }
}

module.exports = youtubeThumbModule

