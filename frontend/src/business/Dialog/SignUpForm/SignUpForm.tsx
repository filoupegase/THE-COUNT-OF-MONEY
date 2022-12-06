import React, { FormEvent } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    styled,
} from "@mui/material";


const SignUpForm = () => {

    const handleLoginSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={ handleLoginSubmit }>
                <CustomTextField
                    //error={ inputError }
                    fullWidth
                    //onChange={ handleChangeDescription }
                    id="email"
                    label='username'
                    variant="outlined"
                    //value={ emailValue }
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