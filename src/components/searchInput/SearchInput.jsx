import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../context/api/productsApi';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    let { pathname } = useLocation();
    const navigate = useNavigate();
    const { data } = useGetProductsQuery();
    if (pathname.includes("register") || pathname.includes("admin")) {
        return null;
    }
    useEffect(() => {
        if (data && searchValue) {
            setFilteredData(data.filter(product => product.title.toLowerCase().includes(searchValue.trim().toLowerCase())));
        }
    }, [data, searchValue]);

    return (
        <div className='search'>
            <div className="container">
                <form className='header__search'>
                    <input className={`${searchValue.trim() ? 'searchedInput' : ''} ${filteredData?.length ? '' : 'noSearchedInput'}`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="search" placeholder='Поиск по товарам' />
                    <FiSearch />
                    {
                        searchValue.trim() ?
                            <ul className='search__value'>
                                {
                                    filteredData?.slice(0, 5)?.map(el => (
                                        <li onClick={() => {
                                            navigate(`/products/${el.id}`)
                                            setSearchValue('')
                                        }} key={el.id}><img src={el.url[0]} alt={el.title} /> <p>{el.title}</p></li>
                                    ))
                                }
                            </ul>
                            :
                            null
                    }
                </form>
            </div>
        </div>
    )
}

export default SearchInput