import {useEffect, useState} from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/authContext";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const useObtenerMisParticipaciones = () => {
    const [comunidades, cambiarComunidades] = useState([])
    const [MisParticipaciones, cambiarMisParticipaciones] = useState([])

    const {user} = useAuth();

    useEffect(() => {
        if(user) {
            const consulta = query(
                collection(db, "comunidades"),
                orderBy('fechaCreacion', 'desc')
            )

            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                cambiarComunidades(snapshot.docs.map((comunidad) => {
                    return {...comunidad.data(), id: comunidad.id}
                }))
            }, (error) => {console.log(error)})

            return unsuscribe
        }
    }, [user])

    useEffect(() => {
        let arreglo = [];

        if (user) {
            if (comunidades) {
                for (let i=0;i<comunidades.length;i++) {
                    for (let j=0;j<comunidades[i].participantes.length;j++) {
                        if (comunidades[i].participantes[j].uidUsuario === user.uid) {
                            arreglo.push(comunidades[i])
                        }
                    }
                }
            }
        }

        cambiarMisParticipaciones(arreglo)
    }, [comunidades, user])
    
    return [MisParticipaciones];
}
 
export default useObtenerMisParticipaciones;