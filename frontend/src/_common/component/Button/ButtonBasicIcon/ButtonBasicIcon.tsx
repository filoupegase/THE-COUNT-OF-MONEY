import * as React from 'react';
import { Button as MuiButton, styled } from "@mui/material";


type ButtonBasicIconProps = {
    label: string;
    icon: JSX.Element
}

const ButtonBasicIcon = ({ label, icon }: ButtonBasicIconProps) => {
    return (
        <CustomBasicButton startIcon={
            icon
        }>{ label }</CustomBasicButton>
    )
};

const CustomBasicButton = styled(MuiButton)(({ theme }) => ({
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        },
        border: `solid 1px ${ theme.palette.grey[300] }`,
        fontWeight: 300,
        background: 'transparent',
        color: 'black',
        padding: "6px 16px",
        fontSize: '0.875rem',
        textTransform: 'capitalize'
    })
);


export default ButtonBasicIcon;