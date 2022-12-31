import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { getAppSettings } from "../../../_core/_store/services/appSettings/slice";


const SettingsRssCrypto = () => {
    const appDispatch = useAppDispatch();
    const { popularCryptos, popularRss } = useAppSelector((state) => state.appSettings);

    useEffect(() => {
        const res = async () => {
            await appDispatch(
                getAppSettings()
            )
        }
        res().catch(error => console.error(error));
    }, []);


    return (
        <>
            <p> popularCryptos : { popularCryptos }</p>
            <p> popularRss : { popularRss }</p>
        </>
    )
}

export default SettingsRssCrypto;