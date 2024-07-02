import React from 'react'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'

const Favorites = () => {
    let favorites = useSelector(state => state.wishlist.value)
    console.log('ss');
    return (
        <main className='favorites-page'>
            <div className="container">
                <div className='favorites__title'>
                    <h1>Избранные товары</h1>
                    <sup>2</sup>
                </div>
            </div>
            <Products data={favorites} />
        </main>
    )
}

export default Favorites
