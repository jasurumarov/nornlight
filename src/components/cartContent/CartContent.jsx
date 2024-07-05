import React from 'react'
import PageLink from '../pageLink/PageLink'
import { useDispatch, useSelector } from 'react-redux'
import { useGetInputValue } from '../../hooks/useGetInputValue'

// Icons
import { FaRegTrashCan } from 'react-icons/fa6'
import { decrementCart, deleteAllCart, incrementCart, removeFromCart } from '../../context/slices/cartSlice'


// Token and ID
const BOT_TOKEN = "7167621990:AAFEFIaAPwbfqpugbkwxmUFp0CyADqu1J8Y"
const CHAT_ID = "-1002035440165"


// InitialState
let initialState = {
    name: "",
    email: "",
    adress: "",
    phone: "",
    comment: ""
}

const CartContent = () => {
    let cart = useSelector(state => state.cart.value)
    let dispatch = useDispatch()

    let totalPrice = cart?.reduce((sum, item) => sum + (item.price * item.quantity), 0)

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

    const { formData, setFormData, handleChange } = useGetInputValue(initialState)
    const handleSendToTelegram = e => {
        e.preventDefault()
        console.log(formData);
        let text = `FIO: <b>${formData.name}</b>`
        text += "%0A"
        text += `Tel: <b>${formData.phone}</b>`
        text += "%0A"
        text += `Email: <b>${formData.email}</b>`
        text += "%0A"
        text += `Adress: <b>${formData.adress}</b>`
        text += "%0A"
        text += `Comment: <b>${formData.comment}</b>`
        text += "%0A"
        text += "%0A"

        text += cart?.map(el => (
            `<i>${el.title}</i>`
        ))

        text += "%0A"
        text += "%0A"

        text += `TotalPrice: <b>${totalPrice + 580}₽</b>`

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        setFormData(initialState)
        dispatch(deleteAllCart())
    }
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
                    <form onSubmit={handleSendToTelegram}>
                        <div className="cart__form">
                            <div className="cart__form-oformleniya">
                                <h2>Оформление</h2>
                                <div>
                                    <input required onChange={handleChange} value={formData.name} name='name' type="text" placeholder='ФИО' />
                                    <input required onChange={handleChange} value={formData.phone} name='phone' type="number" placeholder='телефон' />
                                    <input required onChange={handleChange} value={formData.email} name='email' type="email" placeholder='Электронная' />
                                </div>
                            </div>
                            <div className="cart__form-dostafka">
                                <h2>Доставка</h2>
                                <div>
                                    <input required type="text" onChange={handleChange} value={formData.adress} name='adress' placeholder='Адрес доставки' />
                                    <textarea rows={5} onChange={handleChange} value={formData.comment} name='comment' placeholder='Комментарий'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="cart__checkout">
                            <h2>Оплата</h2>
                            <ul>
                                <li>Товары............................................. {totalPrice}₽</li>
                                <li>Доставка.............................................. 580₽</li>
                            </ul>
                            <h3>{totalPrice + 580}₽</h3>
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
