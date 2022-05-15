import React from "react";
import {Main, Comunidad, Titulo, Categoria, Objetivo, Info, Fecha, Sin} from "../estilos/comunidades"
import useObtenerMisComunidades from "../hooks/useObtenerMisComunidades";
import formatearFecha from "../funciones/formatearFecha";
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";
import startOfDay from "date-fns/startOfDay";
import getUnixTime from 'date-fns/getUnixTime';

const MisComunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [MisComunidades] = useObtenerMisComunidades();

    const navigate = useNavigate();
    const {user} = useAuth();

    let fechaHoy = getUnixTime(startOfDay(new Date()));

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
        MisComunidades.length > 0 ?
            <Main>
                {MisComunidades.map((comunidad) => (
                    <Comunidad onClick={() => navigate(`/comunidad/${comunidad.id}`)} key={comunidad.id} id={comunidad.id}> 
                        <Titulo tipo={comunidad.categoria}>
                            {comunidad.titulo}
                        </Titulo>
                        <Categoria>
                            {comunidad.categoria}
                        </Categoria>
                        <Objetivo>
                            {comunidad.objetivo}
                        </Objetivo> 
                        <Info>
                            <IconoCalendario />
                            {comunidad.fechaMaxima <= fechaHoy ?
                                <Fecha className="expirado">{formatearFecha(comunidad.fechaMaxima)}</Fecha>
                            :
                                <Fecha>{formatearFecha(comunidad.fechaMaxima)}</Fecha>
                            }
                            <IconoInfo />
                        </Info>
                    </Comunidad>
                ))}               
            </Main>
        :
        <>
            {user ?
                <Main>
                    <Sin>
                        <p>Aun no has creado ninguna comunidad</p>
                        <button onClick={handleClick}>Crea tu propia comunidad</button>
                    </Sin>
                </Main>
            :
                <Main>
                    <Sin>Antes debes iniciar sesión</Sin>
                </Main>
            }
        </>                 
    );
}
 
export default MisComunidades;