import styled from "styled-components";
import theme from '../theme'

const Contenedor = styled.div`
    width: 1000px;
    display: flex;  
    margin: 30px auto;
    flex-direction: column;

    @media (max-width: 1100px) {
        width: 95%;
    }
`;
const Regresar = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  margin-left: 15px;
  width: 170px;
  font-weight: 300;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  transition: .5s ease all;

  svg {
    height: 30px;
    width: 30px;
    margin-right: 5px;
    fill: currentColor !important;
    color: ${theme.azulU};
  }

  &:hover {
    background-color: ${theme.grisOscuro};
    opacity: .8;
  }

  @media (max-width: 650px) {
      width: 150px;
      
      p {
        font-size: 15px;
      }
    }
`;
const ContenedorTitulo = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;

  @media (max-width: 900px) {
      flex-direction: column;
      height: auto;
  }
`;
const Titulo = styled.div`
    width: 70%;
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
    border-radius: 20px;
    color: #fff;
    font-weight: 900;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100%;
        padding: 15px 0;
    }

    @media (max-width: 650px) {
        font-size: 18px;
    }
`;
const ContenedorInfo = styled.div`
    width: 30%;
    margin-left: 50px;
    
    .expirado { color: red; }

    @media (max-width: 900px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        margin-top: 15px;
    }
`;
const Categoria = styled.div`
    background-color: ${theme.grisOscuro};
    height: 40px;
    border: 1px dashed #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;

    @media (max-width: 900px) {
        width: 48%;
    }

    @media (max-width: 650px) {
        width: 100%;
        font-size: 16px;
    }
`;
const Fecha = styled.div`
    background-color: #fff;
    height: 40px;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 900px) {
        width: 48%;
    }

    @media (max-width: 650px) {
        width: 100%;
        font-size: 15px;
    }
`;
const Objetivo = styled.div`
    background-color: #DEE8D5;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    margin-top: 20px;
    min-height: 200px;
    overflow: auto;
`;
const Participacion = styled.div`
    height: 50px;
    background-color: #A7C4C2;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        font-size: 15px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
    }
`;
const ContenedorParticipantes = styled.div`
    cursor: pointer;
    position: relative;
    transition: 1.5s ease all;

    @media (max-width: 800px) {
        width: 80%;
        display: flex;
        justify-content: center;

        svg {
            height: 30px;
            width: 30px;
        }
    }

    @media (max-width: 430px) {
        width: 95%;
    }
`;
const Participantes = styled.div`
    width: 100%;

    svg {
        height: 40px;
        width: 40px;
        margin: 10px;
    }

    @media (max-width: 800px) {
        border-bottom: 1px dashed  #000;
        display: flex;
        justify-content: center;

        svg {
            height: 30px;
            width: 30px;
        }
    }
`;
const MostrarListaParticipantes = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -140px;
    left: 0;
    width: 150%;
    border-radius: 10px;
    height: 140px;
    overflow: auto;

    div::before {
        content: "- ";
        white-space: pre;
    }

    div:first-child {
        &::before{
            content: "";
        }

        justify-content: center;
        font-weight: 500;
    }


    @media (max-width: 800px) {
        width: 100%;
    }
`; 
const Participante = styled.div`
    padding: 5px;
    font-size: 14px;
    font-weight: 300;
    width: 100%;
`;
const Restricciones = styled.div`
    svg {
        margin: 0px 10px;
    }

    @media (max-width: 800px) {
        width: 80%;
        border-bottom: 1px dashed  #000;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        padding-bottom: 10px;

        svg {
            height: 25px;
            width: 25px;
        }
    }

    @media (max-width: 430px) {
        width: 95%;
    }
`;
const Unirme = styled.div`
    cursor: pointer;
    transition: 1.5s ease all;
    height: 50px;
    padding-left: 10px;

    svg {
        height: 30px;
        width: 30px;
        margin: 0 10px;
    }

    &:hover {
        background-color: #DEE8D5;
    }
`;
const ParteComunidad = styled.div`
    height: 50px;
    margin-right: 10px;
`;
const Abandonar = styled.a`
    margin: 10px auto;
    text-decoration: none;

    button {
        background-color: ${theme.categoria.diversion};
        border: none;
        border-radius: 15px;
        padding: 5px;
        color: #fff;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        svg {
            margin-left: 10px;
        }
    }

`;
const Fundador = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #498C8A;
    border-radius: 20px;
    margin-top: 8px;
    padding: 10px;
    color: #fff;

    a, a:visited, a:hover, a:active { 
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        padding-bottom: 5px;
    }
`;
const Edit = styled.div`
    display: flex;
    cursor: pointer;

    p {
        margin: 0 5px;
        font-weight: 300;
    }

    svg { margin-top: -2px; }

    &:hover {
        opacity: 0.8;

        p {
            text-decoration: underline;
        }
    }

    @media (max-width: 800px) {      
        display: none;
    }
`;
const Delete = styled.div`
    display: flex;
    cursor: pointer;

    div {
        display: flex;

        p {
            margin: 0 5px;
            font-weight: 300;
        }

        svg { margin-top: -2px; }
    }

    
    .eliminar { display: none; }

    &:hover {
        opacity: 0.8;

        p { text-decoration: underline; }
    }

    @media (max-width: 800px) {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        width: 95%;

        .eliminar { display: flex; }

        &:hover {
            opacity: 1;

            p { text-decoration: none; }
        }

        div {
            p { font-size: 14px; }

            &:hover {
                opacity: 0.8;

                p { text-decoration: underline; }
            }            
        }
    }
`;
const NombreFundador = styled.div`
    margin: auto;

    @media (max-width: 800px) {
        font-size: 15px;
        padding: 5px;
        border-bottom: 1px solid #000;
        max-width: 280px;
        text-align: justify;
        word-break: break-all
    }
`;
const PopUp = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    z-index: 5;

    &:target {
        visibility: visible;
        opacity: 1;
    }
`;
const ContPopUp = styled.div`
    margin: 80px auto;
    padding: 20px;
    padding-bottom: 10px;
    background: #fff;
    border-radius: 5px;
    width: 450px;
    position: relative;
    transition: all 5s ease-in-out;

    .texto { text-align: center; }

    div {
        display: flex;
        justify-content: space-between;
        margin: 0;
        width: 100%;
        padding: 10px;

        h2 {
            margin-top: 0;
            color: #333;
            font-weight: 800;
        }
    }

    span {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        a {
            width: 48%;
            font-weight: 500;
            color: #fff;
            padding: 5px;
            text-align: center;
            text-decoration: none;
            border-radius: 10px;
        }

        .volver { background-color: ${theme.categoria.diversion}; }
        .aceptar { background-color: ${theme.verde}; }
    }

    @media (max-width: 500px) { 
        width: 90%;
        padding: 15px 10px 10px 10px;
    }
`;
const InputComentarios = styled.form`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    input {
        width: 800px;
        background-color: #fff;
        opacity: 0.8;
        border-radius: 10px;
        border: 1px solid #fff;
        outline: none;
        padding: 5px;

        @media (max-width: 800px) {
            width: 90%;
        }
    }

    button {
        border: none;
        background-color: transparent;
    }
`;
const Icono = {
    width: "32px",
    height: "32px",
    cursor: "pointer",
    margin: "0 8px"
}
const ContenedorComentarios = styled.div`
    background-color: #FBF5F3;
    margin-top: 20px;
    padding: 5px;
    border-radius: 10px;
`;
const HeaderComentarios = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #000;
    padding-bottom: 10px;

    svg {
        margin: 0 5px;
    }
`;
const Coments = styled.div`
    padding: 10px;
    padding-top: 0;
    display: flex;
    flex-direction: column;

    img {
        width: 100px;
        height: 100px;
        background-color: #FBF5F3;
        margin: auto;
        margin-top: 20px;
    }
`;
const Comentario = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px dashed ${theme.grisOscuro};
    margin-top: 10px;
`;
const Perfil = styled.div`
    width: 28px;
    height: 28px;

    svg {
        margin-right: 5px;
        margin-bottom: 10px;
        width: 28px;
        height: 28px;
    }
`;
const Nombre = styled.h5`
    font-weight: 600;
    font-size: 15px;
    display: inline-block;
    margin-right: 10px;
`;
const TextoComentario = styled.div`
    margin-left: 5px;
    font-size: 14px;
    margin-bottom: 10px;
    display: inline-block;
    text-align: justify;
`;
const Cargando = styled.img`
    display: block;
    margin: 10px auto;
`;

export {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Participacion, ContenedorParticipantes, MostrarListaParticipantes, Participantes, Participante, Restricciones, Unirme, ParteComunidad, Abandonar, Fundador, Edit, Delete, NombreFundador, PopUp, ContPopUp, InputComentarios, Icono, ContenedorComentarios, HeaderComentarios, Coments, Comentario, Perfil, Nombre, TextoComentario, Cargando}