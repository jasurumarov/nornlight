import React, { useEffect } from 'react'
import HomeCategory from '../../components/homeCategory/HomeCategory'
import PageLink from '../../components/pageLink/PageLink'
import Companies from '../../components/companies/Companies'
import HomeBlog from '../../components/homeBlog/HomeBlog'
import HomeEnd from '../../components/homeEnd/HomeEnd'

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className='catalog-page'>
            <div className="container">
                <PageLink linkName={'Каталог'} linkUrl={'/catalog'} />
            </div>
            <HomeCategory />
            <Companies />
            <HomeBlog />
            <HomeEnd />
        </main>
    )
}

export default Catalog
