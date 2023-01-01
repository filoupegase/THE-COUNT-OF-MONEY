import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';
import { axiosClient } from "../../../services/axios";
import qs from "qs";


const initialState = {
    loading: false,
    error: null,
    success: false,
    response: {
        popularCryptos: undefined,
        popularRss: undefined
    }
};

interface AppSettings {
    popularCryptos: string;
    popularRss: string;
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
);

export const updateAppSettings = createAsyncThunk(
    'appSettings/post',
    async ({ popularCryptos, popularRss }: AppSettings,
           { getState, rejectWithValue }) => {
        try {
            const token = (getState() as RootState).auth.userToken;

            if (token) {
                const config = {
                    headers: { Authorization: `Bearer ${ token }` }
                };

                const { data } = await axiosClient.put(
                    'settings', qs.stringify({ popularCryptos, popularRss }),
                    config
                )
                return data;
            }
        } catch (err) {
            console.error(err);
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
            state.response = payload;
        });
        builder.addCase(updateAppSettings.fulfilled, (state, { payload }) => {
            state.success = true;
            state.response = payload;
        });
        builder.addCase(updateAppSettings.rejected, (state) => {
            state.success = false;
        })
    }
});