import * as React from 'react';
import { Button as MuiButton, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const ButtonBasicIcon = () => {
    return (
        <CustomBasicButton startIcon={ <StarIcon
            sx={ (theme) => ({
                color: theme.palette.grey[400]
            }) } />
        }>Watchlist</CustomBasicButton>
    )
};

const CustomBasicButton = styled(MuiButton)(({ theme }) => ({
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        },
        fontWeight: 300,
        background: 'transparent',
        color: 'black',
        padding: "6px 16px",
        fontSize: '0.875rem',
        textTransform: 'capitalize'
    })
);


export default ButtonBasicIcon;