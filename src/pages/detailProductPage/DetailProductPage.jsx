import React, { useEffect } from 'react'
import DetailProduct from '../../components/detailProduct/DetailProduct'

const DetailProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <DetailProduct />
        </main>
    )
}

export default DetailProductPage
