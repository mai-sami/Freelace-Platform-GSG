import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/molecules/Header/Header";
import { Flex } from "../Style/Layout";
  
export function BaseLayout({ children }) {
    const TokenAuth = localStorage.getItem('token')
    if (!TokenAuth) return <Navigate to={'/login'} />
    return (
        <Flex alignItems="start" justifyContent={"flex-start"}>
             <Flex width={"100%"} flexDirection={"column"}>
                <Header />
                <Suspense  >
                <Outlet />
                </Suspense>
            </Flex>
        </Flex>
    )
}