import React, { PropsWithChildren } from 'react';
import { Box, styled } from '@mui/material';

const Header = ({ children }: PropsWithChildren) => {
    return (
        <BoxHeader>
            { children }
        </BoxHeader>
    )
};

const BoxHeader = styled(Box)(() => ({
        height: 'auto',
        background: 'white',
        borderBottom: "1px solid #eff2f5",
        padding: "8px clamp(16px, (100vw - 1280px) / 2, 9999px)"
    })
);


export default Header;
