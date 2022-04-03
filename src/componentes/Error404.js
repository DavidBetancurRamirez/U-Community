import React from "react";
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import BuhoUps from "../imagenes/BuhoUps.jpeg"
import Gafas from "../imagenes/Gafas.gif"
import theme from "../theme";
import { useNavigate } from 'react-router-dom';

const Contenedor = styled.div`
    width: 1000px;
    margin: 100px auto;
    display: flex;
`;

const ContenedorImg = styled.div`
    width: 400px;
    transition: 2s ease all;

    &:hover {
        opacity: 0.6;
    }
`;

const Buho = styled.img`
    width: 400px;
    height: 400px;
    border: #f2f2f2;
    position: absolute;
`;

const GafasBuho = styled.img`
    position: relative;
    width: 430px;
    height: 430px;
    top: -70px;
    left: -20px;
`;

const ContenedorInfo = styled.div`
    width: 600;
    padding: 30px;
    display: flex;
    flex-direction: column;

    p{
        font-size: 18px;
        margin: 15px 0;
        text-align: center;
    }
`;

const Ups = styled.h2`
    font-weight: 900;
    font-size: 50px;
    text-align: center;
    margin-bottom: 20px;
`;

const Error = styled.h2`
    font-weight: 300;
    font-size: 30px;
    text-align: center;
    cursor: pointer;
    color: ${theme.categoria.diversion};
    text-decoration: underline;
    transition: 1s ease all;

    &:hover {
        text-decoration: none;
        color: ${theme.azulU};
    }
`;

const ContenedorBoton = styled.div`
    display: flex;
    align-items: center;
`;

const Volver = styled.button`
    background-color: ${theme.azulU};
    opacity: .8;
    border: 1px solid transparent;
    border-radius: 10px;
    width: 80%;
    height: 35px;
    cursor: pointer;
    font-weight: 300;
    font-size: 20px;
    color: #fff;  
    transition: 1s ease-out all;

    &:hover {
        color: ${theme.azulU};
        background-color: #fff;
        border: 1px solid ${theme.azulU};
    }
`;

const Casa = {
    width: "200px",
    height: "200px",
    margin: "0 0 0 10px"
}

const Error404 = () => {
    const navigate = useNavigate();

    return (
    <>
        <Helmet>
            <title>Error 404</title>
        </Helmet>

        <Contenedor>
            <ContenedorImg>
                <Buho src={BuhoUps} alt="Logo U Community" />
                <GafasBuho src={Gafas} alt="Gafas" />
            </ContenedorImg>

            <ContenedorInfo>                
                <Ups>UPSSS...</Ups>
                <Error>ERROR 404</Error>
                <p>Parece que la dirección que buscas no se a encontrado.</p>
                <ContenedorBoton>
                    <Volver onClick={() => navigate("/")}>Volver U Community</Volver>
                    <lord-icon  src="https://cdn.lordicon.com/etqbfrgp.json" trigger="loop-on-hover" 
                    colors="outline:#131432,primary:#92140c,secondary:#09a4dd,tertiary:#b26836,quaternary:#e8eff1"
                    style={Casa} />
                </ContenedorBoton>
            </ContenedorInfo>
        </Contenedor>
    </>
    );
}
 
export default Error404;