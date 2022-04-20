import styled from "styled-components";
import theme from "../theme";

const Contenedor = styled.div`
  width: 1000px;
  margin: 30px auto;

  input, textarea {
    background-color: #fff;
    opacity: .8;
    border-radius: 10px;
    border: 1px solid #fff;
    outline: none;
    padding: 5px;
  }

  @media (max-width: 1050px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const CreaComunidad = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 25px;

  @media (max-width: 1050px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitCat = styled.div`
  display: flex;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 30px;
  justify-content: space-between;

  @media (max-width: 1050px) {
    margin-top: 30px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Titulo = styled.div`
  flex-direction: column;

  div {
    text-align: right;
    margin-top: -15px;
    margin-right: 6px;
    font-size: 10px;
    font-weight: bold;

    p {
      display: inline-block;
      color: red;
      font-size: 12px;
      margin-top: -20px;
    }
  }
`;

const Categoria = styled.div`
  flex-direction: row;
  z-index: 5;

  @media (max-width: 750px) {
    margin-top: 20px;
  }
`;

const Enunciado = styled.h3`
  font-weight: 600;
  display: flex;

  p {
    color: red;
    margin-left: 3px;
    font-size: 14px;
  }
`;

const InputTitulo = styled.input`
  width: 500px;
  height: 30px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Objetivo = styled.div`
  width: 100%;  
`;

const InputObjetivo = styled.textarea`
  width: 100%;
  min-width: 1000px;
  max-width: 1000px;
  min-height: 150px;

  @media (max-width: 1050px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 150px;
  }
`;

const Ajustes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  svg {
    margin: 0px 15px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    svg {
      display: none;
    }
  }
`;

const Fecha = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  display: flex;

  div {
    border-radius: 0 20px 0 20px;
  }

  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const Personas = styled.div`
  flex-direction: row;
  margin-top: 30px;
  margin-right: 30px;
  display: flex;

  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;

const InputPersonas = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 25px;
  width: 80px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 14px;

  &:disabled {
    background-color: #ccc;
    border: 1px dashed #000;
  }
`;

const Ilimitado = styled.input`
  width: 15px;
  height: 15px;
  margin: auto 5px;
`;

const Botones = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .vacio {
    width: 100px;
    padding: 0px 5px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Boton = styled.button`
  background-color: ${theme.azulU};
  opacity: .8;
  border: none;
  border-radius: 10px;
  width: 500px;
  height: 35px;
  cursor: pointer;
  font-weight: 900;
  font-size: 20px;
  color: #fff;  
  transition: 0.5s ease-out all;

  @media (max-width: 520px) {
    width: 90%;
  }
`;

const Regresar = styled.div`
  background-color: #fff;
  font-weight: 300;
  font-size: 15px;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  transition: .5s ease all;
  padding-right: 5px;

  svg {
    height: 30px;
    width: 30px;
    margin-right: 5px;
    fill: currentColor !important;
    color: ${theme.azulU};
  }

  &:hover {
    background-color: ${theme.grisOscuro};
    opacity: .8;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export {Contenedor, CreaComunidad, Form, TitCat, Titulo, Categoria, Enunciado, InputTitulo, Objetivo, InputObjetivo, Ajustes, Fecha, Personas, InputPersonas, Ilimitado, Regresar, Botones, Boton}