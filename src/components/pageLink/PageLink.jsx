import React from 'react'
import { Link } from 'react-router-dom'

const PageLink = ({ linkUrl, linkName }) => {
    return (
        <div className='pageLink'>
            <Link to={'/'}>Главная</Link>
            <span>&gt;</span>
            <Link to={linkUrl}>{linkName}</Link>
        </div>
    )
}

export default PageLink
