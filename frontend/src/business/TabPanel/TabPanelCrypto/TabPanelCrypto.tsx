import * as React from 'react';
import SettingsRssCrypto from "../../../_common/component/SettingsRssCrypto";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const rows: GridRowsProp = [
    { id: 1, name: 'Hello', symbol: 'BTC', state: 'true' },
    { id: 2, name: 'DataGridPro', symbol: 'ETH', state: 'false' },
    { id: 3, name: 'Awiyouro', symbol: 'AWR', state: 'true' },
];

// [
//     {
//         "id": "63a1b8fcaff69317b2b21827",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "cmcId": "1",
//         "state": true,
//         "__v": 0
//     },
//     {
//         "id": "63a1b8fcaff69317b2b21828",
//         "name": "Ethereum",
//         "symbol": "ETH",
//         "cmcId": "1027",
//         "state": true,
//         "__v": 0
//     }
// ]

const columns: GridColDef[] = [
    { field: "id", headerName: "#" },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'symbol', headerName: 'Symbol', width: 620 },
    { field: 'state', headerName: 'State', width: 150 },
];

const TabPanelCrypto = () => {
    return (
        <>
            <SettingsRssCrypto crypto />
            <DataGrid autoHeight rows={ rows } columns={ columns } />
        </>
    )
}

export default TabPanelCrypto;