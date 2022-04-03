import React, {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import styled from 'styled-components';
import {ReactComponent as IconoInfo} from '../imagenes/IconoInfo.svg'
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import theme from "../theme";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contextos/authContext";
//import fromUnixTime from 'date-fns/fromUnixTime';

const Main = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    background: linear-gradient(315deg, #ffffff, #dadada);
    box-shadow:  -20px -20px 60px #cecece,
                20px 20px 60px #ffffff;
`;
const Comunidad = styled.div`
    width: 320px;
    background-color: #D7D9D7;
    border-radius: 25px;
    opacity: 0.8;
    margin: 10px;
    display:flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    cursor: pointer;

    .Compra {
        background-color: ${theme.categoria.compra};
    }
    .Diversion {
        background-color: ${theme.categoria.diversion};
    }
    .Estudio {
        background-color: ${theme.categoria.estudio};
    }
    .Transporte {
        background-color: ${theme.categoria.transporte};
    }
    .Trueque {
        background-color: ${theme.categoria.trueque};
    }    
    .Venta {
        background-color: ${theme.categoria.venta};
    }
`;
const Titulo = styled.div`
    background-color: ${theme.errorCategoria};
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: #fff;
    font-weight: 800;
`;
const Categoria = styled.div`
    background-color: #c4c4c4;
    border: dashed 1px #000;
    height: 25px;
    text-align: center;
    font-weight: 700;
`;
const Objetivo = styled.div`
    height: 100px;
    width: 100%;
    padding: 10px 15px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
const Info = styled.div`
    display: flex;
    float: right;
    padding: 5px 15px;
    width: 100%;
    justify-content: space-between;

    svg {
        width: 20px;
        height: 20px;
        float: right;
    }
`;
const Fecha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
`;
const SinComunidades = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(315deg, #ffffff, #dadada);
    box-shadow:  -20px -20px 60px #cecece,
                20px 20px 60px #ffffff;

    h2 {
        font-size: 30px;
        font-weight: 900;
        margin: 20px 0;
    }
    p {
        font-weight: 300;
        font-size: 20px;
    }
    button {
        background-image: radial-gradient(circle at 7.7% 50%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        margin: 30px 0;
        cursor: pointer;
        font-weight: 300;
        font-size: 20px;
        color: #fff;  
        transition: 1s linear all;

        &:hover {
            color: #000;
            background-image: radial-gradient(circle at 86.64% 71.15%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
        }
    }
`;

const Comunidades = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const [comunidades, cambiarComunidades] = useState([])
    const navigate = useNavigate()
    const {user} = useAuth()

    useEffect(() => {
        onSnapshot(collection(db, 'comunidades'), 
            (snapshot) => {
                const arregloComunidades = snapshot.docs.map((comunidad) => {
                    return {...comunidad.data(), id: comunidad.id}
                })

                cambiarComunidades(arregloComunidades)
            }, (error) => {
                cambiarEstadoAlerta(true)
                cambiarAlerta({ tipo: "error", mensaje: error })
        })
    })

    const handleClick = () => {
        if(user) {
            navigate("/comunidad");
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder crear una comunidad es necesario iniciar sesión" })
        }
    }

    const handleClickForm = () => {
        if(user) {
            navigate("/formulario");
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder crear una comunidad es necesario iniciar sesión" })
        }
    }

    return (
        comunidades.length > 0 ?
            <Main>
                {comunidades.map((comunidad) => (
                    <Comunidad onClick={handleClick} key={comunidad.id} id={comunidad.id}> 
                        <Titulo  className={comunidad.categoria}>
                            {comunidad.titulo}
                        </Titulo>
                        <Categoria>
                            {comunidad.categoria}
                        </Categoria>
                        <Objetivo>
                            {comunidad.objetivo}
                        </Objetivo> 
                        <Info>
                            <IconoCalendario />
                            <Fecha>{comunidad.fecha}</Fecha>
                            <IconoInfo />
                        </Info>
                    </Comunidad>
                ))}               
            </Main>
        :
            <SinComunidades>
                <h2>WOOOOW</h2>
                <p>Parece que no hay comunidades aun, se el primero en crear una!!!</p>
                <button onClick={handleClickForm}>Crea tu propia comunidad</button>
            </SinComunidades>
    );
}
 
export default Comunidades;