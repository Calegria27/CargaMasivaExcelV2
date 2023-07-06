import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Authcontext } from '../../Auth/context/Authcontext';

const ResponsiveDialog = (props) => {
  const { selectedTarifado, selectedEmpresa, selectedObra,selectedViv,setOpenProp, open, data,setExcelData} = props
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {user} = React.useContext(Authcontext);
  const url = "http://192.168.49.1:180/upload_data"

  const handleClickOpen = () => {
    insertdata();
    setOpenProp(false);
    setExcelData(null)
  };

  const handleClose = () => {
    setOpenProp(false);
  };
  const insertdata = () => {
    for (let i = 0; i < data.length; i++) {
      axios.post(url, {
        ...data[i],
        id_empresa: selectedEmpresa,
        cod_Mae_Vivienda: selectedViv,
        id_obra: selectedObra,
        cod_Tarifado: selectedTarifado,
        user:user
      })
      .then(()=>{
        setExcelData(null)
        setShowAlertConfirm(false)
        if(i===data.length-1){
          window.alert("Tarifado insertado con exito")
        }})
        .catch(function (error) {
          if(i===data.length-1){
            window.alert(error)
          }
         })
        
      
    }

  }

  return (
    <div>
      <Button variant="contained" color="success" onClick={() => setOpenProp(true)}>Carga Masiva</Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"¿Estas seguro de agregar estos tarifados"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Deseas agregar estos tarifados? Ten en cuenta que este cambio no podra ser revertido.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={handleClickOpen} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ResponsiveDialog;