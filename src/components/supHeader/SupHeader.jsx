import React from 'react'
import { Link } from 'react-router-dom'

const linksData = [
    {
        id: 1,
        link: 'about-us',
        title: 'O компании'
    },
    {
        id: 2,
        link: 'shipping',
        title: 'Доставка и оплата'
    },
    {
        id: 3,
        link: 'garant',
        title: 'Гарантии'
    },
    {
        id: 4,
        link: 'contact',
        title: 'Контакты'
    },
    {
        id: 5,
        link: 'blog',
        title: 'Блог'
    },
]

const SupHeader = () => {
    let linkItem = linksData.map(link => (
        <Link key={link.id} to={link.link}>{link.title}</Link>
    ))
    return (
        <nav className='supHeader'>
            <div className="container">
                <div className="supHeader__content">
                    <ul>
                        {linkItem}
                    </ul>
                    <div>
                        <Link to={'tel: 8 (800) 890-46-56'}>8 (800) 890-46-56</Link>
                        <button>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SupHeader
