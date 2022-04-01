import React from "react";
import styled from 'styled-components';
import Logo from '../imagenes/Logo.png';
import {ReactComponent as IconoPerfil} from '../imagenes/IconoPerfil.svg'
import { useNavigate } from 'react-router-dom';
import theme from "../theme";
import { useAuth } from "../contextos/authContext";

const General = styled.div`
    height: 86px;
    width: 100%;
    background-color: ${theme.azulU};
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
`;
const ContTitulo = styled.div`
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;
const Imagen = styled.div`
    width: 86px;
    height: 86px;

    img {
        vertical-align: top;
        width: 100%;
    }
`;
const Titulo = styled.div`
    display: flex;
    font-weight: 800;
    color: #fff;
    font-size: 25px;
    margin-left: 10px;
    align-items: center;
    text-shadow: 2px 5px 15px;
`;
const Sesion = styled.div`
    display: flex;
    float: right;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`;
const Usuario = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin: 0px 10px;
    }
`;
const Icono = {
    width: "35px",
    height: "35px",
    margin: "0px 5px"
}
const Bienvenido = styled.p`
    font-weight: 300;
    display: flex;
`;
const CerrarSesion = styled.p`
    font-weight:200;
    font-size: 14px;
    color: #C7BFBF;
    display: flex;
    margin-right: 10px;

    &:hover {
        text-decoration: underline;
        color: #fff;
        cursor: pointer;
    }
`;

const Header = ({cambiarEstadoAlerta, cambiarAlerta}) => {

    const {user, logout, loading} = useAuth()

    const navigate = useNavigate();

    const handlelogout = async () => {
        try {
            await logout()
            navigate("/login")
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Sesión cerrada con exito, regresa pronto" })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <General>
            <ContTitulo onClick={() => navigate("/")} title="U Community">
                <Imagen>
                    <img src={Logo} alt="U Community" />
                </Imagen>
                <Titulo>U Community</Titulo>
            </ContTitulo>
            {!loading &&
                <Sesion>
                    {user ?
                    <>
                        <Usuario>
                            <Bienvenido>Bienvenido: {user.displayName || user.email}</Bienvenido>
                            <IconoPerfil />
                        </Usuario>
                        <CerrarSesion onClick={handlelogout}>Cerrar Sesion</CerrarSesion>
                    </>
                    :
                    <>
                        <Usuario>
                            <Bienvenido>Aun no has iniciado sesión</Bienvenido>
                            <lord-icon src="https://cdn.lordicon.com/spxnqpau.json" trigger="loop" colors="primary:#121331,secondary:#e71d36" style={Icono} />
                        </Usuario>
                        <CerrarSesion onClick={() => navigate("/login")}>Iniciar sesión</CerrarSesion>
                    </>
                    }
                </Sesion>
            }
        </General>
    );
}

export default Header;