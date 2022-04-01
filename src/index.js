import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Logo from './imagenes/Logo.png';
import Error404 from './componentes/Error404';
import App from './App';
import Formulario from './componentes/Formulario';
import Comunidad from './componentes/Comunidad';
import { AuthProvider } from './contextos/authContext';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Alerta from './elementos/Alerta';
import { ProtectedRoutes } from './elementos/ProtectRoutes';

const Index = () => {
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
  const [alerta, cambiarAlerta] = useState("")

  return ( 
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Logo} />
      </Helmet>      

      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<App cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} /> } />
            
            <Route path="/formulario" element={
              <ProtectedRoutes>
                <Formulario cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />
              </ProtectedRoutes>
            } />

            <Route path="/comunidad" element={
              <ProtectedRoutes>
                <Comunidad cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />
              </ProtectedRoutes>
            } />

            <Route path = "/login" element = {<Login cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />} />
            <Route path = "/register" element = {<Register cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />} />
          </Routes>

          <Alerta 
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
          />

        </AuthProvider>        
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));