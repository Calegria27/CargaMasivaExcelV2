import { useContext, useState } from "react";
import Dropdown_Empresa from "./components/Dropdown_Empresa.jsx";
import Dropdown_Obras from "./components/Dropdown_Obras.jsx";
import Navbar from "./components/Navbar.jsx";
import { Authcontext } from "../Auth/context/Authcontext.jsx";
import Dropdown_Tarifado from "./components/Dropdown_Tarifado.jsx";
import Dropdown_Viviendas from "./components/Dropdown_Viviendas.jsx";
import Excel_Reader from "./components/Excel_Reader.jsx";
import Container from '@mui/material/Container'
export default function Mainview() {
    const { user } = useContext(Authcontext)
    const [selectedEmpresa, setSelectedEmpresa] = useState(null);
    const [selectedObra, setSelectedObra] = useState(null);
    const [selectedViv, setSelectedViv] = useState(null);
    const [selectedTarifado, setSelectedTarifado] = useState(null);

    const handleEmpresaSelection = (empresa) => {
        setSelectedEmpresa(empresa);
        setSelectedObra(null);
        setSelectedViv(null);
        setSelectedTarifado(null);
    }

    const handleObraSelection = (obra) => {
        setSelectedObra(obra);
        setSelectedViv(null);
        setSelectedTarifado(null);
    }

    const handleVivSelection = (viv) => {
        setSelectedViv(viv);
        setSelectedTarifado(null);
    }

    const handleTarifadoSelection = (tarifado) => {
        setSelectedTarifado(tarifado);
    }


    return (
        <>
            <Navbar />
            <Container maxWidth="lg"style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Bienvenido {user}</h1>
                <Dropdown_Empresa onEmpresaSelected={handleEmpresaSelection} />
                {selectedEmpresa &&
                    <Dropdown_Obras selectedEmpresa={selectedEmpresa} obrafun={handleObraSelection} />
                }
                {selectedObra &&
                    <Dropdown_Viviendas selectedEmpresa={selectedEmpresa} selectedObra={selectedObra} vivfun={handleVivSelection} />
                }
                {selectedViv &&
                    <Dropdown_Tarifado selectedEmpresa={selectedEmpresa} selectedObra={selectedObra} selectedViv={selectedViv} tarifadofun={handleTarifadoSelection} />
                }
                {selectedTarifado &&
                <Excel_Reader selectedEmpresa={selectedEmpresa} selectedObra={selectedObra} selectedViv={selectedViv} selectedTarifado={selectedTarifado} />
                }
            </Container>

        </>

    )
}