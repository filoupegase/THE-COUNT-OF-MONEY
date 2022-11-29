import * as React from 'react';
import { lazy } from "react";

export const Home = lazy(() => import('../home'));

export type RouteConfig = {
    path: string;
    key: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
    secured: boolean;
};

export const ROUTE_HOME = "/";

const routes: RouteConfig[] = [
    {
        path: ROUTE_HOME,
        key: ROUTE_HOME,
        component: Home,
        secured: false,
    }
];

export default routes;