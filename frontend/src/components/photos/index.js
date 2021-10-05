import React, { useEffect } from 'react'
import axios from 'axios'
import './photos.scss'

function Photos() {
    useEffect(() => {
        fetchPublicFeed()
    }, [])

    const fetchPublicFeed = () => {
        axios.get(process.env.REACT_APP_API_URL + '/photo')
            .then((res) => {
                if (!res.data) {
                    return
                }
                parsePhotos(res.data.items)
            })
    }

    const parsePhotos = (photos) => {
        console.log(photos)
    }

    return (
        <p>d</p>
    );
}

export default Photos
