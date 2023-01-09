import React, { FormEvent, ChangeEvent, useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { UserInfo } from "../../../_core/domaine/domaine";
import { Box, Divider, Typography, Button, styled, TextField } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import DoubleButtonAction from "../../../_common/component/Button/ButtonDoubleAction/ButtonDoubleAction";
import { updateUser } from '../../../_core/_store/services/user/slice';


const EditProfile = () => {
    // TODO : MAKE A CLEAN HOOK TO GET USER
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    const { userInfo } = useAppSelector((state) => state.user);
    const { userToken } = useAppSelector((state) => state.auth);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [initialForm, setInitialForm] = useState<any>({
        email: '', username: ''
    });
    const [user, setUser] = useState<UserInfo>({
        email: '', username: '', _id: '', roles: null
    });

    const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.target.id === 'username'
            ? setUser({ ...user, username: e.target.value })
            : setUser({ ...user, email: e.target.value })
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const resultAction = await appDispatch(
            updateUser({
                    email: user.email,
                    username: user.username
                }
            )
        )
        if (resultAction.payload) {
            return navigate(-1)
        }
    };

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
            // @ts-ignore
            setInitialForm({ email: userInfo.email, username: userInfo.username });
        }
    }, [userInfo]);

    useEffect(() => {
        if (user.email !== initialForm.email || user.username !== initialForm.username) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    });

    if (!userToken) {
        return <Navigate to={ '/' } />
    }
    return (
        <>
            <Box sx={ { p: 5, background: 'white' } }>
                <Box sx={ { pt: 1, pb: 2 } }>
                    <Link to={ "/profile" }>
                        <StyledBackButton>
                            <KeyboardArrowLeft sx={ { fontSize: 28 } } />
                            <Typography variant='h5'>Profile</Typography>
                        </StyledBackButton>
                    </Link>
                </Box>
                <Divider />
                <Box
                    component="form"
                    onSubmit={ handleSubmit }
                    sx={ {
                        mt: 4, mb: 2,
                        '& > :not(style)': { mt: 2, mb: 2, width: '100%' }
                    } }
                    autoComplete="off"
                >
                    <label htmlFor="username">Username</label>
                    <TextField
                        id="username"
                        name="username"
                        type='text'
                        variant="outlined"
                        value={ user.username }
                        onChange={ (e) => handleChangeInput(e) }
                    />
                    <Box sx={ { mt: 1 } }></Box>
                    <label htmlFor="email">Email</label>
                    <TextField
                        id="email"
                        name='email'
                        type='email'
                        variant="outlined"
                        value={ user.email }
                        onChange={ (e) => handleChangeInput(e) }
                    />
                    <Box
                        sx={ { display: 'flex', justifyContent: 'flex-end' } }
                    >
                        <DoubleButtonAction
                            typeBtn={ 'submit' }
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
            color: "black"
        }
    )
);

export default EditProfile;