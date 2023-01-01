import React, { useEffect } from 'react';
import DataGrid from "../../../_common/component/DataGrid/DataGrid";
import { useAppDispatch } from "../../../_core/_store/store";
import { Box, Typography, Stack } from "@mui/material";
import ButtonBasicFocus from "../../../_common/component/Button/ButtonBasicFocus";
import { useLocation } from "react-router-dom";
import { AuthWithGoogle } from "../../../_core/_store/services/auth/slice";


type HomeProps = {
    data: object[]
};

function Home({ data }: HomeProps) {
    const location = useLocation();
    const appDispatch = useAppDispatch();

    useEffect(() => {
        if (location.search) {
            appDispatch(AuthWithGoogle(location.search));
        }
    }, []);

    return (
        <>
            <Box sx={ { pt: 5, pb: 5 } }>
                <Typography sx={ { fontWeight: 600, mb: 1 } } variant='h5'>
                    { "Today's Cryptocurrency Prices by Count of Money" }
                </Typography>
                <Box sx={ { mt: 4 } }>
                    <Stack sx={ { mt: 2, mb: 2 } } direction="row" alignItems={ 'center' } spacing={ 1 }>
                        <ButtonBasicFocus focus={ true } label={ 'Cryptocurrencies' } />
                    </Stack>
                </Box>
                <DataGrid data={ data } />
            </Box>
        </>
    );
}

export default Home;