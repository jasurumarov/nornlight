import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productsApi'
import PageLink from '../../components/pageLink/PageLink'

const AllProducts = () => {
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
