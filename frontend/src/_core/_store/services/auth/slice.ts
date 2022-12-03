import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosClient } from "../../../axios";
import qs from 'qs';
import { LoginFormInterface } from "../../../domaine/domaine";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

export const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
}

export const logIn = createAsyncThunk('users/login',
    async ({ email, password }: LoginFormInterface,
           { rejectWithValue }) => {
        try {
            const { data } = await axiosClient.post(
                'auth/login',
                qs.stringify({ email, password }));
            localStorage.setItem('userToken', data.token)
            return data;
        } catch (error) {
            // @ts-ignore
            if (error.response && error.response.data.message) {
                // @ts-ignore
                return rejectWithValue(error.response.data.message)
            } else {
                // @ts-ignore
                return rejectWithValue(error.message)
            }
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.token
            console.log(state.userToken);
        });
        builder.addCase(logIn.rejected, (state, { payload }) => {
            state.loading = false
            // @ts-ignore
            state.error = payload
        });
    }
});

export const authActions = authSlice.actions;
