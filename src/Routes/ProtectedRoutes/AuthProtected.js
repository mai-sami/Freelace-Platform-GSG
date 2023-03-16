import React, { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../Components/molecules/Footer/Footer';
import HeaderAuth from '../../Components/molecules/Header/HeaderAuth';
import CircularProgress from '../../Components/molecules/Spinners/CircularProgress';
 
function AuthProtected() {
    const TokenAuth = localStorage.getItem('token')
    if (TokenAuth) return <Navigate to={'/'} />
    return (
        <>
        <HeaderAuth />
            <Suspense fallback={<CircularProgress />} >
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}


export default AuthProtected
