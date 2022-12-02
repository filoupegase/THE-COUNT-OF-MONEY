import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { AuthState } from './authState';

export const initialState: AuthState = {
    email: '',
    password: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, { payload }: PayloadAction<object>) {
            console.log(payload);
        }
    }
})

export const authActions = authSlice.actions;
