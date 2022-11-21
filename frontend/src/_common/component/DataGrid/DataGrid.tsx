import * as React from 'react';
import { styled } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
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

const columns: GridColDef[] = [
    { field: "id", headerName: "#", hide: false },
    { field: "name", headerName: "Name", width: 150 },
    { field: "price", headerName: "Price", width: 150 }
];

const DataGridCmp = () => {

    return (
        <>
            <div style={ { marginTop: 40 } }></div>
            <CustomDataGrid rows={ rows } columns={ columns } />
        </>
    )
};

const CustomDataGrid = styled(DataGrid)(() => ({
    border: "none"
}));

export default DataGridCmp;