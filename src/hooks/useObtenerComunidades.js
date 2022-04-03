import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const useObtenerComunidades = () => {
    const [comunidades, cambiarComunidades] = useState([])

    useEffect(() => {
        const consulta = query(
            collection(db, "comunidades"),
            orderBy('fechaCreacion', 'desc')
        )

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            cambiarComunidades(snapshot.docs.map((comunidad) => {
                return {...comunidad.data(), id: comunidad.id}
        }))
        })

        return unsuscribe
    })
    return [comunidades];
}
 
export default useObtenerComunidades;