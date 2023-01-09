import * as React from 'react';
import SettingsRssCrypto from "../../../_common/component/SettingsRssCrypto";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import SwitchHandleCrypto from "../../../_common/component/SwitchHandleCrypto";
import { Box } from '@mui/material';


const rows: GridRowsProp = [
    { id: 1, name: 'Hello', symbol: 'BTC', state: true },
    { id: 2, name: 'DataGridPro', symbol: 'ETH', state: false },
    { id: 3, name: 'Awiyouro', symbol: 'AWR', state: true },
];


const columns: GridColDef[] = [
    { field: "id", headerName: "#" },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'symbol', headerName: 'Symbol', width: 620 },
    {
        field: 'state', headerName: 'State', width: 150,
        renderCell: (params) => (
            <SwitchHandleCrypto state={ params.row.state } id={ params.row.id } />
        )
    },
];

const TabPanelCrypto = () => {
    return (
        <>
            <Box sx={ { mb: 3 } }>
                <SettingsRssCrypto crypto />
            </Box>
            <DataGrid autoHeight rows={ rows } columns={ columns } />
        </>
    )
}

export default TabPanelCrypto;