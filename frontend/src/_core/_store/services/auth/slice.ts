import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from "../../../services/api/auth-service";
import { ApiResponse, AuthenticationResponse } from "../../../domaine/domaine";

export type AuthState = {
    payload: ApiResponse<AuthenticationResponse | null>;
};

export const initialState: AuthState = {
    payload: { content: null }
}

export const logIn = createAsyncThunk('users/fetchAll', async () => {
    return await AuthService.login()
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, { payload }: PayloadAction<object>) {
        //     axiosClient.post('auth/login', qs.stringify(payload))
        //         .then((res) => {
        //             console.log(res.data);
        //         }).catch(error => console.error(error)
        //     )
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            // @ts-ignore
            state = { payload };
            return state
        })
    }
})

export const authActions = authSlice.actions;
