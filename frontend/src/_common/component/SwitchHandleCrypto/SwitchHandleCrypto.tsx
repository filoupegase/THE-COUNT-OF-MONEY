import * as React from 'react';
import Switch from '@mui/material/Switch';


type SwitchHandleCryptoProps = {
    state: boolean;
    id: number;
};

const label = { inputProps: { 'aria-label': 'Switch Handle Crypto' } };

const SwitchHandleCrypto = ({ state, id }: SwitchHandleCryptoProps) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Switch { ...label } onChange={ handleChange } checked={ state } />
        </>
    )
};

export default SwitchHandleCrypto;