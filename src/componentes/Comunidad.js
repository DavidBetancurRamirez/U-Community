import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Cargando, Abandonar, Fundador, Edit, Delete, NombreFundador, PopUp, ContPopUp} from '../estilos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";
import Comentarios from "../elementos/Comentarios";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import Actividad from "../elementos/Actividad";
import {ReactComponent as IconoEliminar} from '../imagenes/IconoEliminar.svg'
import {ReactComponent as IconoEditar} from '../imagenes/IconoEditar.svg'
import { useAuth } from "../contextos/authContext";
import {ReactComponent as IconoCerrar} from '../imagenes/IconoCerrar.svg'
import eliminarComunidad from "../firebase/eliminarComunidad";
import {ReactComponent as IconoSalir} from '../imagenes/IconoSalir.svg'
import abandonarComunidad from "../firebase/abandonarComunidad";
import startOfDay from "date-fns/startOfDay";
import getUnixTime from 'date-fns/getUnixTime';

const Comunidad = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [fundador, cambiarFundador] = useState(false)
    const [suscrito, cambiarSuscrito] = useState(false)   
    const [nombreUsuario, cambiarNombreUsuario] = useState("") 

    const navigate = useNavigate();
    const {user} = useAuth()
    const {id} = useParams();
    const [comunidad] = useObtenerComunidad(id)    
    let fechaHoy = getUnixTime(startOfDay(new Date()));

    useEffect(() => {
        if (comunidad) {
            if (user){
                if (user.uid === comunidad.data().uidUsuario) {
                    cambiarFundador(true)
                }

                for (let i=0;i<comunidad.data().participantes.length;i++) {
                    if (comunidad.data().participantes[i].uidUsuario === user.uid) {
                        cambiarSuscrito(true)
                    }
                }

                let correo = user.email;
                let nombre = user.displayName;
        
                if (nombre === null) {
                    cambiarNombreUsuario(correo)
                } else {
                    cambiarNombreUsuario(nombre)
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
                        {comunidad.data().fechaMaxima <= fechaHoy ?
                            <Fecha className="expirado"><IconoCalendario />{formatearFecha(comunidad.data().fechaMaxima)}<IconoCalendario /></Fecha>
                        :
                            <Fecha><IconoCalendario />{formatearFecha(comunidad.data().fechaMaxima)}<IconoCalendario /></Fecha>
                        }
                    </ContenedorInfo>
                </ContenedorTitulo>

                <Objetivo>{comunidad.data().objetivo}</Objetivo>

                <Actividad comunidad={comunidad} cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} suscrito={suscrito} nombreUsuario={nombreUsuario} />
                
                {suscrito &&
                    <Abandonar href="#Abandonar">
                        <button>Abandonar comunidad<IconoSalir /></button>
                    </Abandonar>
                }

                <Fundador>
                    {fundador &&
                        <a href="#eliminarComunidad">
                            <Edit>
                                <IconoEliminar /><p>Eliminar</p>
                            </Edit>
                        </a>
                    }
                    <NombreFundador>Fundador: {comunidad.data().nombreUsuario}</NombreFundador>
                    {fundador &&
                        <Delete>
                            <a href="#eliminarComunidad">
                                <div className="eliminar">
                                    <IconoEliminar /><p>Eliminar</p>
                                </div>
                            </a>
                            <div onClick={() => navigate(`/editar/${comunidad.id}`)}>
                                <p>Editar</p><IconoEditar />
                            </div>
                        </Delete>
                    }
                </Fundador>

                    <PopUp id="eliminarComunidad">
                        <ContPopUp>
                            <div>
                                <h2>¿Estas seguro de eliminarla?</h2>
                                <a href="#/"><IconoCerrar /></a>    
                            </div>                    
                            <div className="texto">Luego de eliminar la comunidad no hay manera de recuperarla.</div>
                            <span>
                                <a className="volver" href="#/">Volver</a>
                                <a className="aceptar" href="#/" onClick={() => eliminarComunidad(comunidad.id, {cambiarEstadoAlerta, cambiarAlerta, navigate})}>Aceptar</a>
                            </span>
                        </ContPopUp>
                    </PopUp>

                    <PopUp id="Abandonar">
                        <ContPopUp>
                            <div>
                                <h2>¿Estas seguro de abandonar?</h2>
                                <a href="#/"><IconoCerrar /></a>    
                            </div>                    
                            <div className="texto"></div>
                            <span>
                                <a className="volver" href="#/">Volver</a>
                                <a className="aceptar" href="#/" onClick={() => abandonarComunidad(comunidad, user.uid, {cambiarEstadoAlerta, cambiarAlerta, navigate})}>Aceptar</a>
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