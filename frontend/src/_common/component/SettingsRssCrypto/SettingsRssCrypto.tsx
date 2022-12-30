import React, { useEffect, useState } from 'react';
import { getAppSettings } from '../../../_core/apiServices/AppSettings';


const SettingsRssCrypto = () => {
    const [dataApp, setDataApp] = useState<any>({
        popularCryptos: '', popularRss: ''
    });

    useEffect(() => {
        const res = async () => {
            const data = await getAppSettings();
            if (data) {
                setDataApp(data)
            }
        }
        res().catch(console.error);
    }, []);

    return (
        <>
            <p> popularCryptos : { dataApp.popularCryptos }</p>
            <p> popularRss : { dataApp.popularRss }</p>
        </>
    )
}

export default SettingsRssCrypto;