import React, { useState, FormEvent, ChangeEventHandler, useEffect } from "react";
import {
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    styled, Typography, InputAdornment, IconButton, Box,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { State } from '../LogInForm';
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { SignUp } from "../../../_core/_store/services/register/slice";
import { SignUpFormInterface } from "../../../_core/domaine/domaine";


const SignUpForm = () => {
    const { error } = useAppSelector((state) => state.register);
    const appDispatch = useAppDispatch();
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [inputError, setInputError] = useState<boolean>(false);
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
        setInputError(false);
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

    useEffect(() => {
        if (error) {
            setInputError(true);
            setHelperText(error);
        }
    }, [error]);

    const handleLoginSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (usernameValue.length <= 0 || usernameValue.length <= 0) {
            setHelperText('Please fill in all the fields');
            setInputError(true);
        } else {
            appDispatch(SignUp({
                email: emailValue,
                password: valuesPassword.password,
                username: usernameValue
            } as SignUpFormInterface));
        }
    };

    return (
        <>
            <form onSubmit={ handleLoginSubmit }>
                <CustomTextField
                    error={ inputError }
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
                    error={ inputError }
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
                        error={ inputError }
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
                    inputError &&
                    <Typography color='error' sx={ { mt: 1, fontWeight: 300, fontSize: '0.90rem' } }
                    >{ helperText }</Typography>
                }
                <Box sx={ { mt: 3 } }>
                    <CustomMuiButton
                        type='submit'
                        variant="contained"
                        disableElevation
                        //loading={ loading }
                    >
                        Sign Up
                    </CustomMuiButton>
                </Box>
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

const CustomMuiButton = styled(LoadingButton)(() => ({
    width: "100%",
    padding: '11px 20px',
    fontSize: 18
}));

export default SignUpForm;