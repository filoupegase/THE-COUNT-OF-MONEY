import * as React from 'react';
import { RouterProvider } from "react-router";
import { Box, styled } from '@mui/material';
import Layout from "../../_common/component/Layout";
import router from "../router/router";


function App() {
    return (
        <BoxStyled>
            <Layout>
                <RouterProvider router={ router } />
            </Layout>
        </BoxStyled>
    );
}

const BoxStyled = styled(Box)(() => ({
    background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
}));

export default App;
