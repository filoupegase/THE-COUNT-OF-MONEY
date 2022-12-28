import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { axiosClient } from "../../../services/axios";
import qs from "qs";


const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

export const getUser = createAsyncThunk('user/profile',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                const config = { headers: { Authorization: `Bearer ${ token }` } }
                const { data } = await axiosClient.get('user/profile', config)
                return data;
            }
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

interface UserAttributes {
    username: string
    email: string
}


export const updateUser = createAsyncThunk('user/update',
    async ({ email, username }: UserAttributes,
           { getState, rejectWithValue }) => {
        try {
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                const config = {
                    headers: { Authorization: `Bearer ${ token }` }
                };
                const { data } = await axiosClient.post(
                    'user/', qs.stringify({ email, username }),
                    config
                )
                return data;
            }
        } catch (error) {
            console.error(error);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
        });
        builder.addCase(getUser.rejected, (state, { payload }) => {
            state.loading = false;
            // @ts-ignore
            state.error = payload;
        });
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
        });
    }
});