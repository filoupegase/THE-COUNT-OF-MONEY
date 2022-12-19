import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../_store/store";
import { UserInfo } from '../domaine/domaine';
import { Box, Typography } from '@mui/material';
import ButtonBasicIcon from "../../_common/component/Button/ButtonBasicIcon";
import EditIcon from '@mui/icons-material/Edit';


const Profile = () => {
    const { userInfo } = useAppSelector((state) => state.user);
    const [user, setUser] = useState<UserInfo>({
        email: '', username: '', _id: '', roles: null,
    });

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    });

    if (user) {
        console.log('la', user);
    }

    if (!user || user.username === '') {
        return <Navigate to={ '/' } />
    }
    return (
        <>
            <Box sx={ { display: 'flex' } }>
                <Box sx={ { position: 'relative' } }>
                    <img
                        height={ 100 }
                        width={ 100 }
                        alt='user avatar profile'
                        src={ 'https://s3.coinmarketcap.com/static/img/portraits/633520129b613d3454890380.png' }
                    />
                    <Box sx={ { position: 'absolute', top: -37, left: 27 } }>
                        <p style={ { fontSize: 44 } }>👽</p>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h6'> @{ user.username } </Typography>
                    <Typography variant='body2'> { user.email } </Typography>
                </Box>
            </Box>
            <ButtonBasicIcon icon={ <EditIcon sx={ (theme) => ({ color: theme.palette.grey[700] }) } /> }
                             label='Edit' />
        </>
    )
};

export default Profile;