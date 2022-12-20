import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosClient } from "../../../services/axios";
import qs from 'qs';
import { LogInFormInterface } from "../../../domaine/domaine";


const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

export const initialState = {
    loading: false,
    userToken,
    error: null,
    success: false,
    googleSuccess: false
}

export const logIn = createAsyncThunk('auth/login',
    async ({ email, password }: LogInFormInterface,
           { rejectWithValue }) => {
        try {
            const { data } = await axiosClient.post(
                'auth/login',
                qs.stringify({ email, password }));
            localStorage.setItem('userToken', data.token)
            return data;
        } catch (error) {
            // @ts-ignore
            if (error && error.response.data.message) {
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
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken');
            state.loading = false;
            state.userToken = null;
            state.error = null;
        },
        updateTokenAuthWithGoogle: (state, { payload }) => {
            if (payload && payload.search !== "") {
                state.userToken = payload.search.slice(7);
                state.googleSuccess = true;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.userToken = payload.token;
        });
        builder.addCase(logIn.rejected, (state, { payload }) => {
            state.loading = false
            // @ts-ignore
            state.error = payload
        });
    }
});

export const { logout, updateTokenAuthWithGoogle } = authSlice.actions;
