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
    margin-bottom: 15px;

    @media (max-width: 900px) {
        height: 70px;
        margin-bottom: 10px;
        flex-direction: row-reverse;
    }
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

    @media (max-width: 900px) {
        height: 70px;
        width: 70px;
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

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;
const Sesion = styled.div`
    display: flex;
    float: right;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    @media (max-width: 900px) {
        display: none;
    }
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
const ContenedorMenu = styled.nav`
    @media (min-width: 900px) {
        display: none;
    }
`;
const Menu = styled.div`
    display: block;
    position: relative;
    top: 25px;
    left: 20px;  
    z-index: 1;

    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;  
        background: #000;
        border-radius: 3px;  
        z-index: 1;  
        transform-origin: 4px 0px;  
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    span:first-child { transform-origin: 0% 0%; }
    span:nth-last-child(2) { transform-origin: 0% 100%; }

    &:hover > span {
        background-color: #524EF5;
        transition-duration: 0.5s;
    }
`;
const Input = styled.input`
    display: block;
    width: 40px;
    height: 34px;
    position: absolute;
    top: -7px;
    left: -8px;  
    cursor: pointer;  
    opacity: 0;
    z-index: 2;   

    &:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
    }

    &:checked ~ span:nth-last-child(2) { transform: rotate(-45deg) translate(0, -1px); }

    &:checked ~ span:nth-last-child(3) { animation: moveFromPosition 0.4s forwards; }

    @keyframes moveFromPosition{
        0%{
            transform: translateX(0px);
        }
        30%{
            transform: translateX(-40px);
        }
        60%{
            transform:translate(-10px, -15px) rotate(90deg);
        }
        100%{
            transform: translate(-10px, -100px) rotate(90deg);
        }
    }

    & ~ span:nth-last-child(3) { animation: backToPosition 0.4s forwards; }

    @keyframes backToPosition{
        100%{
            transform: translateX(0px);
        }
        70%{
            transform: translateX(-40px);
        }
        30%{
            transform:translate(-10px, -15px) rotate(90deg);
        }
        0%{
            transform: translate(-10px, -100px) rotate(90deg);
        }
    }

    &:checked ~ ul { transform: none; }
`;
const Lista = styled.ul`
    height: 500px;
    position: absolute;
    margin: -100px 0 0 -50px;
    width: 280px;
    padding: 50px;
    padding-top: 110px;  
    background: #ededed;
    list-style-type: none; 
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);  
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);


    li {
        padding: 10px 0;
        font-size: 16px;

        &:hover {
            padding-left: 25px;
            transition-duration: 0.5s;
        }

        &:not(:hover){
            transition-duration: 0.5s;
        }
    }

    a {
        text-decoration: none;
        color: #232323;  
        transition-delay: 0.4s;

        &:hover {
            color: tomato;
        }
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

            <ContenedorMenu>
                <Menu>
                    <Input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    <Lista>
                        <a><li>Crear +</li></a>
                        <a><li>Mis comunidades</li></a>
                        <a><li>Mis participaciones</li></a>
                        <a><li onClick={handlelogout}>Cerrar sesión</li></a>
                    </Lista>
                </Menu>
            </ContenedorMenu>

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