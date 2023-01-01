import React, { useEffect, useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import { useAppSelector } from "../../../_core/_store/store";
import { UserInfo } from '../../../_core/domaine/domaine';
import { Box, Typography } from '@mui/material';
import ButtonBasicIcon from "../../../_common/component/Button/ButtonBasicIcon";
import EditIcon from '@mui/icons-material/Edit';


const Profile = () => {
    // TODO : MAKE A CLEAN HOOK TO GET USER
    const { userInfo } = useAppSelector((state) => state.user);
    const { userToken } = useAppSelector((state) => state.auth);
    const [user, setUser] = useState<UserInfo>({
        email: '', username: '', _id: '', roles: null
    });

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    });

    // TODO: KEEP IT AND USE IT
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const data = await appDispatch(
    //             getUser()
    //         );
    //         console.log('profile', data.payload);
    //     }
    //     fetchUser()
    //         .catch(console.error)
    // }, []);

    if (!userToken) {
        return <Navigate to={ '/' } />
    }
    return (
        <>
            <Box sx={ {
                p: 5, background: 'white', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center'
            } }>
                <Box sx={ { display: 'flex', alignItems: 'center' } }>
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
                <Link to={ "/edit-profile" }>
                    <ButtonBasicIcon
                        icon={
                            <EditIcon
                                sx={ (theme) => ({
                                    color: theme.palette.grey[600]
                                }) } /> }
                        label='Edit'
                    />
                </Link>
            </Box>
        </>
    )
};

export default Profile;