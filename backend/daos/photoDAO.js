const axios = require('axios')

const FORMAT_JSON = 'format=json&nojsoncallback=1'
const FLICKR_FEED_ROUTE = 'feeds/'
const FLICKR_PHOTOS_SEARCH_ROUTE = 'rest/?method=flickr.photos.search'

exports.getPublicFeed = async () => {
    return await axios.get(
        `${process.env.FLICKR_API_URL}/${FLICKR_FEED_ROUTE}/photos_public.gne?${FORMAT_JSON}`
    )
}

exports.getPhotosByKeyword = async (keyword, page) => {
    const searchRoute =
        `${process.env.FLICKR_API_URL}/${FLICKR_PHOTOS_SEARCH_ROUTE}&api_key=${process.env.FLICKR_API_KEY}&${FORMAT_JSON}
        &extras=url_m&per_page=50&sort=relevance&media=photos`

    return await axios.get(
        `${searchRoute}&tags=${keyword}&page=${page}`
    )
}
