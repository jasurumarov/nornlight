import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'

// Images
import BlogImg1 from '../../assets/images/blog1.png'
import BlogImg2 from '../../assets/images/blog2.png'
import BlogImg3 from '../../assets/images/blog3.png'
import { GoArrowUpRight } from 'react-icons/go'

const blogData = [
    {
        id: 1,
        img: BlogImg1
    },
    {
        id: 2,
        img: BlogImg2
    },
    {
        id: 3,
        img: BlogImg3
    },
    {
        id: 4,
        img: BlogImg1
    },
    {
        id: 5,
        img: BlogImg2
    },
    {
        id: 6,
        img: BlogImg3
    }
]

const HomeBlog = () => {
    let card = blogData.map(card => (
        <div key={card.id} className="homeBlog__card">
            <img src={card.img} alt="card img" />
            <div>
                <h3>Как правильно освещать дом снаружи?</h3>
                <GoArrowUpRight />
            </div>
            <p>01.01.2024</p>
        </div>
    ))
    return (
        <section className='homeBlog-section'>
            <div className="container">
                <SectionTitles navigate={'/blog'} btnName={'Перейти в блог'} title={'Блог'} />
                <div className="homeBlog-section__content">
                    {card}
                </div>
            </div>
        </section>
    )
}

export default HomeBlog