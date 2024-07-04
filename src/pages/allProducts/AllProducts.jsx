import React, { useEffect } from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productsApi'
import PageLink from '../../components/pageLink/PageLink'

const AllProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { data, isLoading } = useGetProductsQuery()
    return (
        <main className='allProducts-page'>
            <div className="container">
                <PageLink linkName={''} linkUrl={''} />
            </div>
            <Products data={data} isLoading={isLoading} />
        </main>
    )
}

export default AllProducts
