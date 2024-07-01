import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import BlogImg1 from '../../assets/images/blog1.png'
import BlogImg2 from '../../assets/images/blog2.png'
import BlogImg3 from '../../assets/images/blog3.png'
import { GoArrowRight, GoArrowUpRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()

    let card = blogData.map(card => (
        <SwiperSlide key={card.id} className="homeBlog__card">
            <img src={card.img} alt="card img" />
            <div>
                <h3>Как правильно освещать дом снаружи?</h3>
                <GoArrowUpRight />
            </div>
            <p>01.01.2024</p>
        </SwiperSlide>
    ))
    return (
        <section className='homeBlog-section'>
            <div className="container">
                <SectionTitles navigate={'/blog'} btnName={'Перейти в блог'} title={'Блог'} />
                <div className="homeBlog-section__content">
                    {card}
                </div>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        460: {
                            slidesPerView: 2, 
                        }
                    }}
                    modules={[Pagination]}
                    className="homeBlog-section__content--swiper">
                    {card}
                </Swiper>
                <div className="section__title-btn">
                    <button onClick={() => navigate('/blog')}>Перейти в блог <GoArrowRight /></button>
                </div>
            </div>
        </section>
    )
}

export default HomeBlog