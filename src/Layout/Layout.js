import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/molecules/Header/Header";
import Spinner from "../Components/molecules/Spinners/Spinners";
import { Flex } from "../Style/Layout";

export function BaseLayout({ children }) {
    const TokenAuth = localStorage.getItem('user')
    if (!TokenAuth) <Navigate to={'/login'} />
    return (
        <Flex alignItems="start" justifyContent={"flex-start"}>
            <Flex width={"100%"} flexDirection={"column"}>
                <Header />
                <Suspense fallback={<Spinner />} >
                    <Outlet />
                </Suspense>
            </Flex>
        </Flex>
    )
}