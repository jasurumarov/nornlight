import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import { addToCart } from '../../context/slices/cartSlice'
import { useDeleteProductMutation, useUpdateProductMutation } from '../../context/api/productsApi'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { useGetCategoryQuery } from '../../context/api/categoryApi'

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
import { toast } from 'react-toastify'

const Products = ({ data, isLoading, isAdmin }) => {
    const [valueOfCategory, setValueOfCategory] = useState('all')
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [model, setModel] = useState(false)
    const [modelData, setModelData] = useState(null)
    const [editModel, setEditModel] = useState(false)
    const [editModelData, setEditModelData] = useState(null)
    const [deletingProductId, setDeletingProductId] = useState(null)
    const [deleteProduct] = useDeleteProductMutation()

    // InitialState
    const initialState = {
        title: '',
        price: '',
        oldprice: '',
        url: '',
        category: '',
        desc: ''
    }

    document.body.style.overflow = model ? 'hidden' : 'auto'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let favorites = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)

    const filteredProducts = valueOfCategory === 'all' ? data : data.filter(el => el.category === valueOfCategory);
    const displayedProducts = filteredProducts?.slice(0, visibleProducts);

    const handleDisplayProductImg = product => {
        setModelData(product)
        setModel(true)
    }

    const handleDeleteProduct = (productId) => {
        if (window.confirm('Are you sure?')) {
            setDeletingProductId(productId)
            deleteProduct(productId)
        }
    }

    const [updateProduct, { isLoading: updatedIsLoading, isSuccess: updatedIsSuccess }] = useUpdateProductMutation()

    const { data: categoryData } = useGetCategoryQuery()
    let categories = categoryData?.map(category => (
        <option value={category.title} key={category.id}>{category.title}</option>
    ))

    const { formData, setFormData, handleChange } = useGetInputValue(initialState)

    const handleUpdate = e => {
        e.preventDefault()
        const updatedFormData = {
            ...formData,
            price: +formData.price,
            oldprice: +formData.oldprice,
            url: formData.url.split("\n").filter(i => i.trim())
        };
        updateProduct({ body: updatedFormData, id: editModelData.id })
    }

    useEffect(() => {
        if (updatedIsSuccess) {
            toast.success('Product updated');
            setEditModel(false)
        }
    }, [updatedIsSuccess]);

    useEffect(() => {
        if (editModelData) {
            setFormData({
                title: editModelData.title,
                price: editModelData.price,
                oldprice: editModelData.oldprice,
                url: editModelData.url.join('\n'),
                category: editModelData.category,
                desc: editModelData.desc
            });
        }
    }, [editModelData, setFormData]);

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
                    <del>{product.oldprice}₽</del>
                    <h4>{product.price}₽</h4>
                </div>
                {
                    isAdmin
                        ?
                        <div className='admin-btns'>
                            <button onClick={() => {
                                setEditModel(true)
                                setEditModelData(product)
                            }}><RiEdit2Line /></button>
                            <button disabled={deletingProductId === product.id} onClick={() => handleDeleteProduct(product.id)}><FaRegTrashAlt /></button>
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
                {
                    editModel
                        ?
                        <Model close={setEditModel}>
                            <div className='create-product'>
                                <h3>Update product</h3>
                                <form onSubmit={handleUpdate}>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input required onChange={handleChange} value={formData.title} id='title' name='title' type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="price">Price</label>
                                        <input required onChange={handleChange} value={formData.price} id='price' name='price' type="number" />
                                    </div>
                                    <div>
                                        <label htmlFor="oldprice">Old price</label>
                                        <input required onChange={handleChange} value={formData.oldprice} id='oldprice' name='oldprice' type="number" />
                                    </div>
                                    <div>
                                        <label htmlFor="url">Image-url</label>
                                        <textarea required onChange={handleChange} value={formData.url} name="url" rows={4} id="url"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="category">Category</label>
                                        <select onChange={handleChange} value={formData.category} required name="category" id="category">
                                            <option disabled value="">Select</option>
                                            {categories}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="desc">Description</label>
                                        <textarea required onChange={handleChange} value={formData.desc} rows={4} name="desc" id="desc"></textarea>
                                    </div>
                                    <button disabled={updatedIsLoading} className='create-button'>{updatedIsLoading ? 'Loading...' : 'Update'}</button>
                                </form>
                            </div>
                        </Model>
                        : <></>
                }
            </div>
        </section>
    )
}

export default Products