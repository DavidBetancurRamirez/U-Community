import React, { useEffect, useState } from "react";
import {InputComentarios, Icono, ContenedorComentarios, HeaderComentarios, Coments, Comentario, Perfil, Nombre, TextoComentario} from "../estilos/comunidad";
import {ReactComponent as IconoComentario} from '../imagenes/IconoComentario.svg'
import {ReactComponent as IconoPerfil} from '../imagenes/IconoPerfil.svg'
import agregarComunidad from "../firebase/agregarComentario";
import { useAuth } from "../contextos/authContext";
import getUnixTime from 'date-fns/getUnixTime'
import useObtenerComentarios from "../hooks/useObtenerComentarios";

const Comentarios = ({comunidad, cambiarEstadoAlerta, cambiarAlerta}) => {
    const [comentario, cambiarComentario] = useState("")
    const [nombreUsuario, cambiarNombreUsuario] = useState("")

    const [comentarios] = useObtenerComentarios(comunidad.id)
    const {user} = useAuth()

    useEffect(() => {
        if (user) {
            let correo = user.email;
            let nombre = user.displayName;
    
            if (nombre === null) {
                cambiarNombreUsuario(correo)
            } else {
                cambiarNombreUsuario(nombre)
            }
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (user) {
            if (comentario.length > 0) {
                try {
                    await agregarComunidad({
                        comentario: comentario,
                        fecha: getUnixTime(new Date()),
                        comunidadId: comunidad.id,
                        uidUsuario: user.uid,
                        nombreUsuario: nombreUsuario
                    })

                    cambiarComentario("")

                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "exito", mensaje: "Su comentario a sido enviado" })

                } catch (error) {
                    console.log(error)

                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "error", mensaje: "Hubo un problema al enviar su comentario" })
                }

            } else {
                cambiarEstadoAlerta(true)
                cambiarAlerta({ tipo: "error", mensaje: "Primero escriba un comentario" })
            }

        } else {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Debes iniciar sesion para poder comentar" })
        }
    }

    return (
    <>
        <InputComentarios onSubmit={handleSubmit}>
            <input 
                placeholder="Escribe tu comentario"
                value={comentario}
                onChange={(e) => cambiarComentario(e.target.value)}
            />
            <button type="submit">
                <lord-icon src="https://cdn.lordicon.com/gzmgulpl.json" trigger="hover" style={Icono} />
            </button>
        </InputComentarios>

        <ContenedorComentarios>
            <HeaderComentarios><IconoComentario />Comentarios...</HeaderComentarios>
        
            {comentarios &&
                <Coments>
                    {comentarios.map((comentario) => (
                        <Comentario key={comentario.id} id={comentario.id}>
                            <Perfil><IconoPerfil /></Perfil>
                            <TextoComentario><Nombre>{comentario.nombreUsuario}</Nombre>{comentario.comentario}</TextoComentario>
                        </Comentario>
                    ))}
                </Coments>
            }
            
        </ContenedorComentarios>
    </>
    );
}
 
export default Comentarios;