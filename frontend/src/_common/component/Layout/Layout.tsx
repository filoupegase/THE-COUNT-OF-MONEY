import React, { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import Header from "../Header";
import AuthHeader from "../../../business/Header/AuthHeader";
import NavHeader from "../../../business/Header/NavHeader";
import { Outlet } from "react-router-dom";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header>
                <AuthHeader />
            </Header>
            <Header>
                <NavHeader />
            </Header>
            <Container sx={ { width: 1200, marginTop: 4 } }>
                { children }
            </Container>

            {/* An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. */ }
            <Outlet />
        </>
    )
};

export default Layout;