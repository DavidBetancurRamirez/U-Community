import React from "react";
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import { useNavigate } from 'react-router-dom';
import useObtenerComunidades from "../hooks/useObtenerComunidades";
import formatearFecha from "../funciones/formatearFecha";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"
import {Contenedor, Main, Comunidad, Titulo, Categoria, Objetivo, Info, Fecha, Cargando, ContenedorFiltros, Input, Label, Crear} from "../estilos/comunidades"
import { useAuth } from "../contextos/authContext";

const Comunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [comunidades] = useObtenerComunidades();
    const {user} = useAuth()

    const navigate = useNavigate()

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
                    <Input type="radio" id="radio-1" name="tabs" />
                        <Label htmlFor="radio-1">Mis participaciones</Label>
                    <Input type="radio" id="radio-2" name="tabs" />
                        <Label htmlFor="radio-2">Mis comunidades</Label>
                    <Input type="radio" id="radio-3" name="tabs" defaultChecked />
                        <Label htmlFor="radio-3">Todas</Label>
                    <span className="glider"></span>
                </div>
            </ContenedorFiltros>

            {comunidades.length > 0 ?
                <Main>
                    {comunidades.map((comunidad) => (
                        <Comunidad onClick={() => navigate(`/comunidad/${comunidad.id}`)} key={comunidad.id} id={comunidad.id}> 
                            <Titulo className={comunidad.categoria}>
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
            }
        </Contenedor>

        <Crear title="Agregar comunidad"  onClick={handleClick}><lord-icon src="https://cdn.lordicon.com/auvicynv.json" trigger="hover" colors="primary:#09a4dd" /></Crear>
    </>
    );
}
 
export default Comunidades;