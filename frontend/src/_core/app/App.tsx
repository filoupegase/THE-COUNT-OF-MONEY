import React, { FormEvent } from 'react';
import { Box, styled } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../_store/store";
import { counterSelectors, counterActions } from "../_store/services/counter/slice";
import Layout from "../../_common/component/Layout";
import Home from '../home';
import { Counter } from '../../_common/component/Counter/Counter';

function App() {
    const counterIds = useAppSelector((state) =>
        counterSelectors.selectIds(state)
    );
    const [initialValue, setInitialValue] = React.useState(0)
    const appDispatch = useAppDispatch()
    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        appDispatch(counterActions.addCounter({ initialValue }))
    }

    return (
        <>
            <form action="#" onSubmit={ handleSubmit }>
                <label htmlFor="input-range">initial value: { initialValue }</label>
                <input
                    type="range"
                    name="counter-value"
                    id="counter-value"
                    min={ 0 }
                    max={ 10 }
                    value={ initialValue }
                    onChange={ ({ target }) => {
                        setInitialValue(Number(target.value))
                    } }
                />
                <button type="submit">Add counter</button>
            </form>
            { counterIds.map((counterId) => (
                <Counter key={ `${ counterId }` } counterId={ counterId } />
            )) }

            <BoxStyled>
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
