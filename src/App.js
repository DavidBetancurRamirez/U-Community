import React, {useEffect} from "react";
import { Helmet } from 'react-helmet';
import Header from './componentes/Header';
import Aside from "./componentes/Aside";
import Comunidades from "./componentes/Comunidades";

const App = ({cambiarEstadoAlerta, cambiarAlerta}) => {

  useEffect(() => {
    cambiarEstadoAlerta(true)
    cambiarAlerta({ tipo: "exito", mensaje: "Bienvenido a U community" })
  }, [cambiarEstadoAlerta, cambiarAlerta])

  return (
    <>
      <Helmet>
        <title>U Community</title>
      </Helmet>

      <Header cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

      <Aside />
      <Comunidades />
    </>
  );
}
 
export default App;