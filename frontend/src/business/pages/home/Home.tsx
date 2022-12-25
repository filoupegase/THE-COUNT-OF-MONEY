import * as React from 'react';
import { useEffect } from "react";
import DataGrid from "../../../_common/component/DataGrid/DataGrid";
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { Box, Typography, Stack } from "@mui/material";
import ButtonBasicFocus from "../../../_common/component/Button/ButtonBasicFocus";
import { useLocation } from "react-router-dom";
import { AuthWithGoogle } from "../../../_core/_store/services/auth/slice";


function Home() {
    const location = useLocation();
    const { cryptoData } = useAppSelector((state) => state.crypto);
    const appDispatch = useAppDispatch();

    useEffect(() => {
        if (location.search) {
            appDispatch(AuthWithGoogle(location.search));
        }
    }, []);

    useEffect(() => {
        //appDispatch(getCrypto());
    }, []);

    return (
        <>
            <Typography sx={ { fontWeight: 600, mb: 1 } } variant='h5'>
                { "Today's Cryptocurrency Prices by Count of Money" }
            </Typography>
            <Box sx={ { mt: 4 } }>
                <Stack sx={ { mt: 2, mb: 2 } } direction="row" alignItems={ 'center' } spacing={ 1 }>
                    <ButtonBasicFocus focus={ true } label={ 'Cryptocurrencies' } />
                </Stack>
            </Box>
            <DataGrid data={ cryptoData } />
        </>
    )
}

export default Home;