import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import ErrorPage from "../pages/_error/ErrorPage";
import LayoutPage from "../pages/_layout/LayoutPage";
import HomePage from "../pages/_home/HomePage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";


export const router = createBrowserRouter([{
    path: "",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: Routes.Home,
            element: <HomePage />
        },
        {
            path: Routes.Login,
            element: <LoginPage />
        },
        {
            path: Routes.Register,
            element: <RegisterPage />
        }
    ],
}])