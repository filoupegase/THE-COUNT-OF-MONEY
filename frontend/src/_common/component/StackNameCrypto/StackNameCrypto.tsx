import * as React from 'react';
import { Typography, Stack } from '@mui/material';


type StackNameCryptoProps = {
    id: number;
    name: string;
    symbol: string;
}

const StackNameCrypto = ({ id, name, symbol }: StackNameCryptoProps) => {
    return (
        <Stack direction="row" alignItems='center' spacing={ 1 }>
            <img height={ 25 } width={ 25 } alt='user logged'
                 src={ `https://s2.coinmarketcap.com/static/img/coins/64x64/${ id }.png` }
                 style={ { cursor: 'pointer' } }
            />
            <Typography variant='subtitle1'>{ name }</Typography>
            <Typography sx={ { color: 'rgb(128, 138, 157)' } } variant="subtitle2">{ symbol }</Typography>
        </Stack>
    )
}

export default StackNameCrypto;