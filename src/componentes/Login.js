import { useState } from "react"
import { Helmet } from 'react-helmet';
import { useAuth } from "../contextos/authContext";
import { useNavigate } from "react-router-dom";
import LogoGoogle from '../imagenes/LogoGoogle.svg.png'
import {Contenedor, ContGoogle, BotonSesionGoogle, Formulario, Input, Label, Boton, FooterForm, SinRegistrar, SinCuenta} from "../elementos/inicioRegistro"

const Login = ({cambiarEstadoAlerta, cambiarAlerta}) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPasword } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch(error) {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: error.message })
        }
    };

    const handleGoogleSignin = async() =>{
        try{
            await loginWithGoogle()
            navigate('/');
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Inicio de sesión con Google exitoso" })            
        }catch (error) {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: error.message })
        }
    };

    const handleResetPasword = async() => {
        if (!user.email){
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Correo no registrado" })
        }
        
        try {
            await resetPasword(user.email)
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Hemos enviado un correo a su email para que pueda restablecer su contraseña" })
        } catch (error) {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: error.message })
        }
    }

    return (
    <> 
        <Helmet>
            <title>Iniciar Sesion</title>
        </Helmet>   

        <Contenedor>
            <ContGoogle>
                <p>Inicia o registrate con</p>
                <BotonSesionGoogle onClick={handleGoogleSignin} title="Iniciar sesion con Google">                    
                    <img src={LogoGoogle} alt="Logo google" />Sesion de Google
                </BotonSesionGoogle>                
            </ContGoogle>

            <Formulario onSubmit={handleSubmit}>
                <h3>Iniciar Sesión</h3>
                <div>
                    <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required=" "
                    />
                    <Label>Email</Label>
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        id="password" 
                        onChange={handleChange}
                        required=" "
                    />
                    <Label>Password</Label>
                </div>

                <Boton onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar Sesión
                </Boton>                
                
                <FooterForm>         
                    <a href="#!" onClick={handleResetPasword}>¿Olvidaste la contraseña?</a>
                    <SinRegistrar onClick={() => navigate("/")}>Acceder sin iniciar sesión</SinRegistrar>
                    <SinCuenta>
                        <p>¿No tienes cuenta?</p>
                        <button type="button" onClick={() => navigate("/register")}>Crear cuenta</button>
                    </SinCuenta>
                </FooterForm>  
            </Formulario>                            
        </Contenedor>        
    </>
    );
}

export default Login