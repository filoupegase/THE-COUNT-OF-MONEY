import React, { PropsWithChildren } from 'react';
import { Box, styled } from "@mui/material";

const SmashContainer = ({ children }: PropsWithChildren) => {
    const BoxContainer = styled(Box)(() => `
    box-sizing: border-box;
    margin: 0px auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    flex-direction: row;
    -webkit-box-pack: start;
    padding-right: 24px;
    justify-content: flex-start;
    padding-left: 24px;
    margin-top: 40px;
    @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
    }}`);

    return (
        <BoxContainer>
            { children }
        </BoxContainer>
    )
};

export default SmashContainer;