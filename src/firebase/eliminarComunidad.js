import { db } from "./firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore"

const eliminarComunidad = async (id, {cambiarEstadoAlerta, cambiarAlerta, navigate}) => {
    try {
        await deleteDoc(doc(db, "comunidades", id))
        navigate("/");
        cambiarEstadoAlerta(true)
        cambiarAlerta({ tipo: "exito", mensaje: "Comunidad eliminada" })
    } catch (error) {
        cambiarEstadoAlerta(true)
        cambiarAlerta({ tipo: "error", mensaje: "Hubo un problema al intentar eliminar su comunidad" })
    }
}

export default eliminarComunidad