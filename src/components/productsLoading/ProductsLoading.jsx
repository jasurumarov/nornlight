import React from 'react'

const ProductsLoading = () => {
    let loadingItems = new Array(8).fill("").map((_, inx) => (
        <div key={inx} className="loading__card">
            <div className='loading__card-img'>
                <div></div>
            </div>
            <h3></h3>
            <div className="loading__card-prices">
                <div></div>
                <button></button>
            </div>
        </div>
    ))
    return (
        <>
            {loadingItems}
        </>
    )
}

export default ProductsLoading
