import { lazy } from "react";
import { BaseLayout } from "../Layout/Layout";
import Register from "../Pages/Auth/Register/JoinAs/JoinAs";
import Dashboard from "../Pages/Home/Dashboard";
import NotFound from "../Pages/NotFound";
import ProfileVisibility from "../Sections/Dashboard/SideBard/ProfileVisibility";
import AuthProtected from "./ProtectedRoutes/AuthProtected";
import Login from "../Pages/Auth/Login/Login";
import JobsDetails from "../Pages/Home/JobsDetails/JobsDetails";
import Filter from "../Pages/Home/Filter";
import Profile from "../Pages/Home/Profile/Profile";
 

// const Login = lazy(() => import("../Pages/Auth/Login/Login"));
// const Register = lazy(() => import("../Pages/Auth/Register/JoinAs/JoinAs"));
// const Filter = lazy(() => import("../Pages/Filter"));
// const Dashboard = lazy(() => import("../Pages/Home/Dashboard"));
// const JobsDetails = lazy(() => import("../Pages/Home/JobsDetails/JobsDetails"));
// const Profile = lazy(() => import("../Pages/Home/Profile/Profile"));
// const NotFound = lazy(() => import("../Pages/NotFound"));

export const router = [
    {
        element: <AuthProtected />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    }
    ,{
        path: "/",
        element: <BaseLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "/job-details/:id", element: <JobsDetails /> },
            { path: "/filter", element: <Filter /> },
            { path: "profile", element: <Profile /> },
        ],
    },
        { path: "*", element: <NotFound /> }
]
