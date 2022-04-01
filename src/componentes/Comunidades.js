import React from "react";
import styled from 'styled-components';
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import theme from "../theme";
import { useNavigate } from 'react-router-dom';

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
`;
const Titulo = styled.div`
    background-color: ${theme.categoria.estudio};
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

const Comunidades = () => {
    const navigate = useNavigate()

    return (
        <Main>
            <Comunidad onClick={() => navigate("/comunidad")}> 
                <Titulo tipo="estudio">
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

            <Comunidad onClick={() => navigate("/comunidad")}> 
                <Titulo tipo="estudio">
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

            <Comunidad onClick={() => navigate("/comunidad")}> 
                <Titulo tipo="estudio">
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

            <Comunidad onClick={() => navigate("/comunidad")}> 
                <Titulo tipo="estudio">
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

            <Comunidad onClick={() => navigate("/comunidad")}> 
                <Titulo tipo="estudio">
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

        </Main>
    );
}
 
export default Comunidades;