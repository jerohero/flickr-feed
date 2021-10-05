import React from 'react'
import './photo.scss'

function Photo(props) {
    const { photo } = props

    const getPhotoUrl = () => {
        return photo.url_m
            ? photo.url_m
            : photo.media?.m
    }

    const photoUrl = getPhotoUrl()

    return (
        <div className={ 'photo' }>
            { photoUrl && (
                <img src={ getPhotoUrl() } alt={ 'photo' } />
            )}
        </div>
    );
}

export default Photo
