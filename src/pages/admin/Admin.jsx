import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// Components
import Sidebar from '../../components/sidebar/Sidebar'
import AdminHeader from '../../components/admin-header/AdminHeader'

const Admin = () => {
    const [close, setClose] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin/create-products')
    }, [])
    return (
        <div className={`admin ${close ? "close" : ""}`}>
            <Sidebar />
            <div>
                <AdminHeader setClose={setClose} />
                <Outlet />
            </div>
        </div>
    )
}

export default Admin
