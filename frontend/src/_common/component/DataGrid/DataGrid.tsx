import * as React from 'react';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';

const rows = [
    { id: 1, name: "Hello", price: "World" },
    { id: 2, name: "MUI X", price: "is awesome" },
    { id: 3, name: "Material UI", price: "is amazing" },
    { id: 4, name: "MUI", price: "" },
    { id: 5, name: "Joy UI", price: "is awesome" },
    { id: 6, name: "MUI Base", price: "is amazing" },
    { id: 7, name: "MUI", price: "12332" },
    { id: 8, name: "Joy UI", price: "is awesome" },
    { id: 9, name: "MUI Base", price: "is amazing" },
    { id: 10, name: "MUI Base", price: "is amazing" }
];

function getFullName(params: GridValueGetterParams) {
    return `${ params.row.name || '' } ${ params.row.price || '' }`;
}


const columns: GridColDef[] = [
    { field: "id", headerName: "#", hide: false, },
    {
        field: "name",
        headerName: "Name",
        width: 150,
        renderCell: (params: GridRenderCellParams) => (
            <Typography>{ params.row.name }</Typography>
        )
    },
    { field: "price", headerName: "Price", width: 150 },
];

const DataGridCmp = () => {

    return (
        <>
            <div style={ { marginTop: 40 } }></div>
            <DataGrid
                autoHeight
                rows={ rows }
                columns={ columns }
            />
        </>
    )
};


export default DataGridCmp;