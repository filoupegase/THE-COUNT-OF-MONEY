import React, { useEffect, useState } from 'react';
import { useAppSelector } from "../_store/store";
import { UserInfo } from '../domaine/domaine';
import { Box } from '@mui/material';


const Profile = () => {
    const { userInfo } = useAppSelector((state) => state.user);
    const [user, setUser] = useState<UserInfo>({
        email: '', username: '', _id: '', roles: null,
    });

    useEffect(() => {
        console.log('saluts');
    });

    return (
        <>
            <Box
                sx={ { position: 'relative' } }>
                <img
                    height={ 100 }
                    width={ 100 }
                    alt='user avatar profile'
                    src={ 'https://s3.coinmarketcap.com/static/img/portraits/633520129b613d3454890380.png' }
                />
                <Box sx={ {
                    position: 'absolute', top: -37, left: 27
                } }>
                    <p
                        style={ { fontSize: 44 } }
                    >👽</p>
                </Box>
            </Box>
        </>
    )
};

export default Profile;