import * as React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography } from "@mui/material";

const NavHeader = () => {
    return (
        <>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <DiamondIcon style={ { height: 38, width: 38, marginRight: 5 } } />
                <Typography sx={ { fontWeight: 600, letterSpacing: '-1px' } } variant="h6">The Count of
                    Money</Typography>
            </Box>
            <Box>
            </Box>
        </>
    )
};

export default NavHeader;