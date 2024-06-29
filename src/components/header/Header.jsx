import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import Logo from '../../assets/icons/logo.svg'
import Heart from '../../assets/icons/heart.svg'
import Compare from '../../assets/icons/compare.svg'
import Cart from '../../assets/icons/cart.svg'
import { RiMenu2Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'


const Header = () => {
    const [shrink, setShrink] = useState(false)

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
                        <button>
                            <img src={Heart} alt="heart icon" />
                            <span>Избранное</span>
                        </button>
                        <button>
                            <img src={Cart} alt="compare icon" />
                            <span>Сравнение</span>
                        </button>
                        <button>
                            <img src={Compare} alt="cart icon" />
                            <span>Корзина</span>
                            <sup>1</sup>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
