import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import { addToCart } from '../../context/slices/cartSlice'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Components
import SectionTitles from '../sectionTitles/SectionTitles'
import ProductsLoading from '../productsLoading/ProductsLoading'
import ProductCategory from './ProductCategory'

// Icons
import { GoArrowRight } from 'react-icons/go'
import { FaHeart, FaRegHeart, FaRegTrashAlt } from 'react-icons/fa'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import Model from '../model/Model'
import { RiEdit2Line } from 'react-icons/ri'
import { useDeleteProductMutation } from '../../context/api/productsApi'

const Products = ({ data, isLoading, isAdmin }) => {
    const [valueOfCategory, setValueOfCategory] = useState('all')
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [model, setModel] = useState(false)
    const [modelData, setModelData] = useState(null)
    // const [deleteProduct, { isLoading }] = useDeleteProductMutation()

    document.body.style.overflow = model ? 'hidden' : 'auto'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let favorites = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)

    const filteredProducts = valueOfCategory === 'all' ? data : data.filter(el => el.category === valueOfCategory);
    const displayedProducts = filteredProducts?.slice(0, visibleProducts);

    const handleDisplayProductImg = product => {
        setModelData(product)
        setModel(prev => prev = true)
    }

    let cardItems = displayedProducts?.map(product => (
        <div key={product.id} className="products__card">
            <div className='products__card-img'>
                <img onClick={() => handleDisplayProductImg(product)} src={product.url[0]} alt={product.title} />
                <button onClick={() => dispatch(toggleHeart(product))}>
                    {
                        isAdmin
                            ? <></>
                            :
                            favorites?.some(item => item.id === product.id)
                                ?
                                <FaHeart style={{ color: "#454545" }} />
                                :
                                <FaRegHeart />
                    }
                </button>
            </div>
            <Link to={`/products/${product.id}`}>
                <h3 className={'two-line'}>{product.title}</h3>
            </Link>
            <div className="products__card-prices">
                <div>
                    <del>7000₽</del>
                    <h4>{product.price}₽</h4>
                </div>
                {
                    isAdmin
                        ?
                        <div className='admin-btns'>
                            <button><RiEdit2Line /></button>
                            <button ><FaRegTrashAlt /></button>
                        </div>
                        :
                        <button onClick={() => dispatch(addToCart(product))}>
                            {
                                cart?.some(item => item.id === product.id)
                                    ?
                                    <BsCartCheck style={{ fontSize: '18px', color: 'white' }} />
                                    :
                                    <BsCart style={{ fontSize: '18px', color: 'white' }} />
                            }
                        </button>
                }
            </div>
        </div>
    ))
    return (
        <section className='products-section'>
            <div className="container">
                <SectionTitles navigate={'/products'} title={'Популярные товары'} btnName={'Все товары'} />
                <ProductCategory setVisibleProducts={setVisibleProducts} valueOfCategory={valueOfCategory} setValueOfCategory={setValueOfCategory} />
                <div className="products-section__content">
                    {
                        isLoading
                            ? <ProductsLoading />
                            : cardItems
                    }
                </div>
                {
                    model ?
                        <Model close={setModel}>
                            <Swiper loop={true} navigation={true} modules={[Navigation]} className='modelImg'>
                                {
                                    modelData?.url?.map((img, inx) => (
                                        <SwiperSlide key={inx}>
                                            <div className='modelImg-wrapper'>
                                                <img src={img} alt={modelData?.title} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <button onClick={() => navigate(`/products/${modelData?.id}`)} className='modelImg-btn'>See more</button>
                        </Model>
                        : <></>
                }
                <div className='products__see-more'>
                    <button onClick={() => setVisibleProducts(prev => prev + 8)}>See more</button>
                </div>
                <div className="section__title-btn">
                    <button onClick={() => navigate('/products')}>Все товары <GoArrowRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Products