import React from 'react'
import PageLink from '../../components/pageLink/PageLink'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <main className='contact-page'>
            <div className="container">
                <PageLink linkName={'Контакты'} linkUrl={'/contact'} />
            </div>
            <div className="contact-section">
                <div className="container">
                    <div className="contact-section__content">
                        <h1>Контакты</h1>
                        <div>
                            <Link to={'tel: 8 (800) 890-46-56'}>8 (800) 890-46-56</Link>
                            <p>Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину Телефоны: </p>
                        </div>
                    </div>
                </div>
                <div className="hero-container">

                    <iframe className='contact-section__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.5659198092!2d36.726215640406!3d55.58103354861595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskva%2C%20Rossiya!5e0!3m2!1suz!2s!4v1719906394426!5m2!1suz!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="container">
                        <div className="contact-section__map-content">
                            <div>
                                <h3>Адрес магазина</h3>
                                <p>г. Москва, Дмитровское шоссе д.100с2</p>
                            </div>
                            <div>
                                <h3>Почта</h3>
                                <p>NORNLIGHT@mail.ru</p>
                            </div>
                            <div>
                                <h3>Телефон</h3>
                                <p>8 (800) 890-46-56</p>
                            </div>
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
