import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { initialState } from './userInitialState';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: () => {
            console.log('initialState', initialState);
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;