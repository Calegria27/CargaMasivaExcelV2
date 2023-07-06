import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"


const Dropdown_Tarifado = (props) => {
    const { selectedEmpresa, selectedObra, selectedViv, tarifadofun } = props;
    const [tarifado, setTarifado] = useState(null);
    const url = "http://192.168.49.1:180/empresa/obra/vivienda-t/paquete"
    const [datatarifado, setDataTarifado] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        axios.post(url, { id_empresa: selectedEmpresa, cod_Mae_Vivienda: selectedViv, id_obra: selectedObra })
            .then((response) => {
                setDataTarifado(response.data)
            });
    }, [selectedViv]);


    const handleChange = (event) => {
        setTarifado(event.target.value);
    };

    const handleOptionClick = (option) => {
        tarifadofun(option)
    }
    const tarifados = datatarifado
        ? Object.entries(datatarifado).map(([key, value]) => (
            <MenuItem key={key}
                value={key} onClick={() => handleOptionClick(datatarifado[key]["CodTarifadoDet"], datatarifado[key]["Descripcion"])} >
                {`${datatarifado[key]["Descripcion"]}`}</MenuItem>
        ))
        : null;



    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Tarifado</InputLabel>
                <Select
                    labelId="Dtarifado" x
                    id="Dtarifado"
                    value={tarifado}
                    label="tarifados"
                    onChange={handleChange}
                >
                    {tarifados}
                </Select>
            </FormControl>
        </>

    )
}

export default Dropdown_Tarifado