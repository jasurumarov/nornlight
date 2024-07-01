import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productsApi'

// Components
import PageLink from '../pageLink/PageLink'
import DetailProductLoading from './DetailProductLoading'

// Icons
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaRegHeart, FaTelegram } from 'react-icons/fa'
import { SlHeart } from 'react-icons/sl'

const DetailProduct = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)
    const [mainImage, setMainImage] = useState('')

    useEffect(() => {
        if (data && data.url) {
            setMainImage(data.url[0])
        }
    }, [data])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let productItem = (
        <div className='detail__product'>
            <div className="detail__product-img">
                <div className='detail__product-main--image' >
                    <img src={mainImage} alt={data?.title} />
                </div>
                <div className='detail__product-images'>
                    {
                        data?.url?.map((img, inx) => (
                            <div key={inx} onClick={() => setMainImage(img)} className={img === mainImage ? 'active' : ''}>
                                <img src={img} alt={data?.title} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="detail__product-title">
                <h2>{data?.title}</h2>
                <div className="detail__product-title__about">
                    <ul>
                        <li>Scott</li>
                        <li>Артикул : 7655-188</li>
                        <p>В наличии</p>
                    </ul>
                    <div>
                        <Link to={'https://t.me/UmarovJasurbek'} target='_blank'>
                            <FaTelegram />
                        </Link>
                        <Link to={'https://www.instagram.com/1umarov.jasur/'} target='_blank'>
                            <FaInstagramSquare />
                        </Link>
                        <Link to={'https://www.facebook.com'} target='_blank'>
                            <FaFacebook />
                        </Link>
                        <Link to={'https://www.linkedin.com'} target='_blank'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
                <div className="detail__product-title__prices">
                    <h3>{data?.price}₽</h3>
                    <del>522 000₽</del>
                </div>
                <p className="detail__product-title__desc">{data?.desc}</p>
                <div className="detail__product-title__btns">
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className='detail__product-title__btns-cart'>корзину</button>
                    <button className='detail__product-title__btns-heart'><SlHeart /></button>
                </div>
            </div>
        </div>
    )

    return (
        <section className='detail-section'>
            <div className="container">
                <PageLink linkName={''} linkUrl={''} />
                <div className="detail-section__content">
                    {
                        isLoading
                            ? <DetailProductLoading />
                            : productItem
                    }
                </div>
                <div className="detail-section__about">
                    <h2>Характеристика</h2>
                    <ul>
                        <li>
                            <h4>Цвет</h4>
                            <p>Жёлтый</p>
                        </li>
                        <li>
                            <h4>Год</h4>
                            <p>2016</p>
                        </li>
                        <li>
                            <h4>Материал рамы</h4>
                            <p>Карбон</p>
                        </li>
                        <li>
                            <h4>Размер</h4>
                            <p>L</p>
                        </li>
                        <li>
                            <h4>Страна</h4>
                            <p>Швейцария</p>
                        </li>
                        <li>
                            <h4>Производитель</h4>
                            <p>Scott</p>
                        </li>
                        <li>
                            <h4>Покрышки</h4>
                            <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                        </li>
                        <li>
                            <h4>Рама</h4>
                            <p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                        </li>
                        <li>
                            <h4>Подседельный Штырь</h4>
                            <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                        </li>
                        <li>
                            <h4>Седло</h4>
                            <p>Ritchey WCS Streem V3 Titanium rails</p>
                        </li>
                        <li>
                            <h4>Вилка</h4>
                            <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DetailProduct
