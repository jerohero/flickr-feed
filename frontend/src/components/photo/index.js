import React from 'react'
import './photo.scss'

function Photo(props) {
    const { photo } = props

    return (
        <div className={ 'photo' }>
            <img src={ photo.media.m } alt=""/>
        </div>
    );
}

export default Photo
