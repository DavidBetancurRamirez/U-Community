import {db} from './firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'

const agregarParticipante = async ({comunidadId, uidUsuario, participantes}) => {
    participantes.push(uidUsuario)

    const documento = doc(db, "comunidades", comunidadId)
    return await updateDoc(documento, {
        participantes: participantes
    })
}
 
export default agregarParticipante;