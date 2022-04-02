import React from "react";
import styled from 'styled-components';
import {Menu, Titulo, Lista, ListaLi} from './aside'
import {ReactComponent as IconoPlus} from '../imagenes/IconoPlus.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";

const Crear = styled.div`
    float: right;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;

    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }

    p {
        font-size: 12px;
        float: right;
        margin-left: 2px;
        margin-top: 2px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
const Plus = styled.div`
    width: 15px;
    height: 15px;
    float: left;

    svg {
        width: 100%;
    }
`;

const MisComunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {

    const navigate = useNavigate();
    const {user} = useAuth()

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
        <Menu>
            <Titulo>Mis comunidades</Titulo>
            <Lista>
                <ListaLi>Vendo libro</ListaLi>
                <ListaLi>Cálculo 1</ListaLi>
                <ListaLi>Cambio bata de laboratorio</ListaLi>
                <ListaLi>Vendo libro</ListaLi>
                <ListaLi>Cálculo 1</ListaLi>
                <ListaLi>Cambio bata de laboratorio</ListaLi>
            </Lista>

            <Crear onClick={handleClick}>
                <Plus>
                    <IconoPlus />
                </Plus>
                <p title="Ir al formulario">Crear</p>
            </Crear>
        </Menu>
    );
}

export default MisComunidades;