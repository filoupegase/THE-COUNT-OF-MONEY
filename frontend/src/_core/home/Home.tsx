import * as React from 'react';
import DataGrid from "../../_common/component/DataGrid/DataGrid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { getCrypto } from "../_store/services/crypto/slice";
import { Typography } from "@mui/material";


function Home() {
    const { cryptoData } = useAppSelector((state) => state.crypto)
    const appDispatch = useAppDispatch();

    useEffect(() => {
        //appDispatch(getCrypto());
    }, []);

    return (
        <>
            <Typography sx={ { fontWeight: 700, mb: 1 } } variant='h5'>
                { "Today's Cryptocurrency Prices by Count of Money" }
            </Typography>
            <DataGrid data={ cryptoData } />
        </>
    )
}

export default Home;