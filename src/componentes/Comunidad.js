import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoPersonas} from '../imagenes/IconoPersonas.svg'
import {ReactComponent as IconoUnirme} from '../imagenes/IconoUnirme.svg'
import {ReactComponent as IconoCaution} from '../imagenes/IconoCaution.svg'
import {ReactComponent as IconoEnviar} from '../imagenes/IconoEnviar.svg'
import {ReactComponent as IconoComentario} from '../imagenes/IconoComentario.svg'
import {ReactComponent as IconoPerfil} from '../imagenes/IconoPerfil.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Contenedor, Regresar, ContenedorTitulo, Titulo, ContenedorInfo, Categoria, Fecha, Objetivo, Participacion, Participantes, Restricciones, Unirme, InputComentarios, ContenedorComentarios, HeaderComentarios, Comentarios, Comentario, Perfil, Nombre, TextoComentario} from '../elementos/comunidad'

const Comunidad = () => {
    const navigate = useNavigate();

    return (
    <>
        <Header />
        
        <Contenedor>
            <Regresar onClick={() => navigate("/")}>
                <IconoIzquierda />
                <p>Volver al Home</p>
            </Regresar>
            <ContenedorTitulo>
                <Titulo>Taller parcial geometria</Titulo>
                <ContenedorInfo>
                    <Categoria>Estudio</Categoria>
                    <Fecha><IconoCalendario />01/03/2022<IconoCalendario /></Fecha>
                </ContenedorInfo>
            </ContenedorTitulo>
            <Objetivo>Contratar un profesor para la explicacion y resolución del taller de geometria</Objetivo>
            <Participacion>
                <Participantes><IconoPersonas />Participantes: 5</Participantes>
                <Restricciones>Maximo participantes: 20<IconoCaution /></Restricciones>
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
    </>
    );
}
 
export default Comunidad;