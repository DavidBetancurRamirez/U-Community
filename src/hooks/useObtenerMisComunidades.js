import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

const useObtenerMisComunidades = () => {
    const [misComunidades, cambiarMisComunidades] = useState([])

    const {user} = useAuth();

    useEffect(() => {
        if(user) {
            const consulta = query(
                collection(db, "comunidades"),
                where("uidUsuario", "==", user.uid),
                orderBy('fechaCreacion', 'desc')
            )

            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                cambiarMisComunidades(snapshot.docs.map((comunidad) => {
                    return {...comunidad.data(), id: comunidad.id}
                }))
            }, (error) => {console.log(error)})

            return unsuscribe
        }
    }, [user])
    return [misComunidades];
}
 
export default useObtenerMisComunidades;