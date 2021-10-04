const axios = require('axios')

const FLICKR_FEED_ROUTE = 'feeds/'

exports.getPublicFeed = async () => {
    return await axios.get(
        process.env.FLICKR_API_URL + FLICKR_FEED_ROUTE + 'photos_public.gne?format=json&nojsoncallback=1'
    )
}
