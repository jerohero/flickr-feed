import React from 'react'
import './main.scss'
import Header from '../../components/header'

function Main(props) {
    return (
        <div className={ 'main' }>
            <Header />
            <div className={ 'mainContent' }>
                { props.children }
            </div>
        </div>
    )
}

export default Main
