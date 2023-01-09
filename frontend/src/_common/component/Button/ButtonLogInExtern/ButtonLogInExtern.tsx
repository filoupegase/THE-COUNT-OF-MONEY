import * as React from 'react';
import { styled, Button } from "@mui/material";
import authGoogle from "../../../../_core/services/GoogleAuth/googleAuth";
import Google from '../../../../asset/Google_.png'


const ButtonLogInExtern = () => {

    const handleClick = () => {
        authGoogle()
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <CustomLogInExtern onClick={ handleClick }
                           startIcon={
                               <img alt='icone Google for authentication'
                                    src={ Google }
                                    style={ { height: 25 } } /> }
                           variant='outlined'
                           type='text'
        >
            Google
        </CustomLogInExtern>
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