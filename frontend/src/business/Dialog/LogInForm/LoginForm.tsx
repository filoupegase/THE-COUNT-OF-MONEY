import React, { FormEvent, useEffect, useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    styled,
    Typography
} from "@mui/material";
import { LoadingButton } from '@mui/lab'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { LoginFormInterface } from '../../../_core/domaine/domaine';
import { logIn } from '../../../_core/_store/services/auth/slice';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const LoginForm = () => {
    const { loading, error } = useAppSelector((state) => state.auth);
    const appDispatch = useAppDispatch();
    const [inputError, setInputError] = useState<boolean>(false);
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
        setInputError(false);
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        setInputError(false);
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

    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        appDispatch(logIn({
            email: emailValue,
            password: values.password
        } as LoginFormInterface));
    };

    useEffect(() => {
        if (error) {
            setInputError(!inputError);
        }
    }, [error]);

    return (
        <Box sx={ { pt: 0 } }>
            <form onSubmit={ handleLoginSubmit }>
                <TextField
                    error={ inputError }
                    fullWidth
                    onChange={ handleChangeDescription }
                    id="email"
                    label={ inputError ? 'Error' : "Email Address" }
                    variant="outlined"
                    value={ emailValue }
                    type='email'
                    margin='normal'
                />
                <FormControl sx={ { width: '100%', mt: 1 } } variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <CustomOutlinedInput
                        error={ inputError }
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
                        label={ inputError ? 'Error' : "Password" }
                        fullWidth
                    />
                </FormControl>
                { inputError &&
                    <Typography color='error' sx={ { mt: 1, fontWeight: 300, fontSize: '0.90rem' } }>Email or Password
                        Invalid</Typography>
                }
                <Box sx={ { mt: 3 } }>
                    <CustomMuiButton
                        type='submit'
                        variant="contained"
                        disableElevation
                        loading={ loading }
                    >
                        log In
                    </CustomMuiButton>
                </Box>
            </form>
        </Box>
    )
};

const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    '& .MuiInputBase-root': {
        width: '100%'
    }
}));

const CustomMuiButton = styled(LoadingButton)(() => ({
    width: "100%",
    padding: '11px 20px',
    fontSize: 17
}));

export default LoginForm;