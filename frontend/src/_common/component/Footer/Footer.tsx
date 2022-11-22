import * as React from 'react';
import { Typography, Box } from "@mui/material";
import SmashContainer from "../SmashContainer";

const Footer = () => {
    return (
        <Box sx={ {
            boxSizing: 'border-box', margin: 0,
            backgroundColor: 'rgb(248, 250, 253)'
        } }>
            <SmashContainer>
                <Box style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                } }>
                    <Typography>
                        Be the first to know about <span>crypto news every day</span>
                    </Typography>
                    <Typography>
                        Get crypto analysis, news and updates right to your inbox! Sign up here so you don&apos;t miss a
                        single
                        newsletter.
                    </Typography>
                </Box>
                <Box>
                    <img alt='image crypto style'
                         src={ 'https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=e7587ae' } />
                </Box>
            </SmashContainer>
        </Box>
    )
};

export default Footer;