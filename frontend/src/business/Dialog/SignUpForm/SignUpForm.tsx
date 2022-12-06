import React, { useState, FormEvent, ChangeEventHandler } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    styled, Typography, InputAdornment, IconButton,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { State } from '../LogInForm';


const SignUpForm = () => {
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [helperText, setHelperText] = useState<string>('');
    const [valuesPassword, setValuesPassword] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsernameValue(e.target.value);
    };

    const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmailValue(e.target.value);
    };

    const handleChangePassword = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuesPassword({ ...valuesPassword, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValuesPassword({
            ...valuesPassword,
            showPassword: !valuesPassword.showPassword,
        });
    };

    const handleLoginSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={ handleLoginSubmit }>
                <CustomTextField
                    error={ false }
                    fullWidth
                    onChange={ handleChangeUsername }
                    id="username-input"
                    label='Username'
                    variant="outlined"
                    value={ usernameValue }
                    type='text'
                    margin='normal'
                />
                <CustomTextField
                    error={ false }
                    fullWidth
                    onChange={ handleChangeEmail }
                    id="email-input"
                    label='Email'
                    variant="outlined"
                    value={ emailValue }
                    type='email'
                    margin='normal'
                />
                <FormControl sx={ { width: '100%', mt: 1 } } variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <CustomOutlinedInput
                        error={ false }
                        id="password-input"
                        type={ valuesPassword.showPassword ? 'text' : 'password' }
                        value={ valuesPassword.password }
                        onChange={ handleChangePassword('password') }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={ handleClickShowPassword }
                                    onMouseDown={ handleMouseDownPassword }
                                    edge="end"
                                >
                                    { valuesPassword.showPassword ? <VisibilityOff /> : <Visibility /> }
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        fullWidth
                    />
                </FormControl>

                {
                    //inputError &&
                    <Typography color='error' sx={ { mt: 1, fontWeight: 300, fontSize: '0.90rem' } }
                    >{ helperText }</Typography>
                }
            </form>
        </>
    )
}

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root.Mui-error': {
        backgroundColor: `${ theme.palette.error.light }`,
    }
}));

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    '& .MuiInputBase-root': {
        width: '100%'
    },
    '&.Mui-error': {
        backgroundColor: `${ theme.palette.error.light }`,
    }
}));

export default SignUpForm;