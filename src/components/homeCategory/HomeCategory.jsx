import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Images
import CatalogImg1 from '../../assets/images/catalog1.png'
import CatalogImg2 from '../../assets/images/catalog2.png'
import CatalogImg3 from '../../assets/images/catalog3.png'
import CatalogImg4 from '../../assets/images/catalog4.png'
import CatalogImg5 from '../../assets/images/catalog5.png'
import CatalogImg6 from '../../assets/images/catalog6.png'

// Icons
import { GoArrowRight } from 'react-icons/go'
import SectionTitles from '../sectionTitles/SectionTitles'

const catalogData = [
    {
        id: 1,
        name: 'Люстры',
        img: CatalogImg1
    },
    {
        id: 2,
        name: 'Светильники',
        img: CatalogImg2
    },
    {
        id: 3,
        name: 'Бра',
        img: CatalogImg3
    },
    {
        id: 4,
        name: 'Торшеры',
        img: CatalogImg4
    },
    {
        id: 5,
        name: 'Настольные лампы',
        img: CatalogImg5
    },
    {
        id: 6,
        name: 'Споты',
        img: CatalogImg6
    },
]

const HomeCategory = () => {
    const navigate = useNavigate()

    let CatalogItems = catalogData.map(catalogItem => (
        <div key={catalogItem.id} style={{ backgroundImage: `url(${catalogItem.img})` }} className="category__wrapper-items">
            <h3>{catalogItem.name}</h3>
            <Link to={'/catalog'}>От 540₽ <GoArrowRight /></Link>
        </div>
    ))
    return (
        <section className='homeCategory-section'>
            <div className="container">
                <div className="homeCategory-section__content">
                    <SectionTitles title={'Каталог'} btnName={'Весь каталог'} navigate={'/catalog'} />
                    <div className="category__wrapper">
                        {CatalogItems}
                    </div>
                    <div className="section__title-btn">
                        <button onClick={() => navigate('/catalog')}>Весь каталог <GoArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCategory
