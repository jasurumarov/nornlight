import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Components
import SectionTitles from '../sectionTitles/SectionTitles'
import ProductsLoading from '../productsLoading/ProductsLoading'

// Icons
import { GoArrowRight } from 'react-icons/go'
import { FaRegHeart } from 'react-icons/fa'

const Products = ({ data, isLoading }) => {
    const navigate = useNavigate()

    let cardItems = data?.map(product => (
        <div key={product.id} className="products__card">
            <div className='products__card-img'>
                <img src={product.url[0]} alt={product.title} />
                <FaRegHeart />
            </div>
            <Link to={`/products/${product.id}`}>
                <h3 className={'two-line'}>{product.title}</h3>
            </Link>
            <div className="products__card-prices">
                <div>
                    <del>7000₽</del>
                    <h4>{product.price}₽</h4>
                </div>
                <button>
                    <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6666 19.6667C18.1939 19.6667 17 20.8606 17 22.3333C17 23.8061 18.1939 25 19.6666 25C21.1394 25 22.3333 23.8061 22.3333 22.3333C22.3333 20.8606 21.1394 19.6667 19.6666 19.6667ZM19.6666 19.6667L10.3333 19.6667C9.46766 19.7158 8.60947 19.4822 7.88803 19.0013C7.16659 18.5203 6.62096 17.818 6.33333 17L3.66667 1H1M19.6666 19.6667C20.5323 19.7158 21.3905 19.4822 22.112 19.0013C22.8334 18.5203 23.379 17.818 23.6667 17L25 7.66667H4.73333M11.6667 22.3333C11.6667 23.8061 10.4728 25 8.99999 25C7.52723 25 6.33333 23.8061 6.33333 22.3333C6.33333 20.8606 7.52723 19.6667 8.99999 19.6667C10.4728 19.6667 11.6667 20.8606 11.6667 22.3333Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    ))
    return (
        <section className='products-section'>
            <div className="container">
                <SectionTitles navigate={'/products'} title={'Популярные товары'} btnName={'Все товары'} />
                <div className="products-section__content">
                    {
                        isLoading
                            ? <ProductsLoading />
                            : cardItems
                    }
                </div>
                <div className="section__title-btn">
                    <button onClick={() => navigate('/products')}>Все товары <GoArrowRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Products