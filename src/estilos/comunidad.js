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
const Participantes = styled.div`
    svg {
        height: 40px;
        width: 40px;
        margin: 10px;
    }

    @media (max-width: 800px) {
        width: 80%;
        border-bottom: 1px dashed  #000;
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
const InputComentarios = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    input {
        width: 800px;
        background-color: #fff;
        opacity: .8;
        border-radius: 10px;
        border: 1px solid #fff;
        outline: none;
        padding: 5px;

        @media (max-width: 800px) {
            width: 90%;
        }
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

export {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Participacion, Participantes, Restricciones, Unirme, ParteComunidad, InputComentarios, Icono, ContenedorComentarios, HeaderComentarios, Coments, Comentario, Perfil, Nombre, TextoComentario, Cargando}