import React, {useEffect, useState} from "react";
import {ReactComponent as IconoPersonas} from '../imagenes/IconoPersonas.svg'
import {ReactComponent as IconoUnirme} from '../imagenes/IconoUnirme.svg'
import {ReactComponent as IconoCaution} from '../imagenes/IconoCaution.svg'
import agregarParticipante from "../firebase/agregarParticipante";
import { useAuth } from "../contextos/authContext";
import {Participacion, Participantes, Restricciones, Unirme, ParteComunidad} from "../estilos/comunidad"
import { useNavigate } from 'react-router-dom';


const Actividad = ({comunidad, cambiarEstadoAlerta, cambiarAlerta}) => {
    const [suscrito, cambiarSuscrito] = useState(false)

    const navigate = useNavigate();
    const {user} = useAuth()

    const agregar = async () => {
        if (user) {
            if (comunidad.data().participantes.length >= comunidad.data().maxPersonas && comunidad.data().maxPersonas !== 0) {
                cambiarEstadoAlerta(true)
                cambiarAlerta({ tipo: "error", mensaje: "La comunidad a la que deseas unirte ya alcanzo su limite" })
            } else {
                try {
                    await agregarParticipante({
                        comunidadId: comunidad.id, 
                        uidUsuario: user.uid,
                        participantes: comunidad.data().participantes
                    })
                    window.location.reload(false);
                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "exito", mensaje: "Ahora eres parte de esta comunidad" })                    
                } catch (error) {
                    cambiarEstadoAlerta(true)
                    cambiarAlerta({ tipo: "error", mensaje: "Hubo un problema al unirse a la comunidad" })
                }
            }
        } else {
            navigate("/login");
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Para poder unirte a una comunidad es necesario iniciar sesión" })
        }
    }

    useEffect(() => {
        if(user) {
            for (let i=0;i<comunidad.data().participantes.length;i++) {
                if (comunidad.data().participantes[i] === user.uid) {
                    cambiarSuscrito(true)
                }
            }
        }
    }, [comunidad, user])

    return (
        <Participacion>
            <Participantes><IconoPersonas />Participantes: {comunidad.data().participantes.length}</Participantes>

            {comunidad.data().maxPersonas !== 0 && 
                <Restricciones>Maximo participantes: {comunidad.data().maxPersonas}<IconoCaution /></Restricciones>
            }

            {suscrito ?
                <ParteComunidad>Ya eres parte de esta comunidad<lord-icon src="https://cdn.lordicon.com/hjeefwhm.json" trigger="loop-on-hover" colors="primary:#09a4dd" state="hover" />
                </ParteComunidad>
            :
                <Unirme onClick={agregar}>Unirme + <IconoUnirme /></Unirme>                 
            }
        </Participacion>
    );
}
 
export default Actividad;