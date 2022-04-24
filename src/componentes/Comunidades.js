import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Contenedor, ContenedorFiltros, Input, Label, Crear} from "../estilos/comunidades"
import { useAuth } from "../contextos/authContext";
import MisParticipaciones from "../elementos/MisParticipaciones";
import MisComunidades from "../elementos/MisComunidades";
import TodasLasComunidades from "../elementos/TodasLasComunidades";

const Comunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [misParticipaciones, cambiarMisParticipaciones] = useState(false)
    const [misComunidades, cambiarMisComunidades] = useState(false)
    const [todas, cambiarTodas] = useState(true)

    const {user} = useAuth()

    const navigate = useNavigate()

    const selector = (id) => {
        if (id.target.id === "radio-1") {
            cambiarMisParticipaciones(true)
            cambiarMisComunidades(false)
            cambiarTodas(false)
        } else if (id.target.id === "radio-2") {
            cambiarMisParticipaciones(false)
            cambiarMisComunidades(true)
            cambiarTodas(false)
        } else if (id.target.id === "radio-3") {
            cambiarMisParticipaciones(false)
            cambiarMisComunidades(false)
            cambiarTodas(true)
        }
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
                <div>
                    <Input type="radio" id="radio-1" name="tabs" onClick={(id) => selector(id)} />
                        <Label htmlFor="radio-1">Mis participaciones</Label>
                    <Input type="radio" id="radio-2" name="tabs" onClick={(id) => selector(id)} />
                        <Label htmlFor="radio-2">Mis comunidades</Label>
                    <Input type="radio" id="radio-3" name="tabs" defaultChecked onClick={(id) => selector(id)} />
                        <Label htmlFor="radio-3">Todas</Label>
                    <span className="glider"></span>
                </div>
            </ContenedorFiltros>
            
            {misParticipaciones && <MisParticipaciones />}               
            {misComunidades && <MisComunidades />}
            {todas && <TodasLasComunidades />}
            
        </Contenedor>

        <Crear title="Agregar comunidad"  onClick={handleClick}><lord-icon src="https://cdn.lordicon.com/auvicynv.json" trigger="hover" colors="primary:#09a4dd" /></Crear>
    </>
    );
}
 
export default Comunidades;