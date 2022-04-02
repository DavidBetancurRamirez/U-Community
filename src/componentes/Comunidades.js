import React from "react";
import styled from 'styled-components';
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import theme from "../theme";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";

const Main = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    background: linear-gradient(315deg, #ffffff, #dadada);
    box-shadow:  -20px -20px 60px #cecece,
                20px 20px 60px #ffffff;
`;
const Comunidad = styled.div`
    width: 320px;
    background-color: #D7D9D7;
    border-radius: 25px;
    opacity: 0.8;
    margin: 10px;
    display:flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    cursor: pointer;

    .estudio {
        background-color: ${theme.categoria.estudio};
    }
    .trueque {
        background-color: ${theme.categoria.trueque};
    }
    .diversion {
        background-color: ${theme.categoria.diversion};
    }
    .transporte {
        background-color: ${theme.categoria.transporte};
    }
    .venta {
        background-color: ${theme.categoria.venta};
    }
    .compra {
        background-color: ${theme.categoria.compra};
    }
`;
const Titulo = styled.div`
    background-color: ${theme.errorCategoria};
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: #fff;
    font-weight: 800;
`;
const Categoria = styled.div`
    background-color: #c4c4c4;
    border: dashed 1px #000;
    height: 25px;
    text-align: center;
    font-weight: 700;
`;
const Objetivo = styled.div`
    height: 100px;
    width: 100%;
    padding: 10px 15px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
const Info = styled.div`
    display: flex;
    float: right;
    padding: 5px 15px;
    width: 100%;
    justify-content: space-between;

    svg {
        width: 20px;
        height: 20px;
        float: right;
    }
`;
const Fecha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
`;

const Comunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const navigate = useNavigate()
    const {user} = useAuth()

    const handleClick = () => {
        if(user) {
            navigate("/comunidad");
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder crear una comunidad es necesario iniciar sesión" })
        }
    }

    return (
        <Main>
            <Comunidad onClick={handleClick}> 
                <Titulo  className="estudio">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Estudio
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="venta">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Venta
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="trueque">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Trueque
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="diversion">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Diversion
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="transporte">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Transporte
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="compra">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Compra
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
            <Comunidad onClick={handleClick}> 
                <Titulo className="">
                    Taller refuerzo parcial geometria
                </Titulo>
                <Categoria>
                    Error al cargar color
                </Categoria>
                <Objetivo>
                    Contratar un profesor para la explicacion y resolucion del taller de geometria y muchas otras cosas, estoy probando el ellipsis lo peor esq aun falta para ver si sirve. parece q no esta funcionando, escribire mucho a ver si sale por debajo, un poco mas ojala q no porq no se como mas solucionarlo
                </Objetivo> 
                <Info>
                    <IconoCalendario />
                    <Fecha>01/03/2022</Fecha>
                    <IconoInfo />
                </Info>
            </Comunidad>
        </Main>
    );
}
 
export default Comunidades;