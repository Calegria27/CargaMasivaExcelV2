import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Authcontext } from '../../Auth/context/Authcontext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(Authcontext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={3} lg={2}>
            <img style={{ width: "100%", height: "auto" }} src="https://www.cindependencia.cl/wp-content//themes/independencia/assets/img/logo-new-independencia.png" alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={6} lg={8}>
            <Typography variant="h2" align="center" sx={{ color: "#6D6D6D" }}>Carga Masiva De Tarifados</Typography>
          </Grid>
          <Grid item xs={12} sm={3} lg={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="error" onClick={onLogout}>Logout</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}


export default Navbar;
