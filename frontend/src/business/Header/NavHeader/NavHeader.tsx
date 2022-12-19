import * as React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography } from "@mui/material";
import ButtonBasicIcon from "../../../_common/component/Button/ButtonBasicIcon";
import StarIcon from "@mui/icons-material/Star";


const NavHeader = () => {
    return (
        <>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <DiamondIcon style={ { height: 32, width: 32, marginRight: 5 } } />
                <Typography sx={ { fontWeight: 600, letterSpacing: '-1px' } }
                            variant="h6"
                >
                    The Count of Money
                </Typography>
            </Box>
            <Box>
                <ButtonBasicIcon icon={ <StarIcon
                    sx={ (theme) => ({
                        color: '#a6b0c3'
                    }) } /> } label='Watchlist' />
            </Box>
        </>
    )
};

export default NavHeader;