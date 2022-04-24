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
                            {MisComunidades.map((miComunidad) => (                            
                                <ListaLi key={miComunidad.id} id={miComunidad.id}>{miComunidad.titulo}</ListaLi>
                            ))}
                        </> 
                    :
                        <p>Aun no has iniciado sesion</p>
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
                            {MisParticipaciones.map((miParticipacion) => (                            
                                <ListaLi key={miParticipacion.id} id={miParticipacion.id}>{miParticipacion.titulo}</ListaLi>
                            ))}
                        </> 
                    :
                        <p>Aun no has iniciado sesion</p>
                    }
                </Lista>
            </Menu>
        </AsideBar>
    );
}

export default Aside;