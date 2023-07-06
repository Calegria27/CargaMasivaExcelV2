import { Container, Typography } from "@mui/material";
import * as xlsx from "xlsx";
import {useState } from "react";
import Data_Table from "./Data_Table";
const Excel_Reader = (props) => {
    const {selectedEmpresa,selectedObra,selectedViv,selectedTarifado}=props
    const [excelData, setExcelData] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = xlsx.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = xlsx.utils.sheet_to_json(ws);
      setExcelData(data);
    };
    reader.readAsBinaryString(file);

    setShowAlert(false); // oculta cualquier alerta anterior cuando se carga un nuevo archivo
  };

  const handleHideAlert = () => {
    setShowAlert(false); // oculta la alerta cuando el usuario hace clic en "Cerrar"
  }



    return(
        <Container maxWidth="lg"  sx={{ p: 2 }}  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
         <Typography variant="h2">Cargar tarifados</Typography>
         <input type="file" onChange={handleFileUpload} />
         {excelData &&
            <Data_Table data={excelData} setExcelData={setExcelData} selectedEmpresa={selectedEmpresa} selectedObra={selectedObra} selectedViv={selectedViv} selectedTarifado={selectedTarifado}/>         }
        </Container>
    )
}
export default Excel_Reader;