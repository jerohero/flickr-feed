import React, { forwardRef, useEffect, useImperativeHandle, useState, lazy, Suspense } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './photos.scss'
import Spinner from '../spinner'
const Photo = lazy(() => import('../photo'));

const Photos = forwardRef((props, ref) => {
    const [photos, setPhotos] = useState([])
    const [isFetching, setIsFetching] = useState(false)

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
        setIsFetching(true)

        axios.get(process.env.REACT_APP_API_URL + '/photo/')
            .then((res) => {
                setIsFetching(false)

                if (!res.data) {
                    return
                }

                setPhotos(parsePhotos(res.data.items))
            })
    }

    const fetchPhotosByKeyword = (keyword) => {
        setIsFetching(true)

        axios.get(process.env.REACT_APP_API_URL + '/photo/search/' + keyword)
            .then((res) => {
                setIsFetching(false)

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
        return <Suspense fallback={<div/>} key={ photo.id ? photo.id : photo.link }>
            <Photo photo={ photo }/>
        </Suspense>
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
            { isFetching && (
                <Spinner />
            )}
        </div>
    );
})

export default Photos
