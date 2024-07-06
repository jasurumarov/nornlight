import React from 'react'
import HeroImg from '../../assets/images/hero-img.png'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-container">

                <Swiper
                    loop={true} pagination={{ clickable: true }} modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="hero-section__content">
                            <div className="container">
                                <h1>
                                    Скидка 15% <br /> на все подвесные <br /> светильники <br /> <span>до 5 февраля</span>
                                </h1>
                                <img src={HeroImg} alt="hero img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-section__content">
                            <div className="container">
                                <h1>
                                    Скидка 15% <br /> на все подвесные <br /> светильники <br /> <span>до 5 февраля</span>
                                </h1>
                                <img src={HeroImg} alt="hero img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-section__content">
                            <div className="container">
                                <h1>
                                    Скидка 15% <br /> на все подвесные <br /> светильники <br /> <span>до 5 февраля</span>
                                </h1>
                                <img src={HeroImg} alt="hero img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-section__content">
                            <div className="container">
                                <h1>
                                    Скидка 15% <br /> на все подвесные <br /> светильники <br /> <span>до 5 февраля</span>
                                </h1>
                                <img src={HeroImg} alt="hero img" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero