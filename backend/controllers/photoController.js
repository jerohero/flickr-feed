const photoDAO = require('../daos/photoDAO')

exports.getPhotoFeed = async (req, res) => {
    const feed = await photoDAO.getPublicFeed()

    return feed.status !== 200
        ? res.status(feed.status).json({'error': feed.data.message})
        : res.status(200).json(feed)
}
