import { useContext, useEffect, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"
import axios from "axios";
import { Authcontext } from "../../Auth/context/Authcontext";


const Dropdown_Viviendas = (props) => {
    const { selectedEmpresa,selectedObra,vivfun } = props;
    const { user } = useContext(Authcontext)
    const [viv, setViv] = useState(null)
    const [dataviv, setDataViv] = useState(null);
    const url = "http://192.168.1.74:180/empresa/obra/vivienda-t"
    
    useEffect(() => {
        axios.post(url, { id_empresa: selectedEmpresa, Usu_Cuenta: user, id_obra:selectedObra})
            .then((response) => {
                setDataViv(response.data)
            });
    }, [selectedObra]);

    const handleChange = (event) => {
        setViv(event.target.value);
    };

    const handleOptionClick = (option) => {
        vivfun(option)
    }

    const vivienda = dataviv
    ? Object.entries(dataviv).map(([key, value]) => (
        <MenuItem key={dataviv[key]["Descripcion"]} 
            value={key}onClick={() => handleOptionClick(dataviv[key]["CodMaeVivienda"])} >
        {` ${dataviv[key]["Descripcion"]}`}</MenuItem>
    ))
    : null;
    
    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="viviendas">Vivienda</InputLabel>
            <Select
                labelId="Dvivienda"x
                id="Dvivienda"
                value={viv}
                label="vivienda"
                onChange={handleChange}
            >
                {vivienda}
            </Select>
        </FormControl>
    </div>
    )

}

export default Dropdown_Viviendas;
