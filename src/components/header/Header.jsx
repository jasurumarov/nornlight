import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../../context/api/productsApi'

// Icons
import Logo from '../../assets/icons/logo.svg'
import Heart from '../../assets/icons/heart.svg'
import Compare from '../../assets/icons/compare.svg'
import Cart from '../../assets/icons/cart.svg'
import { RiMenu2Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'


const Header = () => {
    const [menu, setMenu] = useState(false)
    const [shrink, setShrink] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState(null)

    const navigate = useNavigate()
    let favorites = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)
    const { data } = useGetProductsQuery()
    useEffect(() => {
        if (data && searchValue) {
            setFilteredData(data.filter(product => product.title.toLowerCase().includes(searchValue.trim().toLowerCase())))
        }
    }, [searchValue])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true)
            } else {
                setShrink(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header className={`header ${shrink ? 'shrink' : ''}`}>
            <div className="container">
                <nav>
                    <div className="header__logo-side">
                        <button onClick={() => setMenu(!menu)} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className={menu ? 'show' : ''}>
                            <NavLink className='/about-us'>О компании</NavLink>
                            <NavLink to={'/shipping'}>Доставка и оплата</NavLink>
                            <NavLink to={'/return'}>Возврат</NavLink>
                            <NavLink to={'/garant'}>Гарантии</NavLink>
                            <NavLink to={'/contact'}>Контакты</NavLink>
                            <NavLink to={'/blog'}>Блог</NavLink>
                            <div>
                                <button onClick={() => navigate('/catalog')}><RiMenu2Line /> Каталог</button>
                                <Link to={'tel: 8 (800) 890-46-56'}>8 (800) 890-46-56</Link>
                                <p>Заказать звонок</p>
                            </div>
                        </ul>
                        <Link to={'/'}>
                            <img src={Logo} alt="site logo" />
                        </Link>
                    </div>
                    <button onClick={() => navigate('/catalog')} className='header__category-btn'><RiMenu2Line /> Каталог</button>
                    <label>
                        <input className={`${searchValue.trim() ? 'searchedInput' : ''} ${filteredData?.length ? '' : 'noSearchedInput'}`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="search" placeholder='Поиск по товарам' />
                        <FiSearch />
                        {
                            searchValue.trim() ?
                                <ul className='search__value'>
                                    {
                                        filteredData?.slice(0, 5)?.map(el => (
                                            <li onClick={() => navigate(`/products/${el.id}`)} key={el.id}><img src={el.url[0]} alt={el.title} /> <p>{el.title}</p></li>
                                        ))
                                    }
                                </ul>
                                :
                                <></>
                        }
                    </label>
                    <div className='header__btns'>
                        <button onClick={() => navigate('/favorites')}>
                            <img src={Heart} alt="heart icon" />
                            <span>Избранное</span>
                            <sup>{favorites.length}</sup>
                        </button>
                        <button>
                            <img src={Cart} alt="compare icon" />
                            <span>Сравнение</span>
                        </button>
                        <button onClick={() => navigate('/cart')}>
                            <img src={Compare} alt="cart icon" />
                            <span>Корзина</span>
                            <sup>{cart.length}</sup>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
