import React, { useState } from "react";
import {ReactComponent as IconoDown} from '../imagenes/IconoDown.svg'
import agregarValoracion from "../firebase/agregarValoracion";
import { useNavigate } from 'react-router-dom';
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import {Fondo, Contenedor, Rating, Formulario, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion, Boton, Regresar} from "../estilos/valoracion"

const Valoracion = ({cambiarEstadoAlerta, cambiarAlerta}) => {    
    const [mostrarSelect, cambiarMostrarSelect] = useState(false)
    const [categoria, cambiarCategoria] = useState("Excelente")
    const [experiencia, cambiarExperiencia] = useState("")
    const [estrellas, cambiarEstrellas] = useState(5)
    
    const navigate = useNavigate()

    const categorias = [
        {id: "Excelente", texto: "Excelente"},
        {id: "Sugerencia", texto: "Sugerencia"},
        {id: "Error", texto: "Error"}
    ]

    const handleClick = (e) => {
        cambiarCategoria(e.currentTarget.dataset.valor)
    }

    const handleChange = (e) => {
        cambiarEstrellas(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await agregarValoracion({
                experiencia: experiencia,
                categoria: categoria,
                estrellas: estrellas
            })

            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Muchas gracias por su valoracion" })

            cambiarExperiencia("Excelente")
            cambiarExperiencia("")
            
        } catch (error) {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "Hubo un error al intentar enviar su valoracion" })
        
            console.log(error)
        }
    }

    return (
        <Fondo>
            <Contenedor>
                <h3>Para nosotros es muy importante tu valoración</h3>

                <section>
                    <h4>Como calificarias U Community:</h4>
                    <Rating onChange={(e) => handleChange(e)}>
                        <input type="radio" name="rating" id="rs1" value="1" /><label htmlFor="rs1"></label>
                        <input type="radio" name="rating" id="rs2" value="2" /><label htmlFor="rs2"></label>
                        <input type="radio" name="rating" id="rs3" value="3" /><label htmlFor="rs3"></label>
                        <input type="radio" name="rating" id="rs4" value="4" /><label htmlFor="rs4"></label>
                        <input type="radio" name="rating" id="rs5" value="5" defaultChecked /><label htmlFor="rs5"></label>
                        <span className="rating-counter"></span>
                    </Rating>
                </section>

                <Formulario onSubmit={handleSubmit}>
                    <div className="tipo">
                        <h5>Comentanos como fue tu experiencia</h5>

                        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
                            <OpcionSeleccionada>{categoria}<IconoDown /></OpcionSeleccionada>

                            {mostrarSelect && 
                                <Opciones>
                                    {categorias.map((categoria) => {
                                        return <Opcion key={categoria.id} onClick={handleClick} data-valor={categoria.id}>
                                                    {categoria.texto}
                                                </Opcion>
                                    })}
                                </Opciones>
                            }
                        </ContenedorSelect>
                    </div>

                    <textarea
                        required 
                        name = "experiencia"
                        type="text"
                        placeholder="Cuentanos como fue tu experiencia con U Community"
                        value={experiencia}
                        onChange={(e) => cambiarExperiencia(e.target.value)}
                    />

                    <div className="botones">
                        <Boton type="submit">Enviar</Boton>
                        <Regresar onClick={() => navigate("/")}>
                            <IconoIzquierda />
                            Regresar
                        </Regresar>
                    </div>
                </Formulario>
            </Contenedor>
        </Fondo>
    );
}
 
export default Valoracion;