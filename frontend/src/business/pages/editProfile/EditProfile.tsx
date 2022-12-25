import * as React from 'react';
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../_core/_store/store";
import { useEffect, useState } from "react";
import { UserInfo } from "../../../_core/domaine/domaine";
import { Box, Divider, Typography, Button, styled, TextField } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import DoubleButtonAction from "../../../_common/component/Button/ButtonDoubleAction/ButtonDoubleAction";


const EditProfile = () => {
    // TODO : MAKE A CLEAN HOOK TO GET USER
    const { userInfo } = useAppSelector((state) => state.user);
    const { userToken } = useAppSelector((state) => state.auth);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [user, setUser] = useState<UserInfo>({
        email: '', username: '', _id: '', roles: null
    });

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    });

    if (!userToken) {
        return <Navigate to={ '/' } />
    }
    return (
        <>
            <Box sx={ { p: 5, background: 'white' } }>
                <Box sx={ { pt: 1, pb: 2 } }>
                    <StyledBackButton href={ '/profile' }>
                        <KeyboardArrowLeft sx={ { fontSize: 25 } } />
                        <Typography variant='h5'>Profile</Typography>
                    </StyledBackButton>
                </Box>
                <Divider />
                <Box
                    component="form"
                    sx={ {
                        mt: 2,
                        mb: 2,
                        '& > :not(style)': { mt: 2, mb: 2, width: '100%' }
                    } }
                    autoComplete="off"
                >
                    <TextField
                        id="username"
                        type='text'
                        variant="outlined"
                        value={ user.username }
                    />
                    <TextField
                        id="email"
                        type='email'
                        variant="outlined"
                        value={ user.email }
                    />
                    <Box
                        sx={ { display: 'flex', justifyContent: 'flex-end' } }
                    >
                        <DoubleButtonAction
                            onClickCancel={ () => console.log() }
                            onSubmit={ () => console.log() }
                            disabled={ disabled }
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
};

const StyledBackButton = styled(Button)(() => ({
        padding: '1px 10px 1px 0',
        textTransform: 'none',
    }
));

export default EditProfile;