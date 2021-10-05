import React, {useEffect, useState} from 'react'
import SearchIcon from '../../static/icons/search.svg'
import CloseIcon from '../../static/icons/close.svg'
import './search.scss'

function Search(props) {
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        const typingTimeOut = setTimeout(
            search, 200
        );

        return () => clearTimeout(typingTimeOut);
    }, [keyword])

    const search = () => {
        if (!keyword)
            return

        props.onSearch(keyword)
    }

    const clearSearch = () => {
        setKeyword('')
        props.onSearch('')
    }

    const handleUserInput = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className={ 'search' }>
            <img className={ 'searchIcon' } src={ SearchIcon } alt={ 'Search' }/>
            <input
                className={ 'searchBar' }
                type={ 'text' }
                placeholder={ 'Search' }
                value={ keyword }
                onChange={ handleUserInput }
            />
            <div className={ 'close' } onClick={ clearSearch }>
                <img className={ 'closeIcon' } src={ CloseIcon } alt={ 'Close' }/>
            </div>
        </div>
    );
}

export default Search
