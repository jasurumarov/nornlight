import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
    return (
        <div className='search'>
            <div className="container">
                <form className='header__search'>
                    <input type="search" placeholder='Поиск по товарам' />
                    <FiSearch />
                </form>
            </div>
        </div>
    )
}

export default SearchInput