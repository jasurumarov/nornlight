import React from 'react'
import HomeBlog from '../../components/homeBlog/HomeBlog'
import PageLink from '../../components/pageLink/PageLink'

const Blog = () => {
    return (
        <main className='blog-page'>
            <div className="container">
                <PageLink linkName={'Блог'} linkUrl={''} />
            </div>
            <HomeBlog />
        </main>
    )
}

export default Blog
