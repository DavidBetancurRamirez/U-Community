import React, {useState} from "react";
import styled from 'styled-components';
import theme from "../theme";
import {ReactComponent as IconoDown} from '../imagenes/IconoDown.svg'

const Contenedor = styled.div`
  background-color: #fff;
  opacity: .8;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 5px;
  width: 320px;
  height: 30px;  
  text-align: center;
  display: flex;
  align-items: center;  
  position: relative;
  transition: 1.5s ease all;

  &:hover {
    background: ${theme.grisClaro};
  }

  @media (max-width: 1050px) {
      width: 150px;
      padding-left: 2px;
  }

  @media (max-width: 750px) {
      width: 200px;
  }
`;
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;

    svg {
        width: 20px;
        height: 20px;
        fill: currentColor !important;
        color: ${theme.azulU};
    }

    @media (max-width: 1050px) {
        font-size: 15px;
    }
`;
const Opciones = styled.div`
    background: #fff;
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    border-radius: 10px;
    max-height: 300px;
    overflow-y: auto;
`; 
const Opcion = styled.div`
    padding: 10px;
    display: flex;
    height: 40px;
    text-transform: uppercase;

    &:hover {
        background: ${theme.grisClaro};
    }
`;

const SelectCategoria = ({categoria, cambiarCategoria}) => {
    const [mostrarSelect, cambiarMostrarSelect] = useState(false)

    const categorias = [
        {id: "Compras", texto: "Compras"},
        {id: "Diversion", texto: "Diversion"},
        {id: "Estudio", texto: "Estudio"},
        {id: "Transporte", texto: "Transporte"},
        {id: "Trueque", texto: "Trueque"},
        {id: "Venta", texto: "Venta"}
    ]

    const handleClick = (e) => {
        cambiarCategoria(e.currentTarget.dataset.valor)
    }

    return (
        <Contenedor onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{categoria}<IconoDown /></OpcionSeleccionada>

            {mostrarSelect && 
                <Opciones>
                    {categorias.map((categoria) => {
                        return <Opcion key={categoria.id} onClick={handleClick} data-valor={categoria.id}>
                                    {categoria.texto}
                                </Opcion>
                    })}
                </Opciones>
            }
        </Contenedor>
    );
}
 
export default SelectCategoria;