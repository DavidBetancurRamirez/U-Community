import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarComunidad = ({comentario, fecha, comunidadId, uidUsuario, nombreUsuario}) => {

    return addDoc(collection(db, "comentarios"), {
        comentario: comentario,
        fecha: fecha,
        comunidadId: comunidadId,
        uidUsuario: uidUsuario,
        nombreUsuario: nombreUsuario
    });
}
 
export default agregarComunidad;