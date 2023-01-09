import React, { useEffect, useState } from 'react';
import SettingsRssCrypto from "../../../_common/component/SettingsRssCrypto";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SwitchHandleCrypto from "../../../_common/component/SwitchHandleCrypto";
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../../_core/_store/store";
import { getAdminCrypto } from '../../../_core/_store/services/adminCrytpo/slice';


const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'symbol', headerName: 'Symbol', width: 744 },
    {
        field: 'state', headerName: 'State', width: 150,
        renderCell: (params) => (
            <SwitchHandleCrypto state={ params.row.state } cmcId={ params.row.cmcId } />
        )
    },
];

const TabPanelCrypto = () => {
    const appDispatch = useAppDispatch();
    const { adminCryptoData } = useAppSelector((state) => state.adminCrypto);
    const [data, setData] = useState([]);

    useEffect(() => {
        appDispatch(getAdminCrypto());
    }, [getAdminCrypto]);

    useEffect(() => {
        if (adminCryptoData) {
            setData(adminCryptoData);
        }
    });

    return (
        <>
            <Box sx={ { mb: 3 } }>
                <SettingsRssCrypto crypto />
            </Box>
            <DataGrid getRowId={ (row) => row._id } autoHeight rows={ data } columns={ columns } />
        </>
    )
}

export default TabPanelCrypto;