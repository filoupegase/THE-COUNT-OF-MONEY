import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { getAppSettings } from "../../../_core/_store/services/appSettings/slice";
import { TextField, Box, styled } from "@mui/material";


type SettingsRssCryptoProps = {
    crypto?: boolean;
    rss?: boolean;
}

const SettingsRssCrypto = ({ crypto, rss }: SettingsRssCryptoProps) => {
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
            { crypto &&
                <>
                    <Box
                        sx={ { display: 'flex', flexDirection: 'column' } }
                    >
                        <p> popularCryptos : { popularCryptos }</p>
                        <label htmlFor="crypto">Crypto</label>
                        <StyledTextField
                            id="crypto"
                            name="crypto"
                            type='number'
                            variant="outlined"
                            //onChange={ (e) => handleChangeInput(e) }
                        />
                    </Box>
                </>
            }
            { rss &&
                <>
                    <p> popularRss : { popularRss }</p>
                </>
            }
        </>
    )
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: 100
}));

export default SettingsRssCrypto;