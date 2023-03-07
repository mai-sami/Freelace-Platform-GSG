import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthProtected() {
    const TokenAuth = localStorage.getItem('token')
    if (TokenAuth) return <Navigate to={'/'} />
    return (
        <>
            <Outlet />
        </>
    )
}


export default AuthProtected
