import React from "react";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useObtenerComunidad from "../hooks/useObtenerComunidad";
import Formulario from "./Formulario";

const EditarGasto = ({cambiarEstadoAlerta, cambiarAlerta}) => {
    const {id} = useParams();
    const [comunidad] = useObtenerComunidad(id)

    return (
        <>
            <Helmet>
                <title>Editar comunidad</title>
            </Helmet>

            <Formulario cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} comunidad={comunidad} />
        </>
    );
}
 
export default EditarGasto;