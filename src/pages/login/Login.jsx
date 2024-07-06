import React, { useState } from 'react'
import SiteLogo from '../../assets/icons/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { toast } from 'react-toastify'

const USERNAME = 'john32'
const PASSWORD = '87654321'

// initialState
const initialState = {
    username: '',
    password: ''
}

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    let { formData, setFormData, handleChange } = useGetInputValue(initialState)
    const handleLogin = e => {
        e.preventDefault()
        if (formData.username === USERNAME && formData.password === PASSWORD) {
            localStorage.setItem('user-data', JSON.stringify(formData));
            localStorage.setItem('x-auth-token', 'fake-token')
            navigate('/admin/create-products')
            console.log('j');
        } else {
            setError(true)
            toast.error('Username or password is incorrect')
        }
    }
    return (
        <main className='login-page'>
            <section className='login-section'>
                <div className="container">
                    <form onSubmit={handleLogin} className="login-section__content">
                        <Link to={'/'}>
                            <img src={SiteLogo} alt="site logo" />
                        </Link>
                        <input style={{ borderColor: `${error ? 'red' : '#454545'}` }} required onChange={handleChange} value={formData.username} name='username' type="text" placeholder='Username' />
                        <input style={{ borderColor: `${error ? 'red' : '#454545'}` }} required onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' />
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
