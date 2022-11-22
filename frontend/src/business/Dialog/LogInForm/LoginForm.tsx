import * as React from 'react';
import { useState } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    TextField as MuiTextField
} from "@mui/material";
import Button from "../../../_common/component/Button";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from "@mui/material/styles";

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const LoginForm = () => {
    const [values, setValues] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [value, setValue] = useState<string>('');

    const handleChangeDescription: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
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

    return (
        <>
            <TextField fullWidth
                       onChange={ handleChangeDescription }
                       id="email-form"
                       label="Email Address"
                       variant="outlined"
                       value={ value }
                       type='email'
            />
            <FormControl sx={ { width: '100%' } } variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <CustomOutlinedInput
                    id="outlined-adornment-password"
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
            <Button onClick={ () => console.log('salut') } label='log in' variant='contained' />
            {/*<TextField*/ }
            {/*    name='email' onChange={ (e) => handleChange(e) }*/ }
            {/*    variant='Email' />*/ }

        </>
    )
};

const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    '& .MuiInputBase-root': {
        width: '100%'
    }
}));

export default LoginForm;