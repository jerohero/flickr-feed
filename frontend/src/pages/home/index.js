import React, {useRef} from 'react'
import './home.scss'
import Main from '../../layouts/main'
import Photos from '../../components/photos'
import Search from '../../components/search'

function Home() {
    const photosRef = useRef()

    const onSearch = (keyword) => {
        keyword
            ? photosRef.current.fetchPhotosByKeyword(keyword)
            : photosRef.current.fetchPublicFeed()
    }

    return (
        <Main>
            <div className={ 'home' }>
                <div className={ 'homeContent' }>
                    <div className={ 'homeContentSearch' }>
                        <Search onSearch={ onSearch }/>
                    </div>
                    <div className={ 'homeContentBody' }>
                        <Photos ref={ photosRef }/>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Home
