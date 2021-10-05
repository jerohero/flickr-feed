import React, { forwardRef, useEffect, useImperativeHandle, useState, lazy, Suspense, useRef } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './photos.scss'
import Spinner from '../spinner'
const Photo = lazy(() => import('../photo'));

const Photos = forwardRef((props, ref) => {
    const [photos, setPhotos] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const currentKeyword = useRef('')
    const page = useRef(0)
    const totalPhotos = useRef(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        fetchPublicFeed()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // For parent > child communication
    useImperativeHandle(ref, () => ({
        fetchPhotosByKeyword: (keyword) => {
            onSearch(keyword)
        },
        fetchPublicFeed: () => {
            fetchPublicFeed()
        }
    }))

    const onSearch = (keyword) => {
        currentKeyword.current = keyword
        page.current = 0

        fetchPhotosByKeyword(keyword)
    }

    const handleScroll = () => {
        if (!isAllowedToFetchMore()) {
            return
        }

        fetchPhotosByKeyword(currentKeyword.current)
    }

    const fetchPublicFeed = () => {
        currentKeyword.current = ''
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

        page.current = page.current + 1

        axios.get(process.env.REACT_APP_API_URL + '/photo/search/' + keyword + '/' + page.current)
            .then((res) => {
                if (!res.data) {
                    return
                }

                totalPhotos.current = res.data.photos.total

                const photos = res.data.photos.photo

                page.current > 1
                    ? addPhotos(photos)
                    : setPhotos(parsePhotos(photos))

                setIsFetching(false)
            })
    }

    const addPhotos = (photos) => {
        setPhotos(oldPhotos => [...oldPhotos, parsePhotos(photos)])
    }

    const parsePhotos = (photos) => {
        return photos.map(parsePhoto)
    }

    const parsePhoto = (photo) => {
        return <Suspense fallback={<div/>} key={ photo.id ? photo.id : photo.link }>
            <Photo photo={ photo }/>
        </Suspense>
    }

    const isAllowedToFetchMore = () => {
        return !(Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
            isFetching || !currentKeyword.current)
    }

    return (
        <div className={ 'photos' }>
            { (currentKeyword.current && totalPhotos.current) && (
                <p>{ totalPhotos.current }</p>
            )}
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
