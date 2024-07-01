import React from 'react'
import { useGetProductsQuery } from '../../context/api/productsApi'

// Components
import Hero from '../../components/hero/Hero'
import HomeCategory from '../../components/homeCategory/HomeCategory'
import HomeAboutus from '../../components/homeAboutus/HomeAboutus'
import Companies from '../../components/companies/Companies'
import HomeBlog from '../../components/homeBlog/HomeBlog'
import HomeEnd from '../../components/homeEnd/HomeEnd'
import Products from '../../components/products/Products'

const Home = () => {
    const { data, isLoading } = useGetProductsQuery()
    return (
        <main>
            <Hero />
            <HomeCategory />
            <HomeAboutus />
            <Products data={data} isLoading={isLoading} />
            <Companies />
            <HomeBlog />
            <HomeEnd />
        </main>
    )
}

export default Home