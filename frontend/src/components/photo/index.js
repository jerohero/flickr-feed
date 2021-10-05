import React from 'react'
import './photo.scss'

function Photo(props) {
    const { photo } = props
    const FLICKR_URL_BASE = 'https://www.flickr.com/photos'

    const getPhotoUrl = () => {
        return photo.url_m
            ? photo.url_m
            : photo.media?.m
    }

    const getFlickrUrl = () => {
        return photo.link
            ? photo.link
            : `${FLICKR_URL_BASE}/${photo.owner}/${photo.id}`
    }

    const photoUrl = getPhotoUrl()
    const flickrUrl = getFlickrUrl()

    return (
        <div className={ 'photo' }>
            <a href={ flickrUrl } target= { '_blank' }>
                { photoUrl && (
                    <img src={ photoUrl } alt={ 'photo' } />
                )}
            </a>
        </div>
    );
}

export default Photo
