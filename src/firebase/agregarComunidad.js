import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarComunidad = ({titulo, categoria, objetivo, fechaMaxima, fechaCreacion, maxPersonas, uidUsuario, nombreUsuario}) => {
    const participantes = [{
        uidUsuario: uidUsuario,
        nombreUsuario: nombreUsuario
    }];

    return addDoc(collection(db, "comunidades"), {
        titulo: titulo,
        categoria: categoria,
        objetivo: objetivo,
        fechaMaxima: fechaMaxima,
        fechaCreacion: fechaCreacion,
        maxPersonas: maxPersonas,
        participantes: participantes,
        uidUsuario: uidUsuario,
        nombreUsuario: nombreUsuario
    });
}
 
export default agregarComunidad;