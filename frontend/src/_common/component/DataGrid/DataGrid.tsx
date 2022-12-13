import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import StackNameCrypto from "../StackNameCrypto";


type DataGridCmpProps = {
    data: object[];
}

const columns: GridColDef[] = [
    { field: "id", headerName: "#" },
    {
        field: "name", headerName: "Name", width: 200,
        renderCell: (params: GridRenderCellParams) => (
            <StackNameCrypto
                name={ params.row.name }
                id={ params.row.id }
                symbol={ params.row.symbol }
            />
        )
    },
    { field: "symbol", headerName: "Symbol" },
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
                sx={ {
                    '& .MuiDataGrid-cell': {
                        '& :hover': {
                            color: 'primary.main',
                        },
                    }
                }
                }
            />
        </>
    )
};


export default DataGridCmp;