import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { axiosClient } from "../../../services/axios";
import qs from "qs";


const initialUserUpdateState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}

interface UserAttributes {
    username: string
    email: string
}

//
// export const userUpdateSlice = createSlice({
//     name: 'userUpdate',
//     initialState: initialUserUpdateState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(updateUser.fulfilled, (state, { payload }) => {
//             state.userInfo[payload.id] = payload
//             //state.userInfo = payload;
//             //state.entities[payload.id] = payload
//         })
//     }
// })