import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { initialState } from './userInitialState';
import { axiosClient } from '../../../axios';
import qs from 'qs';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            axiosClient.post('auth/login/', qs.stringify(action.payload))
                .then((res) => {
                    console.log(res.data.token);
                    const token = res.data.token;
                })
                .catch(error => {
                    console.error(error);
                })
        },
        logout: () => initialState
    }
});

export const { login } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;