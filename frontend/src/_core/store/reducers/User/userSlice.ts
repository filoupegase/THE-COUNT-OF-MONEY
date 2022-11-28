import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { initialState } from './userInitialState';
//import { axiosClient } from '../../../axios';
import axios from 'axios';
import qs from 'qs';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<object>) => {
            //console.log(action.payload);
            axios.post('http://localhost:4000/api/auth/login/', qs.stringify({
                email: 'salut@coucou.fr',
                password: 'testtest'
            }))
                .then((res) => {
                    console.log(res);
                })
                .catch()
        },
        get: () => {
            axios.get('http://localhost:4000/api/')
                .then((res) => {
                    console.log('nico', res);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
});

export const { login, get } = userSlice.actions;

export default userSlice.reducer;