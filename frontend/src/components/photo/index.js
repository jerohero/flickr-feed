import React from 'react'
import './photo.scss'

function Photo(props) {
    const { photo } = props

    const getPhotoUrl = () => {
        return photo.url_m
            ? photo.url_m
            : photo.media.m
    }

    return (
        <div className={ 'photo' }>
            <img src={ getPhotoUrl() } alt={ 'photo' } />
        </div>
    );
}

export default Photo
