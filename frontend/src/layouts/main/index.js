import React from 'react'
import './main.scss'

function Main(props) {
    return (
        <div className={ 'main' }>
            { props.children }
        </div>
    )
}

export default Main
