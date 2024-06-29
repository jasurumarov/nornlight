import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'

// Icons
import { GoArrowRight } from 'react-icons/go'
import ServiceImg1 from '../../assets/icons/service1.svg'
import ServiceImg2 from '../../assets/icons/service2.svg'
import ServiceImg3 from '../../assets/icons/service3.svg'
import ServiceImg4 from '../../assets/icons/service4.svg'

const servicesData = [
    {
        id: 1,
        title: 'Только проверенные',
        desc: 'Бренды, временем и качеством',
        img: ServiceImg1
    },
    {
        id: 2,
        title: 'Самые низкие цены',
        desc: 'Ниже не будет нигде',
        img: ServiceImg2
    },
    {
        id: 3,
        title: 'Быстрая доствка',
        desc: 'Доставляем по всей РФ за 1-10 дней',
        img: ServiceImg3
    },
    {
        id: 4,
        title: 'Большой ассортимент',
        desc: 'Более 1000 товаров',
        img: ServiceImg4
    },
]

const HomeAboutus = () => {
    let servicesItems = servicesData.map(servicesItem => (
        <div key={servicesItem.id} className="homeAboutus__wrapper-item">
            <img src={servicesItem.img} alt={servicesItem.title} />
            <h3>{servicesItem.title}</h3>
            <p>{servicesItem.desc}</p>
        </div>
    ))
    return (
        <section className='homeAboutus-section'>
            <div className="container">
                <div className="homeAboutus-section__content">
                    <SectionTitles title={'Почему NORNLIGHT?'} btnName={'О компании'} navigate={'/aboutus'}/>
                    <div className="homeAboutus__wrapper">
                        {servicesItems}
                    </div>
                    <div className="section__title-btn">
                        <button onClick={() => navigate('/catalog')}>Весь каталог <GoArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutus