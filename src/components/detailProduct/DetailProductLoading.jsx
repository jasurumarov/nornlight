import React from 'react'

const DetailProductLoading = () => {
    return (
        <div className='detail-loading__product'>
            <div className="detail__product-img">
                <div className='detail__product-main--image' ></div>
                <div className='detail__product-images'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="detail__product-title">
                <h2></h2>
                <div className="detail__product-title__about">
                    <ul>
                        <li></li>
                        <li></li>
                        <p></p>
                    </ul>
                    <div></div>
                </div>
                <div className="detail__product-title__prices">
                    <h3></h3>
                    <del></del>
                </div>
                <p className="detail__product-title__desc"></p>
                <div className="detail__product-title__btns">
                    <div></div>
                    <button className='detail__product-title__btns-cart'></button>
                    <button className='detail__product-title__btns-heart'></button>
                </div>
            </div>
        </div>
    )
}

export default DetailProductLoading
