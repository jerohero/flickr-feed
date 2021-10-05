import React from 'react'
import './header.scss'

function Header() {
    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <nav>
            <h1 id='header-text' onClick={ toTop }>
                Kickr
            </h1>
        </nav>
    );
}

export default Header
