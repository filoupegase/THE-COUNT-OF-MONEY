import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../../axios";

export const initialStateCrypto = {
    loading: false,
    cryptoData: {},
    error: null,
    success: null,
}

export const getCrypto = createAsyncThunk('fetch/crypto',
    async (cryptoData, { rejectWithValue }) => {
        try {
            const { data } = await axiosClient.get('crypto/popular');
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

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: initialStateCrypto,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCrypto.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(getCrypto.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cryptoData = payload.data
        });
        builder.addCase(getCrypto.rejected, (state, { payload }) => {
            state.loading = false
            // @ts-ignore
            state.error = payload
        });
    }
});