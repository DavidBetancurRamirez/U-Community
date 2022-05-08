import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import SelectCategoria from "../elementos/SelectCategoria";
import {ReactComponent as IconoCalendario} from '../imagenes/IconoCalendario.svg'
import {ReactComponent as IconoIzquierda} from '../imagenes/IconoIzquierda.svg'
import Dates from '../elementos/Dates'
import getUnixTime from 'date-fns/getUnixTime'
import {Contenedor, CreaComunidad, Form, TitCat, Titulo, Categoria, Enunciado, InputTitulo, Objetivo, InputObjetivo, Ajustes, Fecha, Personas, InputPersonas, Ilimitado, Regresar, Boton, Botones} from '../estilos/formulario'
import agregarComunidad from "../firebase/agregarComunidad";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { useAuth } from "../contextos/authContext";
import editarComunidad from "../firebase/editarComunidad"
import fromUnixTime from "date-fns/fromUnixTime";
import startOfDay from "date-fns/startOfDay";

const Formulario = ({cambiarEstadoAlerta, cambiarAlerta, comunidad}) => {
  const [inputTitulo, cambiarInputTitulo] = useState("")
  const [categoria, cambiarCategoria] = useState("Estudio")
  const [fecha, cambiarFecha] = useState(new Date());
  const [inputObjetivo, cambiarInputObjetivo] = useState("")
  const [maximoPersonas, cambiarMaxPersonas] = useState(0)
  const [ilimitado, cambiarIlimitado] = useState(true)
  const [nombreUsuario, cambiarNombreUsuario] = useState("")

  const {user} = useAuth()

  const navigate = useNavigate();

  let caracteresTitulo = inputTitulo.length

  useEffect(() => {
    if (user) {      
      if (comunidad) {
        if (comunidad.data().uidUsuario === user.uid) {
          cambiarInputTitulo(comunidad.data().titulo)
          cambiarCategoria(comunidad.data().categoria)
          cambiarFecha(fromUnixTime(comunidad.data().fechaMaxima))
          cambiarInputObjetivo(comunidad.data().objetivo)
          cambiarMaxPersonas(comunidad.data().maxPersonas)
          cambiarIlimitado(false)
        } else {
          navigate("/")
        }
      }

      let correo = user.email;
      let nombre = user.displayName;

      if (nombre === null) {
          cambiarNombreUsuario(correo)
      } else {
          cambiarNombreUsuario(nombre)
      }
    }
}, [user, comunidad, navigate])
  
  const handleChange = (e) => {
    if(e.target.name === "titulo"){
      cambiarInputTitulo(e.target.value)
    } else if(e.target.name === "objetivo"){
      cambiarInputObjetivo(e.target.value)
    } else if(e.target.name === "maxPersonas"){
      cambiarMaxPersonas(e.target.value)
    } else if (e.target.name === "ilimitado") {
      cambiarIlimitado(!ilimitado)       
      cambiarMaxPersonas(0) 
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let fechaAhora = new Date();
    let fechaHoy = getUnixTime(startOfDay(new Date()));


    if (inputTitulo.length > 4 && inputObjetivo.length > 0 && inputObjetivo.length <= 1000) {
      if (fechaHoy < getUnixTime(fecha)) {
        if (comunidad) {
          try {
            await editarComunidad({
              id: comunidad.id,
              titulo: inputTitulo,
              categoria: categoria,
              objetivo: inputObjetivo,
              fechaMaxima: getUnixTime(fecha),
              maxPersonas: maximoPersonas
            })
      
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Su comunidad a sido creado con exito" })
      
            navigate(`/comunidad/${comunidad.id}`)
      
          } catch (error) {  
            console.log(error)
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "No a sido posible crear su comunidad, porfavor intentelo mas tarde" })
          }

        } else {
          try {
            await agregarComunidad({
              titulo: inputTitulo,
              categoria: categoria,
              objetivo: inputObjetivo,
              fechaMaxima: getUnixTime(fecha),
              fechaCreacion: getUnixTime(fechaAhora),
              maxPersonas: maximoPersonas,
              uidUsuario: user.uid,
              nombreUsuario: nombreUsuario
            })
      
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "exito", mensaje: "Su comunidad a sido creado con exito" })
      
            cambiarInputTitulo("")
            cambiarCategoria("Estudio")
            cambiarFecha(new Date())
            cambiarInputObjetivo("")
            cambiarMaxPersonas(0)
            cambiarIlimitado(true)
      
          } catch (error) {  
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: "error", mensaje: "No a sido posible crear su comunidad, porfavor intentelo mas tarde" })
          }
        }

      } else {
        cambiarEstadoAlerta(true)
        cambiarAlerta({ tipo: "error", mensaje: "La fecha limite de la comunidad no puede ser anterior al dia de hoy" })
      }

    } else {
      cambiarEstadoAlerta(true)
      cambiarAlerta({ tipo: "error", mensaje: "Titulo y/o objetivo sin información, ó el objetivo sobrepasa 1000 caracteres" })
    }

  }

  const regresar = () => {
    if (comunidad) {
      navigate(`/comunidad/${comunidad.id}`)
    } else {
      navigate("/")
    }
  }

  return (
    <>
      <Helmet>
        <title>Formulario U Community</title>
      </Helmet>

      <Header cambiarAlerta={cambiarAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />

      <Contenedor>
        <Regresar onClick={() => regresar()} className="arriba">
          <IconoIzquierda />
          Regresar
        </Regresar>

        <CreaComunidad>Crea tu propia comunidad</CreaComunidad>

        <Form onSubmit={handleSubmit} categoria="categoria">

          <TitCat>
            <Titulo>
              <Enunciado>Titulo <p>*</p></Enunciado>
              <InputTitulo 
                required
                name = "titulo"
                type="text"
                placeholder="Escriba un titulo breve y descriptivo para su comunidad"
                value={inputTitulo}
                onChange={handleChange}
                maxLength="35"
                minLength="4"
              />
              {caracteresTitulo === 35 ? <div><p>{caracteresTitulo}/35</p></div>
              : <div>{caracteresTitulo}/35</div> }
            </Titulo>

            <Categoria>
              <Enunciado>Categoria <p>*</p></Enunciado>
              <SelectCategoria categoria={categoria} cambiarCategoria={cambiarCategoria} />
            </Categoria>
          </TitCat>

          <Objetivo>
            <Enunciado>Objetivo <p>*</p></Enunciado>
            <InputObjetivo 
              required 
              name = "objetivo"
              type="text"
              placeholder="Escriba aqui el objetivo de su comunidad"
              value={inputObjetivo}
              onChange={handleChange}
              maxLength="1000"
            />
          </Objetivo>

          <Ajustes>
            <Fecha>
              <Enunciado>Fecha limite <p>*</p></Enunciado> <IconoCalendario />
              <Dates fecha={fecha} cambiarFecha={cambiarFecha} />
            </Fecha>

            <Personas>
              <Enunciado>Max. personas</Enunciado>
              {ilimitado ?
                <InputPersonas
                  name="maxPersonas"
                  type="number" 
                  value={maximoPersonas}
                  onChange={handleChange}
                  min="0"
                  disabled
                />  
              :
                <InputPersonas
                  name="maxPersonas"
                  type="number" 
                  value={maximoPersonas}
                  onChange={handleChange}
                  min="0"
                />                
              }
              
              <Ilimitado 
                  name="ilimitado"
                  type="checkbox" 
                  checked={ilimitado}
                  onChange={handleChange}
              />                
              <Enunciado>Ilimitado</Enunciado>
            </Personas>

          </Ajustes>

          <Botones>
            <div className="vacio"></div>
            <Boton type="submit">{comunidad ? "Editar Comunidad" : "Crear Comunidad"}</Boton>
            <Regresar onClick={() => regresar()} className="abajo">
              <IconoIzquierda />
              Regresar
            </Regresar>
          </Botones>

        </Form>

      </Contenedor>
    </>
  );
}
   
  export default Formulario;