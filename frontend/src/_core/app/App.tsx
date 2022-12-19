import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box, styled } from '@mui/material';
import Layout from "../../_common/component/Layout";
import Home from '../home';
import Profile from '../profile';


function App() {
    return (
        <BoxStyled>
            <Layout>
                <Routes>
                    <Route path={ '/' } element={ <Home /> } />
                    <Route path={ '/profile' } element={ <Profile /> } />
                </Routes>
            </Layout>
        </BoxStyled>
    );
}

const BoxStyled = styled(Box)(() => ({
    background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
}));

export default App;
