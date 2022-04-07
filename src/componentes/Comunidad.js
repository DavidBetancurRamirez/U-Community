import React from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoPersonas} from '../imagenes/IconoPersonas.svg'
import {ReactComponent as IconoUnirme} from '../imagenes/IconoUnirme.svg'
import {ReactComponent as IconoCaution} from '../imagenes/IconoCaution.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Participacion, Participantes, Restricciones, Unirme} from '../elementos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";
import { useAuth } from "../contextos/authContext";
import agregarParticipante from "../firebase/agregarParticipante";
import Comentarios from "../elementos/Comentarios";

const Comunidad = ({cambiarEstadoAlerta, cambiarAlerta}) => {    
    const navigate = useNavigate();
    const {user} = useAuth()

    const {id} = useParams();
    const [comunidad] = useObtenerComunidad(id)

    const agregar = async () => {
        if (user) {
            if (comunidad.data().participantes.length >= comunidad.data().maxPersonas) {
                cambiarEstadoAlerta(true)
                cambiarAlerta({ tipo: "error", mensaje: "La comunidad a la que deseas unirte ya alcanzo su limite" })
            } else {
                try {
                    await agregarParticipante({
                        comunidadId: comunidad.id, 
                        uidUsuario: user.uid,
                        participantes: comunidad.data().participantes
                    })
                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "exito", mensaje: "Ahora eres parte de esta comunidad" })
                } catch (error) {
                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "error", mensaje: "Hubo un problema al unirse a la comunidad" })
                }
            }
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder unirte a una comunidad es necesario iniciar sesión" })
        }
    }

    return (
    <>
        <Helmet>
            <title>Comunidad - U Community</title>
        </Helmet>
        <Header />

        {comunidad &&
            <Contenedor>
                <Regresar onClick={() => navigate("/")}>
                    <IconoIzquierda />
                    <p>Volver al Home</p>
                </Regresar>

                <ContenedorTitulo>
                    <Titulo className={comunidad.data().categoria}>{comunidad.data().titulo}</Titulo>

                    <ContenedorInfo>
                        <Categoria>{comunidad.data().categoria}</Categoria>
                        <Fecha><IconoCalendario />{formatearFecha(comunidad.data().fechaMaxima)}<IconoCalendario /></Fecha>
                    </ContenedorInfo>
                </ContenedorTitulo>

                <Objetivo>{comunidad.data().objetivo}</Objetivo>

                <Participacion>
                    <Participantes><IconoPersonas />Participantes: {comunidad.data().participantes.length}</Participantes>

                    {comunidad.data().maxPersonas !== "0.00" && 
                        <Restricciones>Maximo participantes: {parseFloat(comunidad.data().maxPersonas).toFixed(0)}<IconoCaution /></Restricciones>
                    }

                    <Unirme onClick={agregar}>Unirme + <IconoUnirme /></Unirme>                 
                </Participacion>

                <Comentarios />

            </Contenedor>
        }
    </>
    );
}
 
export default Comunidad;