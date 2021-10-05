import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './photos.scss'
import Photo from '../photo'

function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetchPublicFeed()
    }, [])

    const fetchPublicFeed = () => {
        axios.get(process.env.REACT_APP_API_URL + '/photo')
            .then((res) => {
                if (!res.data) {
                    return
                }

                setPhotos(parsePhotos(res.data.items))
            })
    }

    const parsePhotos = (photos) => {
        return photos.map(parsePhoto)
    }

    const parsePhoto = (photo) => {
        return <Photo photo={ photo } key={ photo.link }/>
    }

    return (
        <div className={ 'photos' }>
            <Masonry breakpointCols={4} className={ 'photosMasonryGrid' } columnClassName={ 'photosMasonryGridColumn' }>
                { photos }
            </Masonry>
        </div>
    );
}

export default Photos
