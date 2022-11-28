import React from 'react';
import { Button as MuiButton, styled } from "@mui/material";

type Button = {
    onClick?: () => void,
    label: string;
    disabled?: boolean;
    variant: string;
};

const Button = ({ label, variant, onClick }: Button) => {
    return (
        <CustomButton onClick={ onClick } variant={ variant } disableElevation>
            { label }
        </CustomButton>
    )
};

const CustomButton = styled(MuiButton)(() => ({
    width: "100%",
    padding: '10px 20px'
}));

export default Button;