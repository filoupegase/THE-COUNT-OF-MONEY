import React, { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { TextField, Box, styled, Button, Typography, Alert } from "@mui/material";
import { updateAppSettings } from '../../../_core/_store/services/appSettings/slice';
import Snackbar from '@mui/material/Snackbar';


type SettingsRssCryptoProps = {
    crypto?: boolean;
    rss?: boolean;
}

const SettingsRssCrypto = ({ crypto, rss }: SettingsRssCryptoProps) => {
    const appDispatch = useAppDispatch();
    const { response } = useAppSelector((state) => state.appSettings);
    const [valCrypto, setValCrypto] = useState<string>('');
    const [valRss, setValRss] = useState<string>('');
    const [openSnackBar, set0penSnackBar] = useState<boolean>(false);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.target.id === 'crypto'
            ? setValCrypto(e.target.value)
            : setValRss(e.target.value)
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        set0penSnackBar(false);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await appDispatch(
            updateAppSettings({
                popularCryptos: valCrypto,
                popularRss: valRss
            })
        );
        if (response) {
            set0penSnackBar(true);
        }
    };

    useEffect(() => {
        if (response) {
            // @ts-ignore
            setValCrypto(response.popularCryptos);
            // @ts-ignore
            setValRss(response.popularRss);
        }
    }, [response]);

    return (
        <>
            { crypto &&
                <>
                    <Box
                        sx={ { display: 'flex', flexDirection: 'column' } }
                    >
                        <Typography sx={ { fontWeight: 300, mb: 1, fontSize: '1.3rem' } } variant='h5'
                                    gutterBottom
                        >
                            Show { response.popularCryptos } cryptos
                        </Typography>
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
                                onClick={ handleSubmit }
                                type={ 'submit' } disabled={ response.popularCryptos === valCrypto } color='primary'
                                variant="contained" disableElevation
                            >
                                Update
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
            { openSnackBar &&
                <>
                    <Snackbar
                        anchorOrigin={ {
                            vertical: 'top',
                            horizontal: 'center'
                        } }
                        open={ openSnackBar }
                        autoHideDuration={ 3700 } onClose={ handleClose }>
                        <Alert severity="success" sx={ { width: '100%' } }>
                            Save With Success :)
                        </Alert>
                    </Snackbar>
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
    width: 320
}));

export default SettingsRssCrypto;