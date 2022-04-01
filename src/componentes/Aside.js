import React from "react";
import styled from 'styled-components';
import Categorias from "../elementos/Categorias";
import MisComunidades from "../elementos/MisComunidades";
import MisParticipaciones from "../elementos/MisParticipaciones";

const AsideBar = styled.div`
    margin-top: 0;
    width: 20%;
    max-width: 150px;
    float: left;
`;

const Aside = () => {
    return (
        <AsideBar>
            <Categorias />
            <MisComunidades />
            <MisParticipaciones />
        </AsideBar>
    );
}

export default Aside;