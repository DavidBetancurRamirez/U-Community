import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Cargando, Fundador, Edit, Delete, NombreFundador} from '../estilos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";
import Comentarios from "../elementos/Comentarios";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import Actividad from "../elementos/Actividad";
import {ReactComponent as IconoEliminar} from '../imagenes/IconoEliminar.svg'
import {ReactComponent as IconoEditar} from '../imagenes/IconoEditar.svg'
import { useAuth } from "../contextos/authContext";

const Comunidad = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [fundador, cambiarFundador] = useState({
        fundador: "",
        centrar: ""
    });

    const navigate = useNavigate();

    const {id} = useParams();
    const {user} = useAuth()
    const [comunidad] = useObtenerComunidad(id)

    useEffect(() => {
        if (comunidad) {
            if (user) {
                if (user.uid === comunidad.data().uidUsuario) {
                    cambiarFundador({
                        fundador: "fundador",
                        centrar: "centrar"
                    })
                } else {
                    cambiarFundador("")
                }
            }
        }
    }, [user, comunidad])
    
    return (
    <>
        <Helmet>
            <title>Comunidad - U Community</title>
        </Helmet>
        
        <Header cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

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

                <Fundador>
                    <Edit className={fundador.fundador}>
                        <IconoEliminar /><p>Eliminar</p>
                    </Edit>
                    <NombreFundador className={fundador.centrar}>Fundador: {comunidad.data().nombreUsuario}</NombreFundador>
                    <Delete className={fundador.fundador}>
                        <div className="eliminar">
                            <IconoEliminar /><p>Eliminar</p>
                        </div>
                        <div>
                            <p>Editar</p><IconoEditar />
                        </div>
                    </Delete>
                </Fundador>

                <Comentarios comunidad={comunidad} cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

            </Contenedor>
        :
            <Cargando src={SpinnerLoader} alt="Cargando..." />
        }
    </>
    );
}
 
export default Comunidad;