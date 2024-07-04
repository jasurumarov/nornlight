import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Icons
import Logo from '../../assets/icons/logo.svg'
import Heart from '../../assets/icons/heart.svg'
import Compare from '../../assets/icons/compare.svg'
import Cart from '../../assets/icons/cart.svg'
import { RiMenu2Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'


const Header = () => {
    const navigate = useNavigate()

    const [shrink, setShrink] = useState(false)
    
    let favorites = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)

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
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link to={'/'}>
                            <img src={Logo} alt="site logo" />
                        </Link>
                    </div>
                    <button className='header__category-btn'><RiMenu2Line /> Каталог</button>
                    <label>
                        <input type="search" placeholder='Поиск по товарам' />
                        <FiSearch />
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
