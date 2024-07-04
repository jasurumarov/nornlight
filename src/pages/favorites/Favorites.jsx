import React, { useEffect } from 'react'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'

const Favorites = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let favorites = useSelector(state => state.wishlist.value)
    return (
        <main className='favorites-page'>
            {
                favorites.length
                    ?
                    <>
                        <div className="container">
                            <div className='favorites__title'>
                                <h1>Избранные товары</h1>
                                <sup>{favorites.length}</sup>
                            </div>
                        </div>
                        <Products data={favorites} />
                    </>
                    :
                    <Empty title={'wishlist'} />
            }

        </main>
    )
}

export default Favorites
