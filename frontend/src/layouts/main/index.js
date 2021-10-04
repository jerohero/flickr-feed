import React from 'react'
import styles from './main.scss'

function Main(props) {
    return (
        <div className={ styles.main }>
            { props.children }
        </div>
    )
}

export default Main
