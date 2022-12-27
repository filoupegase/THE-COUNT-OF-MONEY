import * as React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, styled } from '@mui/material';
import Layout from "../../_common/component/Layout";
import Footer from "../../_common/component/Footer";
import Home from '../../business/pages/home';
import Profile from '../../business/pages/profile';
import Articles from '../../business/pages/articles/Articles';
import EditProfile from "../../business/pages/editProfile";


function App() {
    const location = useLocation();

    return (
        <BoxStyled>
            <Layout>
                <Routes>
                    <Route path={ '/' } element={ <Home /> } />
                    <Route path={ '/profile' } element={ <Profile /> } />
                    <Route path={ '/edit-profile' } element={ <EditProfile /> } />
                    <Route path={ '/articles' } element={ <Articles /> } />
                </Routes>
            </Layout>
            { location.pathname === '/' ? <Footer /> : null }
        </BoxStyled>
    );
}

const BoxStyled = styled(Box)(() => ({
    background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
}));

export default App;
