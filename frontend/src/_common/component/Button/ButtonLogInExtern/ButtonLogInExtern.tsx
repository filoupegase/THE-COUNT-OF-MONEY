import * as React from 'react';
import { styled, Button } from "@mui/material";


const ButtonLogInExtern = () => {
    return (
        <CustomLogInExtern startIcon={ <img alt='icone Google for authentication'
                                            src="https://cdn.icon-icons.com/icons2/729/PNG/512/google_icon-icons.com_62736.png"
                                            style={ { height: 24 } } /> } variant='outlined'
                           type='text'>Google</CustomLogInExtern>
    )
};

const CustomLogInExtern = styled(Button)(() => ({
    width: "100%",
    padding: '9px 20px',
    fontSize: 20,
    color: '#0F71F2',
    border: `solid 0.1rem #0F71F2`,
    '&:hover': {
        border: `solid 0.1rem #0F71F2`,
    }
}));

export default ButtonLogInExtern;