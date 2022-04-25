import styled from "styled-components";
import theme from "../theme";

const Contenedor = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        margin-top: 15px;
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
    
    @media (max-width: 375px) {
        width: 200px;
    }
`;
const Titulo = styled.div`
    background: ${(props) => {
        if(props.tipo === 'Compras'){
            return theme.categoria.compra;
        } else if (props.tipo === 'Diversion') {
            return theme.categoria.diversion;
        } else if (props.tipo === 'Estudio') {
            return theme.categoria.estudio;
        } else if (props.tipo === 'Transporte') {
            return theme.categoria.transporte;
        } else if (props.tipo === 'Trueque') {
            return theme.categoria.trueque;
        } else if (props.tipo === 'Venta') {
            return theme.categoria.venta;
        } else {
            return theme.errorCategoria;
        }
    }};
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
const ContenedorFiltros = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    div {
        display: flex;
        position: relative;
        background-color: #fff;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
        padding: 10px;
        border-radius: 100px;
        z-index: 2;

        input[id=radio-1]:checked ~ .glider {
            transform: translateX(0);
        }

        input[id=radio-2]:checked ~ .glider {
            transform: translateX(100%);
        }

        input[id=radio-3]:checked ~ .glider {
            transform: translateX(200%);
        }

        .glider {
            position: absolute;
            display: flex;
            height: 25px;
            width: 200px;
            background-color: #e6e6e6;
            z-index: 1;
            border-radius: 100px;
            transition: 0.25s ease-out;

            @media (max-width: 715px) {
                width: 150px;
            }

            @media (max-width: 480px) {
                width: 100px;
            }
        }

        @media (max-width: 715px) {
            padding: 5px;
        }
    }
`;
const Input = styled.input`
    display: none;  

    &:checked + label {
        color: ${theme.azulU};
    }
`;
const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 100px;
    cursor: pointer;
    transition: color 0.15s ease-in;
    z-index: 3;

    @media (max-width: 715px) {
        font-size: 14px;
        width: 150px;
    }

    @media (max-width: 480px) {
        width: 100px;
        font-size: 11px;
    }
`;
const Crear = styled.div`
    display: none;

    @media (max-width: 900px) {
        display: block;
        position: fixed;
        bottom: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        padding: 1px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
`;
const Sin = styled.div`
    margin: 20px auto;
    text-align: center;

    p {
        font-weight: 400;
        font-size: 16px;
        color: #212F3C;
    }

    button {
        background-image: radial-gradient(circle at 7.7% 50%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        margin: 20px;
        cursor: pointer;
        font-weight: 300;
        font-size: 18px;
        color: #fff;  
        transition: 1s linear all;

        &:hover {
            color: #000;
            background-image: radial-gradient(circle at 86.64% 71.15%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
        }

        &:active {
            position: relative;
            top: 2px;
        }
    }
`;

export {Contenedor, Main, Comunidad, Titulo, Categoria, Objetivo, Info, Fecha, Cargando, ContenedorFiltros, Input, Label, Crear, Sin}