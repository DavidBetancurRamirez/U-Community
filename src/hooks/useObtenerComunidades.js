import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";

const useObtenerComunidades = () => {
    const [comunidades, cambiarComunidades] = useState([])

    useEffect(() => {
        const consulta = query(
            collection(db, "comunidades"),
            orderBy('fechaCreacion', 'desc'),
            limit(10)
        )

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            cambiarComunidades(snapshot.docs.map((comunidad) => {
                return {...comunidad.data(), id: comunidad.id}
            }))
        }, (error) => {
            console.log(error)
        });

        return unsuscribe
    }, [])
    return [comunidades];
}
 
export default useObtenerComunidades;