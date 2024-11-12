 import {
    createBrowserRouter,Navigate
} from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/main";
import Dashboard from "../pages/Dashboard";


const routes = [
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: '/',
                element: <Navigate to="home" replace />
            },
            {
                path: 'home',
                Component: Home,
            },
            {
                path: 'dashboard',
                Component: Dashboard,
            }
        ]
    },
];

export default createBrowserRouter(routes)
