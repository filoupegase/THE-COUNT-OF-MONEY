import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";


const Home = lazy(() => import('../home'));
const Profile = lazy(() => import('../profile'));

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