import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useObtenerComunidad = (id) => {
    const [comunidad, establecerComunidad] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const obtenerComunidad = async () => {
            const documento = await getDoc(doc(db, "comunidades", id));

            if (documento.exists) {
                establecerComunidad(documento)
            } else {
                navigate("/")
            }
        }

        obtenerComunidad()
    }, [navigate, id]);

    return [comunidad];
}
 
export default useObtenerComunidad;