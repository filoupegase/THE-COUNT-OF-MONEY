import * as React from 'react';
import Switch from '@mui/material/Switch';
import { updateStateAdminCrypto } from '../../../_core/_store/services/adminCrytpo/slice';
import { useAppDispatch } from "../../../_core/_store/store";


type SwitchHandleCryptoProps = {
    state: boolean;
    cmcId: number;
};

const label = { inputProps: { 'aria-label': 'Switch Handle Crypto' } };

const SwitchHandleCrypto = ({ state, cmcId }: SwitchHandleCryptoProps) => {
    const appDispatch = useAppDispatch();
    
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const response = await appDispatch(updateStateAdminCrypto({
                cryptoState: event.target.checked,
                crypto_Id: cmcId
            }
        ));
        console.log('la res', response);
    };

    return (
        <>
            <Switch { ...label } onChange={ handleChange } checked={ state } />
        </>
    )
};

export default SwitchHandleCrypto;