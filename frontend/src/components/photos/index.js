import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './photos.scss'
import Photo from '../photo'

const Photos = forwardRef((props, ref) => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetchPublicFeed()
    }, [])

    useImperativeHandle(ref, () => ({
        fetchPhotosByKeyword: (keyword) => {
            fetchPhotosByKeyword(keyword)
        },
        fetchPublicFeed: () => {
            fetchPublicFeed()
        }
    }))

    const fetchPublicFeed = () => {
        axios.get(process.env.REACT_APP_API_URL + '/photo/')
            .then((res) => {
                if (!res.data) {
                    return
                }

                setPhotos(parsePhotos(res.data.items))
            })
    }

    const fetchPhotosByKeyword = (keyword) => {
        axios.get(process.env.REACT_APP_API_URL + '/photo/search/' + keyword)
            .then((res) => {
                if (!res.data) {
                    return
                }

                setPhotos(parsePhotos(res.data.photos.photo))
            })
    }

    const parsePhotos = (photos) => {
        return photos.map(parsePhoto)
    }

    const parsePhoto = (photo) => {
        return <Photo photo={ photo } key={ photo.id ? photo.id : photo.link }/>
    }

    return (
        <div className={ 'photos' }>
            <Masonry
                breakpointCols={{default: 5, 1200: 3, 600: 2, 400: 1}}
                className={ 'photosMasonryGrid' }
                columnClassName={ 'photosMasonryGridColumn' }
            >
                { photos }
            </Masonry>
        </div>
    );
})

export default Photos
