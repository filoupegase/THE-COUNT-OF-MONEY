import * as React from 'react';
import { Button as MuiButton, styled } from "@mui/material";


type ButtonBasicFocusProps = {
    label: string
    focus: boolean;
    onClick?: () => void;
}

const ButtonBasicFocus = ({ label, focus }: ButtonBasicFocusProps) => {

    const StyledButtonBasicFocus = styled(MuiButton)(({ theme }) => ({
            background: focus ? 'rgb(240, 246, 255)' : 'transparent',
            fontWeight: 500,
            color: focus ? theme.palette.primary.main : theme.palette.grey[600],
            padding: '5px 14px',
            fontSize: '0.730rem',
            textTransform: 'capitalize'
        })
    );

    return (
        <StyledButtonBasicFocus>
            { label }
        </StyledButtonBasicFocus>
    )
};

export default ButtonBasicFocus;