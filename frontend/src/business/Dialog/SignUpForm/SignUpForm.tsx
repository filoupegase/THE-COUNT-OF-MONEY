import React, { useState, FormEvent, ChangeEventHandler } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    styled, Typography,
} from "@mui/material";


const SignUpForm = () => {
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [helperText, setHelperText] = useState<string>('');

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsernameValue(e.target.value);
    }

    const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsernameValue(e.target.value);
    }

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
                    label='username'
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
                    label='email'
                    variant="outlined"
                    value={ emailValue }
                    type='email'
                    margin='normal'
                />
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

export default SignUpForm;