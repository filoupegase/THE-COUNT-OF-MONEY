import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";


const Home = lazy(() => import('../../business/pages/home'));
const Profile = lazy(() => import('../../business/pages/profile'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    }
]);

export default router;