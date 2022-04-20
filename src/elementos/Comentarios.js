import React from "react";
import {InputComentarios, Icono, ContenedorComentarios, HeaderComentarios, Coments, Comentario, Perfil, Nombre, TextoComentario} from "../estilos/comunidad";
import {ReactComponent as IconoComentario} from '../imagenes/IconoComentario.svg'
import {ReactComponent as IconoPerfil} from '../imagenes/IconoPerfil.svg'

const Comentarios = () => {
    return (
    <>
        <InputComentarios>
            <input 
                placeholder="Escribe tu comentario"
            />
            <lord-icon src="https://cdn.lordicon.com/gzmgulpl.json" trigger="hover" style={Icono} />
        </InputComentarios>

        <ContenedorComentarios>
            <HeaderComentarios><IconoComentario />Comentarios...</HeaderComentarios>
        
        {/* preguntar si hay comentarios */}
            <Coments>
                {/* aqui el .map */}
                <Comentario>
                    <Perfil><IconoPerfil /></Perfil>
                    <TextoComentario><Nombre>Pepito Perez</Nombre>Genial!! asi no perdere el semestre</TextoComentario>
                </Comentario>
            </Coments>
            
        </ContenedorComentarios>
    </>
    );
}
 
export default Comentarios;