import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import { axiosClient } from "../../../axios";

export const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

export const fetchUserProfile = createAsyncThunk('user/profile',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // @ts-ignore
            const { auth } = getState();
            const config = {
                headers: {
                    Authorization: `Bearer ${ auth.userToken }`,
                },
            }
            const { data } = await axiosClient.get('user/profile', config)
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

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        });
        builder.addCase(fetchUserProfile.rejected, (state, { payload }) => {
            state.loading = false
            // @ts-ignore
            state.error = payload
        });
    }
});

//export const {} = userSlice.actions;