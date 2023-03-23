import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Components/molecules/Footer/Footer";
import Header from "../Components/molecules/Header/Header";
import CircularProgress from "../Components/molecules/Spinners/CircularProgress";
import { Flex } from "../Style/Layout";

export function BaseLayout() {
    const TokenAuth = localStorage.getItem('token')
     if (!TokenAuth) return <Navigate to={'/login'} />
    return (
        <Flex alignItems="start" justifyContent={"flex-start"}>
            <Flex width={"100%"} flexDirection={"column"}>
                <Header />
                <Suspense fallback={<CircularProgress />} >
                    <Outlet />
                </Suspense>
                <Footer />
            </Flex>
        </Flex>
    )
}