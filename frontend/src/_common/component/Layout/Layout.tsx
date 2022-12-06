import React, { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import Header from "../Header";
import Footer from "../Footer";
import AuthHeader from "../../../business/Header/AuthHeader";
import NavHeader from "../../../business/Header/NavHeader";


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
            <Footer />
        </>
    )
};

export default Layout;