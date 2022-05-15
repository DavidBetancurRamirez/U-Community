import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import startOfDay from "date-fns/startOfDay";
import getUnixTime from 'date-fns/getUnixTime';

const useObtenerComunidades = () => {
    const [comunidades, cambiarComunidades] = useState([])
    
    let fechaHoy = getUnixTime(startOfDay(new Date()));

    useEffect(() => {
        const consulta = query(
            collection(db, "comunidades"),
            where('fechaMaxima', '>=', fechaHoy)
        )

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            cambiarComunidades(snapshot.docs.map((comunidad) => {
                return {...comunidad.data(), id: comunidad.id}
            }))
        }, (error) => {
            console.log(error)
        });

        return unsuscribe
    }, [fechaHoy])
    
    return [comunidades];
}
 
export default useObtenerComunidades;