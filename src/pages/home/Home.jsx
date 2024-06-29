import React from 'react'

// Components
import Hero from '../../components/hero/Hero'
import HomeCategory from '../../components/homeCategory/HomeCategory'
import HomeAboutus from '../../components/homeAboutus/HomeAboutus'
import Companies from '../../components/companies/Companies'
import HomeBlog from '../../components/homeBlog/HomeBlog'

const Home = () => {
    return (
        <main>
            <Hero />
            <HomeCategory />
            <HomeAboutus />
            <Companies />
            <HomeBlog />
        </main>
    )
}

export default Home