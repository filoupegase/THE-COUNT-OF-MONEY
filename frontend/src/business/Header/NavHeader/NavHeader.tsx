import * as React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography, Stack, styled } from "@mui/material";
import ButtonBasicIcon from "../../../_common/component/Button/ButtonBasicIcon";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";


const NavHeader = () => {
    return (
        <>
            <Link to={ "/" }>
                <Box sx={ { display: 'flex', alignItems: 'center' } }>
                    <DiamondIcon style={ { height: 32, width: 32, marginRight: 2 } } />
                    <Stack direction="row" alignItems={ 'center' } spacing={ 3 }>
                        <Typography sx={ { fontWeight: 600, letterSpacing: '-1px', marginRight: 1 } }
                                    variant="h5"
                        >
                            The Count of Money
                        </Typography>
                        <StyledHeadingLink variant={ 'h6' }>
                            Cryptocurrencies
                        </StyledHeadingLink>
                        <StyledHeadingLink variant={ 'h6' }>
                            Articles
                        </StyledHeadingLink>
                    </Stack>
                </Box>
            </Link>
            <Box>
                <ButtonBasicIcon icon={ <StarIcon
                    sx={ () => ({
                        color: '#a6b0c3'
                    }) } /> } label='Watchlist' />
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