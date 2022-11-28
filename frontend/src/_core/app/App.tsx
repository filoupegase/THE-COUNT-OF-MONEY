import * as React from 'react';
import Layout from "../../_common/component/Layout";
import { Box } from '@mui/material';
import DataGrid from "../../_common/component/DataGrid";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { increment, decrement, incrementByAmount } from "../store/reducers/CounterSlice/counterSlice";

function App() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={ () => dispatch(increment()) } type='button'>+</button>
            <button onClick={ () => dispatch(decrement()) } type='button'>-</button>
            <button onClick={ () => dispatch(incrementByAmount(4)) }>je sais pas</button>
            { count }
            <Box style={ {
                background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
                height: '1200px'
            } }>
                <Layout>
                    <DataGrid />
                </Layout>
            </Box>
        </>
    );
}

export default App;
