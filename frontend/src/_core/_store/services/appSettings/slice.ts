import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';
import { axiosClient } from "../../../services/axios";


const initialState = {
    loading: false,
    error: null,
    success: false,
    popularCryptos: null,
    popularRss: null
};

interface AppSettings {
    popularCryptos: number;
    popularRss: number;
}


export const getAppSettings = createAsyncThunk('appSettings/get',
    async (arg, { getState, rejectWithValue }): Promise<AppSettings | undefined> => {
        try {
            const token = (getState() as RootState).auth.userToken;
            const config = { headers: { Authorization: `Bearer ${ token }` } };
            const { data } = await axiosClient.get('settings', config);

            return data;

        } catch (err) {
            //return rejectWithValue
        }
    }
)

export const appSettings = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAppSettings.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAppSettings.fulfilled, (state, { payload }) => {
            state.loading = false;
            // @ts-ignore
            state.popularCryptos = payload.popularCryptos;
            // @ts-ignore
            state.popularRss = payload.popularRss
        });
    }
});