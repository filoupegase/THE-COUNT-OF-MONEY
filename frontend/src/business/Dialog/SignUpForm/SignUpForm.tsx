import React, { useState, FormEvent, ChangeEventHandler } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    styled,
} from "@mui/material";


const SignUpForm = () => {
    const [usernameValue, setUsernameValue] = useState<string>('');

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
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