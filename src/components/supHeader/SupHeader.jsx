import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Model from '../model/Model'
import { GoArrowRight } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

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
        link: 'return',
        title: 'Возврат'
    },
    {
        id: 4,
        link: 'garant',
        title: 'Гарантии'
    },
    {
        id: 5,
        link: 'contact',
        title: 'Контакты'
    },
    {
        id: 6,
        link: 'blog',
        title: 'Блог'
    },
]

const SupHeader = () => {
    const [model, setModel] = useState(false)

    let { pathname } = useLocation()

    if (pathname.includes("register") || pathname.includes("admin")) {
        return <></>
    }

    document.body.style.overflow = model ? 'hidden' : 'auto'

    let linkItem = linksData.map(link => (
        <NavLink key={link.id} to={link.link}>{link.title}</NavLink>
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
                        <button onClick={() => setModel(true)}>Заказать звонок</button>
                    </div>
                </div>
                {
                    model ?
                        <Model maxWidth={'850px'} width={'80%'} close={setModel}>
                            <div className="zvonok-model">
                                <h2>Заполните, <br /> и мы перезвоним</h2>
                                <form>
                                    <input type="text" placeholder='ФИО' required />
                                    <input type="tel" placeholder='телефон' required />
                                    <button>Весь каталог <GoArrowRight /></button>
                                </form>
                                <button onClick={() => {
                                    setModel(false)
                                }} className='detail__close'><IoMdClose /></button>
                            </div>
                        </Model>
                        : <></>
                }
            </div>
        </nav>
    )
}

export default SupHeader
