import React, { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import Header from "../Header";
import Footer from "../Footer";
import LoginHeader from "../../../business/Header/LoginHeader";
import NavHeader from "../../../business/Header/NavHeader";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header>
                <LoginHeader />
            </Header>
            <Header>
                <NavHeader />
            </Header>
            <Container>
                <div style={ { height: '600px' } }>
                    { children }
                </div>
            </Container>
            <Footer />
        </>
    )
};

export default Layout;