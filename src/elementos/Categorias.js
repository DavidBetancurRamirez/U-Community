import React from "react";
import styled from 'styled-components';
import {Titulo, Lista} from './aside'

const LiCategorias = styled.div`
    width: 100%;
    height: 180px;
    background-color: #fff;
    margin-bottom: 30px;
`;
const ListaLiCat = styled.li`
    color: #09A4DD;
    text-decoration: none;
    font-size: 14px;
    margin-left: 15px;
    padding: 0px;
    border-bottom: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Categorias = () => {
    const categorias = [
        {id: "compras", texto: "Compras"},
        {id: "diversion", texto: "Diversion"},
        {id: "estudio", texto: "Estudio"},
        {id: "transporte", texto: "Transporte"},
        {id: "trueque", texto: "Trueque"},
        {id: "venta", texto: "Venta"}
    ]

    return (
        <LiCategorias>
            <Titulo>Categorias</Titulo>
            <Lista>
                {categorias.map((categoria) => {
                    return <ListaLiCat key={categoria.id} data-valor={categoria.id}>
                                {categoria.texto}
                            </ListaLiCat>
                })}
            </Lista>
        </LiCategorias>
    );
}

export default Categorias;