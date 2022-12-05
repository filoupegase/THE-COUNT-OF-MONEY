import * as React from 'react';
import { Box, styled, Button } from "@mui/material";


const ButtonLogInExtern = () => {
    return (
        <Box sx={ { pt: 2, pb: 2 } }>
            <CustomLogInExtern variant='outlined' type='text'>github</CustomLogInExtern>
        </Box>
    )
};

const CustomLogInExtern = styled(Button)(() => ({
    width: "100%",
    padding: '11px 20px',
    fontSize: 17,
}));

export default ButtonLogInExtern;