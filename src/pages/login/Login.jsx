import React from 'react'
import SiteLogo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main className='login-page'>
            <section className='login-section'>
                <div className="container">
                    <form className="login-section__content">
                        <Link to={'/'}>
                            <img src={SiteLogo} alt="site logo" />
                        </Link>
                        <input type="text" placeholder='Username' required/>
                        <input type="password" placeholder='Password' required/>
                        <article>
                            <div></div>
                            <p>or</p>
                            <div></div>
                        </article>
                        <ul>
                            <li>Google</li>
                            <li>Email</li>
                        </ul>
                        <button>Login</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login
