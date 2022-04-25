import React from "react";
import {Main, Comunidad, Titulo, Categoria, Objetivo, Info, Fecha, Sin} from "../estilos/comunidades"
import useObtenerMisParticipaciones from "../hooks/useObtenerMisParticipaciones";
import formatearFecha from "../funciones/formatearFecha";
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";

const MisParticipaciones = () => {
    const [MisParticipaciones] = useObtenerMisParticipaciones();

    const navigate = useNavigate();    
    const {user} = useAuth();

    return (
        MisParticipaciones.length > 0 ?
            <Main>
                {MisParticipaciones.map((comunidad) => (
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
                            <Fecha>{formatearFecha(comunidad.fechaMaxima)}</Fecha>
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
                        <p>Aun no haces parte de ninguna comunidad</p>
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
 
export default MisParticipaciones;