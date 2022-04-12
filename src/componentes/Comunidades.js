import React from "react";
import styled from 'styled-components';
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoLupa} from '../imagenes/IconoLupa.svg'
import theme from "../theme";
import { useNavigate } from 'react-router-dom';
import useObtenerComunidades from "../hooks/useObtenerComunidades";
import formatearFecha from "../funciones/formatearFecha";
import SpinnerLoader from "../imagenes/SpinnerLoader.gif"

const Contenedor = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        width: 95%;
    }
`;
const Main = styled.div`
    width: 100%;
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

    .Compras {background-color: ${theme.categoria.compra};}
    .Diversion {background-color: ${theme.categoria.diversion};}
    .Estudio {background-color: ${theme.categoria.estudio};}
    .Transporte {background-color: ${theme.categoria.transporte};}
    .Trueque {background-color: ${theme.categoria.trueque};}    
    .Venta {background-color: ${theme.categoria.venta};}

    @media (max-width: 375px) {
        width: 200px;
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
const Cargando = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: transparent;
`;
const Buscador = styled.div`
    margin-left: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    z-index: 2;
    height: 30px;

    button {
        margin-left: 15px;
        border: none;
        height: 100%;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 300;
        padding: 2px 10px;
        background-color: ${theme.azulU};
        opacity: .8;
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        margin-left: 0px;
    }
`;
const Buscar = styled.div`
    width: 330px;
    display: flex;
    align-items: center; 
    
    input {
        width: 100%;
        margin-left: 2px;
        font-size: 14px;
        font-weight: 300;
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: rgba(255, 255, 255, .5);
        padding: 5px 10px;
    }

    svg {
        margin-left: -25px;
        width: 18px;
        height: 18px;
    }
`;

const Comunidades = () => {
    const [comunidades] = useObtenerComunidades();

    const navigate = useNavigate()

    return (
    <Contenedor>
        <Buscador>
            <Buscar>
                <input placeholder="Buscar" /><IconoLupa />
            </Buscar>
            <button>Buscar</button>
        </Buscador>

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
    );
}
 
export default Comunidades;