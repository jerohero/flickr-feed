const photoDAO = require('../daos/photoDAO')

exports.getPhotoFeed = async (req, res) => {
    const feed = await photoDAO.getPublicFeed()

    return feed.status !== 200
        ? res.status(feed.status).json({'error': feed.data.message})
        : res.status(200).json(feed.data)
}

exports.getPhotosByKeyword = async (req, res) => {
    let { keyword, page } = req.params

    if (!page)
        page = 1

    const photos = await photoDAO.getPhotosByKeyword(keyword, page)

    return photos.status !== 200
        ? res.status(photos.status).json({'error': photos.data.message})
        : res.status(200).json(photos.data)
}
