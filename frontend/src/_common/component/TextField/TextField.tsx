import React, { ChangeEvent } from "react";
import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/material/styles";


type TextFieldUiProps = {
    helperText?: string,
    id?: string,
    variant: string,
    fullWidth?: boolean,
    placeholder?: string,
    error?: boolean,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string,
    name: string
};

const TextField = ({
                       name,
                       helperText,
                       id,
                       variant,
                       fullWidth,
                       placeholder,
                       error,
                       value,
                       onChange
                   }: TextFieldUiProps) => {

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        onChange && onChange(event);
    }

    return <CustomTextField
        color='primary'
        id={ id }
        name={ name }
        variant={ variant }
        fullWidth={ fullWidth }
        placeholder={ placeholder }
        error={ error }
        value={ value }
        onChange={ handleOnChange }
        helperText={ helperText }
    />
};

const CustomTextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiInputBase-root.Mui-error': {
        backgroundColor: `${ theme.palette.error.light }`,
    }
}));

export default TextField;