import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Auth/context/Authcontext';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Dropdown_Empresa = (props) => {
    const { onEmpresaSelected } = props;
    const { user } = useContext(Authcontext);
    const url = "http://192.168.49.1:180/empresa";
    const [dataempresas, setDataempresas] = useState(null);
    const [empresa, setEmpresa] = useState("");

    useEffect(() => {
        axios.post(url, {}, { params: { item: user, } })
            .then((response) => {
                setDataempresas(response.data)
            });
    }, []);

    const handleChange = (event) => {
        setEmpresa(event.target.value);
    };

    const handleOptionClick = (option, name) => {
        onEmpresaSelected(option);
    };

    const empresas = dataempresas
        ? Object.entries(dataempresas).map(([key, value]) => (
            <MenuItem
                key={dataempresas[key]["empCodigo"]}
                value={key}
                onClick={() => handleOptionClick(dataempresas[key]["empCodigo"], dataempresas[key]["empNombre"])}
            >{`${dataempresas[key]["empCodigo"]}: ${dataempresas[key]["empNombre"]}`}</MenuItem>
        ))
        : null;



    return (
        <><FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="empresas">Empresa</InputLabel>
            <Select
                labelId="Dempresa"
                id="Dempresa"
                value={empresa}
                label="Empresa"
                onChange={handleChange}
            >
                {empresas}
            </Select>
        </FormControl></>

        
    );
};

export default Dropdown_Empresa;
