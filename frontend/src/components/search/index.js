import React, {useEffect, useState} from 'react'
import SearchIcon from '../../static/icons/search.svg'
import CloseIcon from '../../static/icons/close.svg'
import './search.scss'

function Search(props) {
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        const typingTimeOut = setTimeout(
            search, 500
        );

        return () => clearTimeout(typingTimeOut);
    }, [keyword])

    const search = () => {
        console.log(keyword.target.value)
    }

    return (
        <div className={ 'search' }>
            <img className={ 'searchIcon' } src={ SearchIcon } alt={ 'Search' }/>
            <input className={ 'searchBar' } type={ 'text' } placeholder={ 'Search' } onChange={ setKeyword } />
            <div className={ 'close' }>
                <img className={ 'closeIcon' } src={ CloseIcon } alt={ 'Close' }/>
            </div>
        </div>
    );
}

export default Search
