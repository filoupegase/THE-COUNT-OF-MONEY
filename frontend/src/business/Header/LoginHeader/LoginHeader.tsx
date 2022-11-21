import * as React from 'react';
import { Box } from "@mui/material";
import Button from "../../../_common/component/Button";

const LoginHeader = () => {
    return (
        <>
            <Box>
            </Box>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <img style={ { marginRight: 12 } } height={ 20 } width={ 20 } alt='diamond logo'
                     src={ 'https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg' } />
                <Box sx={ { mr: 1 } }>
                    <Button label='login' variant='outlined' />
                </Box>
                <Box>
                    <Button label='sign up' variant='contained' />
                </Box>
            </Box>
        </>
    )
};

export default LoginHeader;