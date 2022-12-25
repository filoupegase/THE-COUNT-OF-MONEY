import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { axiosClient } from "../../../services/axios";


export const initialState = {
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
            console.log('getUser');
            if (token) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${ token }`
                    }
                }
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

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
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
    }
});