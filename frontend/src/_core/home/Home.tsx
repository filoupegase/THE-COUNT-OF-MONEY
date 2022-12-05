import * as React from 'react';
import DataGrid from "../../_common/component/DataGrid/DataGrid";
//import { useEffect } from "react";
//import { useAppDispatch, useAppSelector } from "../_store/store";
//import { getCrypto } from "../_store/services/crypto/slice";
import { NoFetch } from "./Nofetch";

function Home() {
    //const { cryptoData } = useAppSelector((state) => state.crypto)
    //const appDispatch = useAppDispatch();

    // useEffect(() => {
    //     appDispatch(getCrypto());
    //     console.log('fetch crypto');
    // }, []);

    return (
        <>
            <DataGrid data={ NoFetch } />
        </>
    )
}

export default Home;