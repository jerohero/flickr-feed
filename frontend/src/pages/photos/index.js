import React from 'react'
import styles from './photos.scss'
import Main from '../../layouts/main'

function Photos() {
    return (
        <Main>
            <div className={ styles.photos }>
                <p>Photos</p>
            </div>
        </Main>
    );
}

export default Photos
