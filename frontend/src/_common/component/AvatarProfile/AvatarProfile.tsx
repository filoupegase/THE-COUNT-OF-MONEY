import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Divider, ListItemIcon, Box, Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { logout } from "../../../_core/_store/services/auth/slice";
import { fetchUserProfile } from "../../../_core/_store/services/user/slice";

interface UserInfo {
    email: string;
    username: string;
    _id: string;
    roles: null;
}

const AvatarProfile = () => {
    const { userInfo } = useAppSelector((state) =>
        state.user);
    const [user, setUser] = useState<UserInfo>({
        email: '',
        username: '',
        _id: '',
        roles: null,
    });
    const appDispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        appDispatch(fetchUserProfile());
    }, [appDispatch]);

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    });
    
    return (
        <>
            <img
                onClick={ handleClick }
                height={ 42 }
                width={ 42 }
                alt='user logged'
                src={ 'https://s3.coinmarketcap.com/static/img/portraits/633520129b613d3454890380.png' }
                style={ { cursor: 'pointer' } }
            />
            <Menu
                anchorEl={ anchorEl }
                id="account-menu"
                open={ open }
                onClose={ handleClose }
                onClick={ handleClose }
                PaperProps={ {
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                } }
                transformOrigin={ { horizontal: 'right', vertical: 'top' } }
                anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
            >
                <MenuItem>
                    <img
                        height={ 70 }
                        width={ 70 }
                        alt='user logged'
                        src={ 'https://s3.coinmarketcap.com/static/img/portraits/633520129b613d3454890380.png' }
                        style={ { marginRight: 12 } }
                    />
                    <Box>
                        <Typography variant='h6'>{ user.username }</Typography>
                        <Typography variant='body2'>{ user.email }</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Person fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={ () => appDispatch(logout()) }>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
};

export default AvatarProfile;