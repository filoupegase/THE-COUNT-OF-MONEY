import React, { ChangeEventHandler, useState } from 'react';
import { useAppSelector } from "../../../_core/_store/store";
import { TextField, Box, styled, Button } from "@mui/material";


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
                        <p>Show { response.popularCryptos } popular cryptos</p>
                        <label htmlFor="crypto"></label>
                        <Box
                            sx={ {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            } }
                        >
                            <StyledTextField
                                id="crypto"
                                name="crypto"
                                type="number"
                                variant="outlined"
                                value={ valCrypto }
                                onChange={ handleChange }
                                inputProps={ { min: 5, max: 1000 } }
                            />
                            <StyledBtnValid
                                type={ 'submit' } disabled={ response.popularCryptos === valCrypto } color='primary'
                                variant="contained" disableElevation
                            >
                                Save
                            </StyledBtnValid>
                        </Box>
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

const StyledBtnValid = styled(Button)(() => ({
        padding: "6px 16px",
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        '&.Mui-disabled': {
            backgroundColor: '#c9d1eb',
            color: "#878ea8"
        }
    })
);

const StyledTextField = styled(TextField)(() => ({
    width: 300
}));

export default SettingsRssCrypto;