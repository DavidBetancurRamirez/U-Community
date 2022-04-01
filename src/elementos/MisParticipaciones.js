import React from "react";
import {Menu, Titulo, Lista, ListaLi} from './aside'

const MisParticipaciones = () => {
    return (
        <Menu>
            <Titulo>Mis Participaciones</Titulo>
            <Lista>
                <ListaLi>Salida paintball</ListaLi>
                <ListaLi>Taller de refuerzo</ListaLi>
                <ListaLi>Parcial geometría</ListaLi>  
            </Lista>
        </Menu>
    );
}

export default MisParticipaciones;