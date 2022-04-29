import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

const useObtenerComentarios = (idComunidad) => {
    const [comentarios, cambiarComentarios] = useState([])

    useEffect(() => {
        const consulta = query(
            collection(db, "comentarios"),
            where("comunidadId", "==", idComunidad),
            orderBy('fecha', 'desc')
        )

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            cambiarComentarios(snapshot.docs.map((comentario) => {
                return {...comentario.data(), id: comentario.id}
            }))
        }, (error) => {
            console.log(error)
        });

        return unsuscribe
    }, [idComunidad])

    return [comentarios];
}
 
export default useObtenerComentarios;