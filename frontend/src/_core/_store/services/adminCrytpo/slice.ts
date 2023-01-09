import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../../services/axios";
import { RootState } from "../../store";


export const initialStateAdminCrypto = {
    loading: false,
    adminCryptoData: [],
    error: null,
    success: null,
}

interface AdminCrypto {
    adminCryptoData: []
}

interface handleCryptoSate {
    cryptoState: boolean;
    crypto_Id: number;
}

export const getAdminCrypto = createAsyncThunk('get/adminCrypto',
    async (adminCryptoData, { getState, rejectWithValue }): Promise<AdminCrypto> => {
        try {
            const token = (getState() as RootState).auth.userToken;
            const config = { headers: { Authorization: `Bearer ${ token }` } };
            const { data } = await axiosClient.get('admin/crypto', config);

            return data;
        } catch {
            // @ts-ignore
            return rejectWithValue;
        }
    }
);

export const updateStateAdminCrypto = createAsyncThunk(
    'users/fetchById',
    async ({ cryptoState, crypto_Id }: handleCryptoSate,
           {
               getState, rejectWithValue
           }) => {
        try {
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                const config = {
                    headers: { Authorization: `Bearer ${ token }` }
                };
                const { data } = await axiosClient.put(
                    `admin/crypto/state/${ crypto_Id }?state=${ cryptoState }`, config);
                return data;
            }
        } catch {
            return rejectWithValue;
        }
    }
)

export const adminCrypto = createSlice({
    name: 'adminCrypto',
    initialState: initialStateAdminCrypto,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAdminCrypto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAdminCrypto.fulfilled, (state, { payload }) => {
            state.loading = true;
            // @ts-ignore
            state.adminCryptoData = payload;
        });
        builder.addCase(getAdminCrypto.rejected, (state, { payload }) => {
            state.loading = false;
            // @ts-ignore
            state.error = payload;
        });
        // builder.addCase(updateStateAdminCrypto.fulfilled, (state, { payload }) => {
        // })
    }
});