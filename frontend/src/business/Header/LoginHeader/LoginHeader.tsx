import React, { useState } from 'react';
import { Box, DialogContent, Divider } from "@mui/material";
import Button from "../../../_common/component/Button";
import DialogLayout from "../../../_common/component/Dialog/DialogLayout";
import DialogActions from "../../../_common/component/Dialog/DialogActions";

const LoginHeader = () => {
    const [open, setOpen] = useState<boolean>(true)

    const handleClickLogin = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box>
            </Box>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <img style={ { marginRight: 12 } } height={ 20 } width={ 20 } alt='diamond logo'
                     src={ 'https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg' } />
                <Box sx={ { mr: 1 } }>
                    <Button onClick={ handleClickLogin } label='login' variant='outlined' />
                </Box>
                <Box>
                    <Button label='sign up' variant='contained' />
                </Box>
            </Box>
            <DialogLayout title='No_Title_beleck' open={ open } onClose={ handleClickLogin }>
                <DialogContent>
                    saltu
                    <Divider>OR</Divider>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </DialogLayout>
        </>
    )
};

export default LoginHeader;