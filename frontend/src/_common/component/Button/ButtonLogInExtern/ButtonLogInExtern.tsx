import * as React from 'react';
import { styled, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';


const ButtonLogInExtern = () => {
    return (
        <CustomLogInExtern startIcon={ <GitHubIcon style={ { fontSize: 24 } } /> } variant='outlined'
                           type='text'>Github</CustomLogInExtern>
    )
};

const CustomLogInExtern = styled(Button)(({ theme }) => ({
    width: "100%",
    padding: '11px 20px',
    fontSize: 20,
    color: theme.palette.common.black,
    border: `solid 0.1rem ${ theme.palette.common.black }`,
    '&:hover': {
        border: `solid 0.1rem ${ theme.palette.common.black }`,
    }
}));

export default ButtonLogInExtern;