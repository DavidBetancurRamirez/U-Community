import React from "react";
import styled from 'styled-components';
import theme from '../theme';
import {ReactComponent as IconoPlus} from '../imagenes/IconoPlus.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";
import useObtenerMisComunidades from "../hooks/useObtenerMisComunidades";
import useObtenerMisParticipaciones from "../hooks/useObtenerMisParticipaciones";

const AsideBar = styled.div`
    margin-top: 0;
    width: 20%;
    max-width: 150px;
    float: left;

    @media (max-width: 900px) {
        display: none;
    }
`;
const Menu = styled.div`
    width: 100%;
    height: 220px;
    background-color: #fff;
    margin-bottom: 20px;
`;
const Titulo = styled.div`
    padding: 15px 10px 10px 10px;
    font-weight: 600;
    text-align: center;
`;
const Lista = styled.ul`
    padding: 0px 10px 10px 10px;
    height: 125px;
    width: 140px;
    overflow: auto;

    p {
        font-weight: 300;
        font-size: 15px;
        text-align: center;
    }
`;
const ListaLi = styled.li`
    color: ${theme.azulU};
    text-decoration: none;
    font-size: 14px;
    border-bottom: dashed 1px #000;
    padding: 5px 0px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: #f2f2f2;
    }
`;
const InicioSinSesion = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 16px;
    text-align: center;

    button {
        box-shadow: 3px 4px 0px 0px #1564ad;
        background:linear-gradient(to bottom, #09a4dd 5%, #6aa9e8 100%);
        background-color:#09a4dd;
        border-radius:5px;
        border:1px solid #337bc4;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-size:13px;
        font-weight:400;
        text-decoration:none;
        text-shadow:0px 1px 0px #528ecc;
        margin-top: 15px;

        &:hover {
            background:linear-gradient(to bottom, #6aa9e8 5%, #09a4dd 100%);
	        background-color:#6aa9e8;
        }

        &:active {
            position:relative;
	        top:2px;
        }
    }
`;
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
const Valorar = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    transition: 1s ease all;
    cursor: pointer;

    p {
        font-weight: 300;
    }

    &:hover, &:active {
        background-color: ${theme.grisOscuro};
        p { 
            text-decoration: underline; 
            color: ${theme.azulU};
        }
    }
`;
const Flecha = {
    width: "20px",
    height: "20px",
    transform: "rotate(270deg)"
};

const Aside = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const navigate = useNavigate();
    const {user} = useAuth();

    const [MisComunidades] = useObtenerMisComunidades();
    const [MisParticipaciones] = useObtenerMisParticipaciones();

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
        <AsideBar>
            <Menu>
                <Titulo>Mis comunidades</Titulo>  
                <Lista> 
                    {user ? 
                        <>                                  
                            {MisComunidades.length > 0 ? 
                                <>
                                    {MisComunidades.map((miComunidad) => (                            
                                        <ListaLi key={miComunidad.id} id={miComunidad.id} onClick={() => navigate(`/comunidad/${miComunidad.id}`)}>{miComunidad.titulo}</ListaLi>
                                    ))}
                                </>
                            :
                                <p>Aun no has creado ninguna comunidad</p>
                            }
                        </> 
                    :
                        <InicioSinSesion onClick={() => navigate("/login")}>Aun no has iniciado sesión<button>Inicia sesión AHORA</button></InicioSinSesion>
                    }
                </Lista>

                <Crear onClick={handleClick}>
                    <Plus>
                        <IconoPlus />
                    </Plus>
                    <p title="Ir al formulario">Crear</p>
                </Crear>
            </Menu>

            <Menu>
                <Titulo>Mis Participaciones</Titulo>
                <Lista>
                    {user ? 
                        <>                                  
                            {MisParticipaciones.length > 0 ? 
                                <>
                                    {MisParticipaciones.map((miParticipacion) => (                            
                                        <ListaLi key={miParticipacion.id} id={miParticipacion.id} onClick={() => navigate(`/comunidad/${miParticipacion.id}`)}>{miParticipacion.titulo}</ListaLi>
                                    ))}
                                </>
                            :
                                <p>Aun no haces parte de ninguna comunidad</p>
                            }
                        </> 
                    :
                        <InicioSinSesion onClick={() => navigate("/login")}>Aun no has iniciado sesión<button>Inicia sesión AHORA</button></InicioSinSesion>
                    }
                </Lista>
            </Menu>

            <Valorar  onClick={() => navigate("/valoracion")}>
                <p>Valorar</p>
                <lord-icon src="https://cdn.lordicon.com/xhdhjyqy.json" colors="primary:#09a4dd" trigger="loop-on-hover" style={Flecha}></lord-icon>
            </Valorar>
        </AsideBar>
    );
}

export default Aside;