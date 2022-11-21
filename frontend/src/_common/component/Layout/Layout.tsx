import React, { PropsWithChildren } from 'react';
import { Container, styled } from '@mui/material';
import Header from "../Header";
import LoginHeader from "../../../business/Header/LoginHeader";
import NavHeader from "../../../business/Header/NavHeader";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <StickyHeader>
                <LoginHeader />
            </StickyHeader>
            <StickyHeader>
                <NavHeader />
            </StickyHeader>
            <Container>
                <div style={ { height: '600px' } }>
                    { children }
                </div>
            </Container>
        </>
    )
};

const StickyHeader = styled(Header)(() => ({
        position: "sticky",
        top: 0,
    })
);


export default Layout;