import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

const useObtenerMisParticipaciones = () => {
    const [misParticipaciones, cambiarMisParticipaciones] = useState([])

    const {user} = useAuth();

    useEffect(() => {
        if(user) {
            const consulta = query(
                collection(db, "comunidades"),
                where("participantes", "array-contains", user.uid),
                orderBy('fechaCreacion', 'desc')
            )

            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                cambiarMisParticipaciones(snapshot.docs.map((comunidad) => {
                    return {...comunidad.data(), id: comunidad.id}
                }))
            }, (error) => {console.log(error)})

            return unsuscribe
        }
    }, [user])
    return [misParticipaciones];
}
 
export default useObtenerMisParticipaciones;