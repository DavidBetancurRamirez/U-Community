import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarComunidad = ({titulo, categoria, objetivo, fechaMaxima, fechaCreacion, maxPersonas, uidUsuario}) => {
    const comentarios = [];
    const participantes = [{
        usuario: uidUsuario
    }];

    return addDoc(collection(db, "comunidades"), {
        titulo: titulo,
        categoria: categoria,
        objetivo: objetivo,
        fechaMaxima: fechaMaxima,
        fechaCreacion: fechaCreacion,
        maxPersonas: maxPersonas,
        comentarios: comentarios,
        participantes: participantes,
        uidUsuario: uidUsuario
    });
}
 
export default agregarComunidad;