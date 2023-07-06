import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button,Container, Dialog } from '@mui/material';
import ResponsiveDialog from './ResponsiveDialog';


const columns = [
    { field: 'descripcion', headerName: 'Descripción',minWidth: 500 },
    { field: 'codunidad', headerName: 'Codunidad' },
    { field: 'valorpareo', headerName: 'Valorpareo' },
    {
        field: 'valorcasa',
        headerName: 'Valorcasa',
    },
    {
        field: 'valorglobal',
        headerName: 'valorglobal',
    },
];


export default function BasicTable(props) {
    const [open, setOpen] = React.useState(false);
    const { data, setExcelData,selectedEmpresa,selectedObra,selectedViv,selectedTarifado } = props
    const rows = data
    return (
        <Container sx={{ p: 2 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <ResponsiveDialog open ={open} close={()=>setOpen(false)} setOpenProp={setOpen} data={rows} setExcelData={setExcelData}
            selectedEmpresa={selectedEmpresa} selectedObra={selectedObra} selectedViv={selectedViv} selectedTarifado={selectedTarifado}/>
            <DataGrid getRowId={(row) => row.descripcion}
                rows={rows}
                columns={columns}
                autoHeight={true}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}

                pageSizeOptions={[5, 10]}
            />
        </Container>

    );
}
