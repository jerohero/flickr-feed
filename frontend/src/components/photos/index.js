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
        fetchPublicFeed: fetchPublicFeed
    }))

    const onSearch = (keyword) => {
        currentKeyword.current = keyword
        page.current = 0

        fetchPhotosByKeyword(keyword)
    }

    const fetchPublicFeed = () => {
        currentKeyword.current = ''
        setIsFetching(true)

        axios.get(process.env.REACT_APP_API_URL + '/photo/')
            .then((res) => {
                if (!res.data) {
                    return
                }

                setPhotos(parsePhotos(res.data.items))
                setIsFetching(false)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const fetchPhotosByKeyword = (keyword) => {
        setIsFetching(true)
        page.current++

        axios.get(process.env.REACT_APP_API_URL + '/photo/search/' + keyword + '/' + page.current)
            .then((res) => {
                if (!res.data || keyword !== currentKeyword.current) {
                    return
                }

                const data = res.data.photos
                totalPhotos.current = data.total

                isSearching()
                    ? addPhotos(data.photo)
                    : setPhotos(parsePhotos(data.photo))

                setIsFetching(false)
            })
            .catch((err) => {
                alert(err.message)
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

    const handleScroll = () => {
        if (!isAllowedToFetchMore()) {
            return
        }

        fetchPhotosByKeyword(currentKeyword.current)
    }

    const isAllowedToFetchMore = () => {
        return !(Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
            isFetching || !currentKeyword.current)
    }

    const isSearching = () => {
        return page.current > 1
    }

    return (
        <div className={ 'photos' }>
            { currentKeyword.current && (
                <p className={ 'photosTopText' }>
                    { totalPhotos.current } results for "<span>{ currentKeyword.current }</span>"
                </p>
            )}
            { !currentKeyword.current && (
                <p className={ 'photosTopText' }>
                    <span>Find</span> your inspiration
                </p>
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
