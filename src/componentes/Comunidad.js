import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Cargando, Fundador, Edit, Delete, NombreFundador, PopUp, ContPopUp} from '../estilos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";
import Comentarios from "../elementos/Comentarios";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import Actividad from "../elementos/Actividad";
import {ReactComponent as IconoEliminar} from '../imagenes/IconoEliminar.svg'
import {ReactComponent as IconoEditar} from '../imagenes/IconoEditar.svg'
import { useAuth } from "../contextos/authContext";
import {ReactComponent as IconoCerrar} from '../imagenes/IconoCerrar.svg'

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
                    <a href="#popup1">
                        <Edit className={fundador.fundador}>
                            <IconoEliminar /><p>Eliminar</p>
                        </Edit>
                    </a>
                    <NombreFundador className={fundador.centrar}>Fundador: {comunidad.data().nombreUsuario}</NombreFundador>
                    <Delete className={fundador.fundador}>
                        <a href="#popup1">
                            <div className="eliminar">
                                <IconoEliminar /><p>Eliminar</p>
                            </div>
                        </a>
                        <div>
                            <p>Editar</p><IconoEditar />
                        </div>
                    </Delete>
                </Fundador>

                <PopUp id="popup1">
                    <ContPopUp>
                        <div>
                            <h2>¿Estas seguro de eliminarla?</h2>
                            <a href="#/"><IconoCerrar /></a>    
                        </div>                    
                        <div className="texto">Luego de eliminar la comunidad no hay manera de recuperarla.</div>
                        <span>
                            <a className="volver" href="#/">Volver</a>
                            <a className="aceptar" href="/">Aceptar</a>
                        </span>
                    </ContPopUp>
                </PopUp>

                <Comentarios comunidad={comunidad} cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

            </Contenedor>
        :
            <Cargando src={SpinnerLoader} alt="Cargando..." />
        }
    </>
    );
}
 
export default Comunidad;