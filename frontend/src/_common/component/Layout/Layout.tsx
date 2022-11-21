import React, { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div style={ { position: "relative", height: '71px', background: 'white' } }>
            </div>
            <Container>
                <div style={ { position: "relative", height: '600px' } }>
                    { children }
                </div>
            </Container>
        </>
    )
}

export default Layout;