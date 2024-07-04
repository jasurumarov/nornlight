import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate()
    return (
        <section className='notFound'>
            <h1>404</h1>
            <p>Похоже, ничего не нашлось :(</p>
            <button onClick={() => navigate('/')}>На главную</button>
        </section>
    )
}

export default NotFound
