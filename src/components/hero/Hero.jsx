import React from 'react'

import HeroImg from '../../assets/images/hero-img.png'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-container">
                <div className="hero-section__content">
                    <div className="container">
                        <h1>
                            Скидка 15% <br /> на все подвесные <br /> светильники <br /> <span>до 5 февраля</span>
                        </h1>
                        <img src={HeroImg} alt="hero img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero