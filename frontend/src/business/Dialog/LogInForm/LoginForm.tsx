import React, { useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    styled,
    Button
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { authActions } from "../../../_core/_store/services/auth/slice";
import { AuthState } from "../../../_core/_store/services/auth/authState";

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const LoginForm = () => {
    const auth = useAppSelector((state) => state.auth);
    const appDispatch = useAppDispatch();
    const [emailValue, setEmailValue] = useState<string>('');
    const [values, setValues] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangeDescription: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmailValue(e.target.value);
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const loginPayload = {
        email: emailValue,
        password: values.password
    } as AuthState;

    const logIn = () => appDispatch(authActions.login(loginPayload));

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailValue.length < 0 || values.password.length < 0) {
            logIn();
        }
    };

    return (
        <>
            <Box sx={ { pt: 4 } }>
                <form onSubmit={ handleLoginSubmit }>
                    <TextField fullWidth
                               onChange={ handleChangeDescription }
                               id="email"
                               label="Email Address"
                               variant="outlined"
                               value={ emailValue }
                               type='email'
                    />
                    <FormControl sx={ { width: '100%', mt: 2 } } variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <CustomOutlinedInput
                            id="password"
                            type={ values.showPassword ? 'text' : 'password' }
                            value={ values.password }
                            onChange={ handleChange('password') }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ handleClickShowPassword }
                                        onMouseDown={ handleMouseDownPassword }
                                        edge="end"
                                    >
                                        { values.showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            fullWidth
                        />
                    </FormControl>
                    <Box sx={ { mt: 4 } }>
                        <CustomMuiButton type='submit' variant="contained" disableElevation>
                            log In
                        </CustomMuiButton>
                    </Box>
                </form>
            </Box>
        </>
    )
};

const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    '& .MuiInputBase-root': {
        width: '100%'
    }
}));

const CustomMuiButton = styled(Button)(() => ({
    width: "100%",
    padding: '11px 20px'
}));

export default LoginForm;