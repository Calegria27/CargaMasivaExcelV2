import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Authcontext } from '../../Auth/context/Authcontext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { logout } = useContext(Authcontext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/',);
    }


    return (
        <AppBar position="sticky" sx={{ bgcolor: "skyblue" }}>
            <Toolbar>
                <Stack direction="row" justifyContent="space-between" alignContent="center">
                    <Box sx={{ width: "20%", height: 1 / 4}}>
                        <img style={{ width: "70%", height: "auto" }} src="https://www.cindependencia.cl/wp-content//themes/independencia/assets/img/logo-new-independencia.png" />
                    </Box>
                    <Box >
                       <Typography variant="h2" color="white">Carga Masiva De Tarifados</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="error" onClick={onLogout}>Logout</Button>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>



    )

}

export default Navbar;