import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarComunidad = ({titulo, categoria, objetivo, fechaMaxima, fechaCreacion, maxPersonas, uidUsuario}) => {
    const participantes = [uidUsuario];

    return addDoc(collection(db, "comunidades"), {
        titulo: titulo,
        categoria: categoria,
        objetivo: objetivo,
        fechaMaxima: fechaMaxima,
        fechaCreacion: fechaCreacion,
        maxPersonas: maxPersonas,
        participantes: participantes,
        uidUsuario: uidUsuario
    });
}
 
export default agregarComunidad;