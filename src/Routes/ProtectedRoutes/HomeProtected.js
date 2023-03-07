import { BaseLayout } from "../../Layout/Layout";
import Login from "../../Pages/Auth/Login";
import Register from "../../Pages/Auth/Register/Register";
import Dashboard from "../../Pages/Home/Dashboard";
import NotFound from "../../Pages/NotFound";
import AuthProtected from "./AuthProtected";

export const router = [
    {
        element: <AuthProtected />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    },
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            // { path: "company-details", element: <CompanyDetail /> },
            // { path: "profile-details", element: <ProfileDetail /> },
            // { path: "create-report", element: <TransfareList /> },
            // {
            //     path: "report",
            //     children: [
            //         { index: true, element: <Reports /> },

            //         { path: "my-report", element: <MyReport /> },
            //         { path: "sebl-report", element: <SEBIReport /> },
            //         { path: "sebl-report", element: <CreateReports /> },
            //         { path: "gri-report", element: <GRIReport /> },
            //         { path: "customize-report", element: <CustomizeReport /> },
            //     ],
            // },
            // {
            //     path: "analytics",
            //     children: [
            //         { index: true, element: <Analytics /> },
            //         { path: "social", element: <Analytics /> },
            //         { path: "analytics", element: <Analytics /> },
            //         { path: "governance", element: <Analytics /> },
            //     ],
            // },
            // { path: "upload-file", element: <UploadFiles /> },
        ],
    },
    { path: "*", element: <NotFound /> },
];
