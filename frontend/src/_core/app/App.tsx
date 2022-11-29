import * as React from 'react';
import { Box, styled } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../_store/hooks';
import { increment, decrement, incrementByAmount } from "../_store/reducers/CounterSlice/counterSlice";
import Layout from "../../_common/component/Layout";
import Home from '../home';

function App() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <BoxStyled>
                <button onClick={ () => dispatch(increment()) } type='button'>+</button>
                <button onClick={ () => dispatch(decrement()) } type='button'>-</button>
                <button onClick={ () => dispatch(incrementByAmount(4)) }>incr by amount</button>
                { count }
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={
                                <Home /> } />

                            <Route path="*" element={
                                <Navigate to="/" /> } />
                        </Routes>
                    </Layout>
                </Router>
            </BoxStyled>
        </>
    );
}

const BoxStyled = styled(Box)(() => ({
    background: 'linear-gradient(rgb(243 248 255) 0%, rgba(248, 250, 253, 0) 413px)',
    height: '1200px'
}));

export default App;
