import React, {useState} from "react";

// Crear contexto, estado global
const ContextoAlerta = React.createContext()


const ProveedorAleerta = ({children}) => {
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [alerta, cambiarAlerta] = useState("")

    const cambiarVisibleAlerta = () =>{
        cambiarEstadoAlerta(true)

        let tiempo

        if(cambiarVisibleAlerta === true){
            tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false)
            }, 4000)
        }

        return(() => clearTimeout(tiempo))
    }

    const cambiarAlertaComCreada = () =>{
        cambiarEstadoAlerta(true)
        cambiarAlerta({
            tipo: "exito",
            mensaje: "Su comunidad a sido creado con exito"
        })
    }

    return (
        <ContextoAlerta.Provider 
            value={ 
                {alerta, 
                estadoAlerta, 
                cambiarVisibleAlerta, 
                cambiarAlertaComCreada} 
            }>
            {children}
        </ContextoAlerta.Provider>        
    );
}
 
export { ContextoAlerta, ProveedorAleerta};