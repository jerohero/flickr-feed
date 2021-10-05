import React from 'react'
import SearchIcon from '../../static/icons/search.svg'
import CloseIcon from '../../static/icons/close.svg'
import './search.scss'

function Search(props) {
    return (
        <div className={ 'search' }>
            <img className={ 'searchIcon' } src={ SearchIcon } alt={ 'Search' }/>
            <input className={ 'searchBar' } type={ 'text' } placeholder={ 'Search' } />
            <div className={ 'close' }>
                <img className={ 'closeIcon' } src={ CloseIcon } alt={ 'Close' }/>
            </div>
        </div>
    );
}

export default Search
