import React, { useEffect } from 'react'
import CartContent from '../../components/cartContent/CartContent'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let cart = useSelector(state => state.cart.value)
    return (
        <main className='cart-page'>
            {
                cart.length
                    ? <CartContent />
                    : <Empty title={'cart'}/>
            }
        </main>
    )
}

export default Cart