import React from 'react'
import PageLink from '../pageLink/PageLink'
import { useDispatch, useSelector } from 'react-redux'

// Icons
import { FaRegTrashCan } from 'react-icons/fa6'
import { decrementCart, incrementCart, removeFromCart } from '../../context/slices/cartSlice'

const CartContent = () => {
    let cart = useSelector(state => state.cart.value)
    let dispatch = useDispatch()

    let cartItem = cart?.map(product => (
        <article key={product.id} className="cart__products-item">
            <div className="cart__products-item__img">
                <img src={product.url[1]} alt={product.title} />
            </div>
            <div className="cart__products-item__title">
                <div className="cart__products-item__title-prices">
                    <p title={product.title} className='three-line'>{product.title}</p>
                    <h3>{product.price}₽</h3>
                </div>
                <div>
                    <p title={product.desc} className="cart__products-item__title-desc two-line">{product.desc}</p>
                </div>
                <div>
                    <h3 title={product.quantity * product.price} className='cart__products-item__title-totalPrice one-line'>{product.quantity * product.price}₽</h3>
                </div>
                <div className="cart__products-item__title-quantity">
                    <div className='cart__products-item__title-deleteBtn'>
                        <button disabled={1 >= product.quantity} onClick={() => dispatch(decrementCart(product))}>-</button>
                        <div>{product.quantity}</div>
                        <button onClick={() => dispatch(incrementCart(product))}>+</button>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(product.id))} className="cart__products-item__title-delete">
                        <FaRegTrashCan />
                    </button>
                </div>
            </div>
        </article>
    ))
    return (
        <section className='cart-section'>
            <div className="container">
                <PageLink linkName={'Корзина'} linkUrl={'/cart'} />
                <div className="cart-section__content">
                    <div className="cart__title">
                        <h1>Корзина</h1>
                        <sup>{cart?.length}</sup>
                    </div>
                    <div className="cart__products">
                        <ul className="cart__products-title">
                            <li>Фото</li>
                            <li>Товары</li>
                            <li>Описание</li>
                            <li>Итого</li>
                            <li>Количество</li>
                        </ul>
                        {cartItem}
                    </div>
                    <form>
                        <div className="cart__form">
                            <div className="cart__form-oformleniya">
                                <h2>Оформление</h2>
                                <div>
                                    <input type="text" placeholder='ФИО' />
                                    <input type="tel" placeholder='телефон' />
                                    <input type="email" placeholder='Электронная' />
                                </div>
                            </div>
                            <div className="cart__form-dostafka">
                                <h2>Доставка</h2>
                                <div>
                                    <input type="text" placeholder='Адрес доставки' />
                                    <textarea rows={5} placeholder='Комментарий'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="cart__checkout">
                            <h2>Оплата</h2>
                            <ul>
                                <li>Товары............................................. 12 300₽</li>
                                <li>Доставка.............................................. 580₽</li>
                            </ul>
                            <h3>12 800₽</h3>
                            <article>
                                <button>Купить</button>
                                <div>
                                    <input type="checkbox" required />
                                    <p>Я согласен наобработку моих персональных данных</p>
                                </div>
                            </article>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CartContent
