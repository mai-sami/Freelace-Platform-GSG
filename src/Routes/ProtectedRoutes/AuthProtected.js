import React, { Suspense } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import FooterAuth from '../../Components/molecules/Footer/FooterAuth';
import Spinner from '../../Components/molecules/Spinners/Spinners';
import { Containers } from '../../Style/Layout';

function AuthProtected() {
    const navigate = useNavigate();
    const UserAuth = localStorage.getItem('user')
    if (UserAuth) return <Navigate to={'/'} />
    return (
        <>
            <Suspense fallback={<Spinner />} >
                <Outlet />
            </Suspense>
            <FooterAuth />
        </>
    )
}


export default AuthProtected
