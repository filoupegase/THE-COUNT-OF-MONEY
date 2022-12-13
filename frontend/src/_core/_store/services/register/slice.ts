import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignUpFormInterface } from "../../../domaine/domaine";
import { axiosClient } from "../../../services/axios";
import qs from "qs";


export const initialRegisterState = {
    loading: false,
    userEmail: '',
    userName: '',
    error: null,
    success: false,
}

export const SignUp = createAsyncThunk('auth/signup',
    async ({ email, password, username }: SignUpFormInterface,
           { rejectWithValue }) => {
        try {
            const { data } = await axiosClient.post(
                '/auth/signup',
                qs.stringify({ email, password, username }));
            return data;
        } catch (error) {
            // @ts-ignore
            if (error.response && error.response.data.error) {
                // @ts-ignore
                return rejectWithValue(error.response.data.error.message)
            } else {
                // @ts-ignore
                return rejectWithValue('An error occurred');
            }
        }
    }
);

export const registerSlice = createSlice({
    name: 'register',
    initialState: initialRegisterState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SignUp.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(SignUp.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
            // @ts-ignore
            state.userEmail = payload.user.email
            state.userName = payload.user.username
        });
        builder.addCase(SignUp.rejected, (state, { payload }) => {
            state.loading = false
            // @ts-ignore
            state.error = payload
        });
    }
});