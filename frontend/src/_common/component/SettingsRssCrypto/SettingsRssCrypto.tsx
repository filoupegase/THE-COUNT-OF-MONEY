import React, { ChangeEventHandler, useState } from 'react';
import { useAppSelector } from "../../../_core/_store/store";
import { TextField, Box, styled } from "@mui/material";


type SettingsRssCryptoProps = {
    crypto?: boolean;
    rss?: boolean;
}

const SettingsRssCrypto = ({ crypto, rss }: SettingsRssCryptoProps) => {
    const { response } = useAppSelector((state) => state.appSettings);
    const [valCrypto, setValCrypto] = useState<string>(response.popularCryptos ? response.popularCryptos : '');
    const [valRss, setValRss] = useState<string>(response.popularRss ? response.popularRss : '');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.target.id === 'crypto'
            ? setValCrypto(e.target.value)
            : setValRss(e.target.value)
    };

    return (
        <>
            { crypto &&
                <>
                    <Box
                        sx={ { display: 'flex', flexDirection: 'column' } }
                    >
                        <p>Get { response.popularCryptos } cryptos</p>
                        <label htmlFor="crypto"></label>
                        <StyledTextField
                            id="crypto"
                            name="crypto"
                            type="number"
                            variant="outlined"
                            value={ valCrypto }
                            onChange={ handleChange }
                        />
                    </Box>
                </>
            }
            { rss &&
                <>
                    <p>Get : { response.popularRss } articles</p>
                </>
            }
        </>
    );
}

const StyledTextField = styled(TextField)(() => ({
    width: 300
}));

export default SettingsRssCrypto;