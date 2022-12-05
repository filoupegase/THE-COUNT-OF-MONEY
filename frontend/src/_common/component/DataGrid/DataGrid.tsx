import * as React from 'react';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

type DataGridCmpProps = {
    data: any;
}

const columns: GridColDef[] = [
    { field: "id", headerName: "#", hide: false, },
    {
        field: "name", headerName: "Name", width: 150,
        renderCell: (params: GridRenderCellParams) => (
            <Typography color='primary'>{ params.row.name }</Typography>
        )
    },
    { field: "symbol", headerName: "Symbol", width: 150 },
    { field: "circulating_supply", headerName: "Price", width: 150 },
];

const DataGridCmp = ({ data }: DataGridCmpProps) => {

    return (
        <>
            <div style={ { marginTop: 40 } }></div>
            <DataGrid
                autoHeight
                rows={ data }
                columns={ columns }
            />
        </>
    )
};


export default DataGridCmp;