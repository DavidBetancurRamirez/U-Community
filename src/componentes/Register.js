import { useState } from "react"
import { Helmet } from 'react-helmet';
import { useAuth } from "../contextos/authContext";
import { useNavigate } from "react-router-dom";
import LogoGoogle from '../imagenes/LogoGoogle.svg.png'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {ContenedorR, ContGoogleR, BotonSesionGoogleR, FormularioR, Input, Label, Boton, FooterFormR, SinRegistrarR} from "../elementos/inicioRegistro"

const Register = ({cambiarEstadoAlerta, cambiarAlerta}) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { loginWithGoogle, signup } = useAuth()
    const navigate = useNavigate()

    const handleGoogleSignin = async() =>{
        try{
            console.log("Hola")
            await loginWithGoogle()
            console.log("Hola")
            navigate('/');
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Usuario creado con exito" })            
        }catch (error) {
            console.log("o o")
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: error.message })
        }
    };

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signup(user.email, user.password);
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Usuario creado con exito" })
            navigate('/');
        } catch(error) {           
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: error.message })
        }
    };


    return (
        <>
            <Helmet>
                <title>Registrarse</title>
            </Helmet>  

            <ContenedorR>
                <ContGoogleR onClick={handleGoogleSignin} title="Registrarse con Google">
                    <BotonSesionGoogleR>
                        <img src={LogoGoogle} alt="Logo google" />Registrarse con Google
                    </BotonSesionGoogleR>
                </ContGoogleR>            

                <FormularioR>
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
                        Registrarse
                    </Boton>

                    <FooterFormR>
                        <p>¿Ya tienes una cuenta?</p>
                        <div onClick={() => navigate("/login")}><IconoIzquierda />Regresar al inicio de sesión</div>
                    </FooterFormR>  

                    <SinRegistrarR onClick={() => navigate("/")}>Acceder sin iniciar sesión</SinRegistrarR>
                </FormularioR>
            </ContenedorR>   
        </>
    );
}

export default Register