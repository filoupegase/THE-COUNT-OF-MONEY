import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { history } from '../../../_helpers';

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
//const extraActions = createExtraActions();
//const extraReducers = createExtraReducers();

//const slice = createSlice({ name, initialState, reducers, extraReducers });

//export const authActions = { ...slice.actions, ...extraActions };
//export const authReducer = slice.reducer;


function createInitialState() {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        error: null
    }
}

function createReducers() {
    return {
        logout
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        history.navigate('/home');
    }
}