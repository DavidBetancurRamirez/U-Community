import {db} from './firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'

const agregarComunidad = async ({id, titulo, categoria, objetivo, fechaMaxima, maxPersonas}) => {
    const documento = doc(db, "comunidades", id)
    
    return await updateDoc(documento, {
        titulo: titulo,
        categoria: categoria,
        objetivo: objetivo,
        fechaMaxima: fechaMaxima,
        maxPersonas: maxPersonas
    })
}
 
export default agregarComunidad;