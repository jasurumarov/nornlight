import React from 'react'
import { useGetCategoryQuery } from '../../context/api/categoryApi'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCategory = ({ setValueOfCategory, valueOfCategory, setVisibleProducts }) => {
    const { data: categories, isLoading: categoryIsLoading } = useGetCategoryQuery()

    let categoryLoadingItems = new Array(6).fill("").map((_, inx) => (
        <li className='products-section__categories-item__loading' key={inx}></li>
    ))

    let categoryItems = categories?.map(category => (
        <SwiperSlide onClick={() => {
            setValueOfCategory(category.title)
            setVisibleProducts(8)
        }} className={`products-section__categories-item ${valueOfCategory === category ? 'active' : ''}`} key={category.id}>{category.title}</SwiperSlide>
    ))

    return (
        <div className='products-section__categories__wrapper'>
            {
                categoryIsLoading
                    ? <ul className='products-section__categories__loading'>{categoryLoadingItems}</ul>
                    : <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                            1036: {
                                slidesPerView: 6,
                            },
                            894: {
                                slidesPerView: 5,
                                spaceBetween: 12
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            564: {
                                slidesPerView: 3,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className='products-section__categories'
                    >
                        <SwiperSlide onClick={() => {
                            setValueOfCategory('all')
                            setVisibleProducts(8)
                        }} className={`products-section__categories-item ${valueOfCategory === 'all' ? 'active' : ''}`}>All</SwiperSlide>
                        {categoryItems}
                    </Swiper>
            }


        </div>
    )
}

export default ProductCategory
