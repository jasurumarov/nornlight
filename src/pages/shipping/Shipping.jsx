import React, { useEffect } from 'react'
import PageLink from '../../components/pageLink/PageLink'

const Shipping = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className='shipping-page'>
            <div className="container">
                <PageLink linkName={'Доставка и оплата'} linkUrl={'/shipping'} />
            </div>
            <section className="shipping-section">
                <div className="container">
                    <div className="shipping-section__content">
                        <h1>Доставка <br /> и оплата</h1>
                        <div>
                            <h3>Доставка</h3>
                            <p>Мы осуществляем доставку  склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ,  так же по всем странам СНГ. <span>Сроки доставки: 4—6 недель</span></p>
                            <h3>Курьерская доставка</h3>
                            <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ <span>от 5 000 ₽.</span> Заказы свыше <span>30 00 ₽</span> имеют бесплатную доставку, включительно 15 км от МКАД</p>
                            <h3>Самовывоз</h3>
                            <p>Любой заказ можно забрать самостоятельно по адресу: п. Москва, Дмитровское шоссе д.1002</p>
                        </div>
                    </div>
                </div>
                <div className="hero-container">

                    <iframe className='shipping-section__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.5659198092!2d36.726215640406!3d55.58103354861595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskva%2C%20Rossiya!5e0!3m2!1suz!2s!4v1719906394426!5m2!1suz!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>
    )
}

export default Shipping