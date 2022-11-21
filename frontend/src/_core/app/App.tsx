import * as React from 'react';
import Layout from "../../_common/component/Layout";
import { Box } from '@mui/material';

function App() {

    return (
        <Box style={ {
            background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
            height: '1200px'
        } }>
            <Layout>
            </Layout>
        </Box>
    );
}

export default App;
