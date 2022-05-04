import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Contenedor, ContenedorFiltros, Input, Label, Crear} from "../estilos/comunidades"
import { useAuth } from "../contextos/authContext";
import MisParticipaciones from "../elementos/MisParticipaciones";
import MisComunidades from "../elementos/MisComunidades";
import TodasLasComunidades from "../elementos/TodasLasComunidades";

const Comunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [pagina, cambiarPagina] = useState("todas")

    const {user} = useAuth()

    const navigate = useNavigate()

    const handleChange = (e) => {
        cambiarPagina(e.target.value)
    }

    const handleClick = () => {
        if(user) {
            navigate("/formulario");
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder crear una comunidad es necesario iniciar sesión" })
        }
    }

    return (
    <>
        <Contenedor>
            <ContenedorFiltros>
                <div  onChange={(e) => handleChange(e)}>
                    <Input type="radio" id="radio-1" name="tabs" value="participaciones"  />
                        <Label htmlFor="radio-1">Mis participaciones</Label>
                    <Input type="radio" id="radio-2" name="tabs" value="propias" />
                        <Label htmlFor="radio-2">Mis comunidades</Label>
                    <Input type="radio" id="radio-3" name="tabs" defaultChecked value="todas" />
                        <Label htmlFor="radio-3">Todas</Label>
                    <span className="glider"></span>
                </div>
            </ContenedorFiltros>
            
            {pagina === "participaciones" && <MisParticipaciones />}               
            {pagina === "propias" && <MisComunidades cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />}
            {pagina === "todas" && <TodasLasComunidades />}
            
        </Contenedor>

        <Crear title="Agregar comunidad"  onClick={handleClick}><lord-icon src="https://cdn.lordicon.com/auvicynv.json" trigger="hover" colors="primary:#09a4dd" /></Crear>
    </>
    );
}
 
export default Comunidades;