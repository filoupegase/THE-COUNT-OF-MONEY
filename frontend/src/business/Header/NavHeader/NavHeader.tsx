import * as React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography } from "@mui/material";

const NavHeader = () => {
    return (
        <>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <DiamondIcon style={ { height: 41, width: 41, marginRight: 5 } } />
                <Typography variant="h6">The Count of Money</Typography>
            </Box>
            <Box>
            </Box>s
        </>
    )
};

export default NavHeader;