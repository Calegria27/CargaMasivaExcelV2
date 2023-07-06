import { useContext, useEffect, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"
import axios from "axios";
import { Authcontext } from "../../Auth/context/Authcontext";


const Dropdown_Obras = (props) => {
    const { selectedEmpresa, obrafun } = props;
    const { user } = useContext(Authcontext)
    const [obra, setObra] = useState('')
    const url = "http://192.168.1.74:180/empresa/obra"
    const [dataobras, setDataObras] = useState(null);

    useEffect(() => {
        axios.post(url, { id_empresa: selectedEmpresa, Usu_Cuenta: user })
            .then((response) => {
                setDataObras(response.data)

            });
    }, [selectedEmpresa]);


    const handleChange = (event) => {
        setObra(event.target.value);
    };

    const handleOptionClick = (option) => {
        obrafun(option)
    }


  const obras = dataobras
        ? Object.entries(dataobras).map(([key, value]) => (
            <MenuItem 
            key={dataobras[key]["CtoCodigo"]}
            value={key} onClick={() => handleOptionClick(dataobras[key]["CtoCodigo"])} >
            {`${dataobras[key]["CtoCodigo"]}: ${dataobras[key]["Obras"]}`}</MenuItem>
        ))
        : null;

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Obra</InputLabel>
                <Select
                    labelId="Dobra"x
                    id="Dobra"
                    value={obra}
                    label="obras"
                    onChange={handleChange}
                >
                    {obras}
                </Select>
            </FormControl>
        </div>
    )

}



export default Dropdown_Obras;