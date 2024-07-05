import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Icons
import SiteLogo from '../../assets/icons/footer-logo.svg'
import Payment from '../../assets/icons/visa.svg'
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
    let {pathname} = useLocation()

    if (pathname.includes("register") || pathname.includes("admin")) {
        return <></>
    }
    return (
        <footer>
            <div className="container">
                <div className="footer__content">
                    <div>
                        <img className='footer__title-logo' src={SiteLogo} alt="site logo" />
                        <article>
                            <Link className='footer__title-phone' to={'tel: 8 (800) 890-46-56'}>8 (800) 890-46-56</Link>
                        </article>
                        <img className='footer__title-bank' src={Payment} alt="bank cards" />
                        <p>Политика конфидециальности</p>
                        <p>Пользовательское соглашение</p>
                        <div>
                            <Link to={'https://t.me/UmarovJasurbek'} target='_blank'>
                                <FaTelegram />
                            </Link>
                            <Link to={'https://www.instagram.com/1umarov.jasur/'} target='_blank'>
                                <FaSquareInstagram />
                            </Link>

                            <Link to={'https://www.facebook.com'} target='_blank'>
                                <FaFacebook />
                            </Link>
                        </div>
                    </div>
                    <ul>
                        <h3>Покупателям</h3>
                        <Link to={'/aboutus'}>O компании</Link>
                        <Link to={'/shipping'}>Доставка и оплата</Link>
                        <Link to={'/return'}>Возврат</Link>
                        <Link to={'/garant'}>Гарантии</Link>
                        <Link to={'/contact'}>Контакты</Link>
                        <Link to={'/blog'}>Блог</Link>
                    </ul>
                    <ul>
                        <h3>Товары</h3>
                        <Link to={'/catalog'}>Люстры</Link>
                        <Link to={'/catalog'}>Светильники</Link>
                        <Link to={'/catalog'}>Бра</Link>
                        <Link to={'/catalog'}>Торшеры</Link>
                        <Link to={'/catalog'}>Комплектуюшие</Link>
                        <Link to={'/catalog'}>Настольные лампы</Link>
                    </ul>
                    <ul>
                        <h3>Товары</h3>
                        <Link to={'/catalog'}>Споты</Link>
                        <Link to={'/catalog'}>Трековые светильники</Link>
                        <Link to={'/catalog'}>Бра</Link>
                        <Link to={'/catalog'}>Уличные светильники</Link>
                        <Link to={'/catalog'}>Технические светильники</Link>
                        <Link to={'/catalog'}>Светодиодные ленты</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
