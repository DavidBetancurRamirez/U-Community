import {db} from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const agregarValoracion = ({experiencia, categoria, estrellas}) => {

    return addDoc(collection(db, "valoraciones"), {
        experiencia: experiencia,
        categoria: categoria, 
        estrellas: Number(estrellas)
    });
}
 
export default agregarValoracion;