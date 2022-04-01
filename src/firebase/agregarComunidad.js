import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarComunidad = ({titulo, categoria, objetivo, fecha, maxPersonas, uidUsuario}) => {
    const comentarios = [];

    return addDoc(collection(db, "comunidades"), {
        titulo: titulo,
        categoria: categoria,
        objetivo: objetivo,
        fecha: fecha,
        maxPersonas: maxPersonas,
        comentarios: comentarios,
        uidUsuario: uidUsuario
    });
}
 
export default agregarComunidad;