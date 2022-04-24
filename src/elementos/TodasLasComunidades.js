import {Main, Comunidad, Titulo, Categoria, Objetivo, Info, Fecha, Cargando} from "../estilos/comunidades"
import useObtenerComunidades from "../hooks/useObtenerComunidades";
import formatearFecha from "../funciones/formatearFecha";
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"

const TodasLasComunidades = () => {
    const [comunidades] = useObtenerComunidades();

    const navigate = useNavigate()

    return (
        comunidades.length > 0 ?
            <Main>
                {comunidades.map((comunidad) => (
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
            <Cargando>
                <img src={SpinnerLoader} alt="Cargando..." />
            </Cargando>
    );
}
 
export default TodasLasComunidades;