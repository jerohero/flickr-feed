import React from 'react'
import './home.scss'
import Main from '../../layouts/main'
import Photos from '../../components/photos'
import Search from '../../components/search'

function Home() {
    return (
        <Main>
            <div className={ 'home' }>
                <div className={ 'homeContent' }>
                    <div className={ 'homeContentSearch' }>
                        <Search />
                    </div>

                    <div className={ 'homeContentBody' }>
                        <Photos />
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Home
