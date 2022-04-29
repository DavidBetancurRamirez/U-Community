import React from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Cargando} from '../estilos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";
import Comentarios from "../elementos/Comentarios";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import Actividad from "../elementos/Actividad";

const Comunidad = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [comunidad] = useObtenerComunidad(id)
    
    return (
    <>
        <Helmet>
            <title>Comunidad - U Community</title>
        </Helmet>
        
        <Header />

        {comunidad ?
            <Contenedor>

                <Regresar onClick={() => navigate("/")}>
                    <IconoIzquierda /><p>Volver al Home</p>
                </Regresar>

                <ContenedorTitulo>
                    <Titulo tipo={comunidad.data().categoria}>{comunidad.data().titulo}</Titulo>

                    <ContenedorInfo>
                        <Categoria>{comunidad.data().categoria}</Categoria>
                        <Fecha><IconoCalendario />{formatearFecha(comunidad.data().fechaMaxima)}<IconoCalendario /></Fecha>
                    </ContenedorInfo>
                </ContenedorTitulo>

                <Objetivo>{comunidad.data().objetivo}</Objetivo>

                <Actividad comunidad={comunidad} cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

                <div>{comunidad.data().nombreUsuario}</div>

                <Comentarios comunidad={comunidad} cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

            </Contenedor>
        :
            <Cargando src={SpinnerLoader} alt="Cargando..." />
        }
    </>
    );
}
 
export default Comunidad;