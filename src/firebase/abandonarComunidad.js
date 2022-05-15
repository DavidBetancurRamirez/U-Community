import {db} from './firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'

const abandonarComunidad = async (comunidad, idUsuario, {cambiarEstadoAlerta, cambiarAlerta, navigate}) => {    
    let nuevosParticipantes = comunidad.data().participantes.filter((item) => item.uidUsuario !== idUsuario)

    const documento = doc(db, "comunidades", comunidad.id)
    
    try {
        await updateDoc(documento, {
            participantes: nuevosParticipantes
        })
        window.location.reload(false);
        cambiarEstadoAlerta(true)
        cambiarAlerta({ tipo: "exito", mensaje: "Se a abandonado la comunidad" })
    } catch (error) {
        console.log(error)
    };
}
 
export default abandonarComunidad;