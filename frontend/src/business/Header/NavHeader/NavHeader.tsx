import * as React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";


const NavHeader = () => {
    return (
        <>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <Link to={ "/" }>
                    <Box sx={ { display: 'flex', alignItems: 'center', marginRight: 4 } }>
                        <DiamondIcon style={ { height: 32, width: 32, marginRight: 2 } } />
                        <Typography sx={ { fontWeight: 600, letterSpacing: '-1px' } }
                                    variant="h5"
                        >
                            The Count of Money
                        </Typography>
                    </Box>
                </Link>
                <Stack direction="row" alignItems={ 'center' } spacing={ 3 }>
                    <StyledHeadingLink variant={ 'h6' }>
                        <Link to={ "/" }>
                            Cryptocurrencies
                        </Link>
                    </StyledHeadingLink>
                    <StyledHeadingLink variant={ 'h6' }>
                        <Link to={ "/articles" }>
                            Articles
                        </Link>
                    </StyledHeadingLink>
                </Stack>
            </Box>
        </>
    )
};

const StyledHeadingLink = styled(Typography)(({ theme }) => ({
        '&:hover': {
            color: theme.palette.primary.main
        },
        fontSize: '1rem'
    })
);

export default NavHeader;