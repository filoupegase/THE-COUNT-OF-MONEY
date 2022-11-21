import React, { PropsWithChildren } from 'react';
import { Container, styled } from '@mui/material';
import Header from "../Header";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <StickyHeader />
            <Container>
                <div style={ { position: "relative", height: '600px' } }>
                    { children }
                </div>
            </Container>
        </>
    )
};

const StickyHeader = styled(Header)(() => ({
        position: "sticky",
        top: 0
    })
);


export default Layout;