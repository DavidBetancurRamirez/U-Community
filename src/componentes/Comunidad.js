import React from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoPersonas} from '../imagenes/IconoPersonas.svg'
import {ReactComponent as IconoUnirme} from '../imagenes/IconoUnirme.svg'
import {ReactComponent as IconoCaution} from '../imagenes/IconoCaution.svg'
import {ReactComponent as IconoEnviar} from '../imagenes/IconoEnviar.svg'
import {ReactComponent as IconoComentario} from '../imagenes/IconoComentario.svg'
import {ReactComponent as IconoPerfil} from '../imagenes/IconoPerfil.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Participacion, Participantes, Restricciones, Unirme, InputComentarios, ContenedorComentarios, HeaderComentarios, Comentarios, Comentario, Perfil, Nombre, TextoComentario} from '../elementos/comunidad'
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import formatearFecha from "../funciones/formatearFecha";

const Comunidad = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [comunidad] = useObtenerComunidad(id)

    console.log(comunidad)

    return (
    <>
        <Helmet>
            <title>Comunidad - U Community</title>
        </Helmet>
        <Header />
        {comunidad &&
            <Contenedor>
                <Regresar onClick={() => navigate("/")}>
                    <IconoIzquierda />
                    <p>Volver al Home</p>
                </Regresar>
                <ContenedorTitulo>
                    <Titulo className={comunidad.data().categoria}>{comunidad.data().titulo}</Titulo>
                    <ContenedorInfo>
                        <Categoria>{comunidad.data().categoria}</Categoria>
                        <Fecha><IconoCalendario />{formatearFecha(comunidad.data().fechaMaxima)}<IconoCalendario /></Fecha>
                    </ContenedorInfo>
                </ContenedorTitulo>
                <Objetivo>{comunidad.data().objetivo}</Objetivo>
                <Participacion>
                    <Participantes><IconoPersonas />Participantes: {comunidad.data().participantes.length}</Participantes>
                    {comunidad.data().maxPersonas !== "0.00" && 
                        <Restricciones>Maximo participantes: {parseFloat(comunidad.data().maxPersonas).toFixed(0)}<IconoCaution /></Restricciones>
                    }
                    <Unirme>Unirme + <IconoUnirme /></Unirme>
                </Participacion>
                <InputComentarios>
                    <input 
                        placeholder="Escribe tu comentario"
                    /><IconoEnviar />
                </InputComentarios>
                <ContenedorComentarios>
                    <HeaderComentarios><IconoComentario />Comentarios...</HeaderComentarios>
                    <Comentarios>
                        <Comentario>
                            <Perfil><IconoPerfil /></Perfil>
                            <TextoComentario><Nombre>Pepito Perez</Nombre>Genial!! asi no perdere el semestre</TextoComentario>
                        </Comentario>
                        <Comentario>
                            <Perfil><IconoPerfil /></Perfil>
                            <TextoComentario><Nombre>Pepito Perez</Nombre>Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre Genial!! asi no perdere el semestre</TextoComentario>
                        </Comentario>
                    </Comentarios>
                </ContenedorComentarios>
            </Contenedor>
        }
    </>
    );
}
 
export default Comunidad;