import styled from "styled-components";
import theme from "../theme";

const Contenedor = styled.div`
    width: 1200px;
    margin: 100px auto;
    display: flex;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;

    @media (max-width: 1000px) {
        flex-direction: column;
        width: 80%;
        margin: 5px auto;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;
const ContGoogle = styled.div`
    background-color: ${theme.azulU};
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 400px;   
    border-radius: 10px 0 0 10px; 
    border-right: 1px dashed #fff;
    font-weight: 400;

    p {
        color: #fff;
        font-size: 16px;
    }

    span {
        display: none;
    }

    @media (max-width: 1000px) {
        border-radius: 10px 10px 0 0; 
        border-right: none;
        height: 50px;
        width: 100%;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        cursor: pointer;
        transition: 1s ease all;
        
        &:hover {
            background-color: ${theme.grisOscuro};
        }

        p {
            font-size: 14px;
            color: #000;
        }

        span {
            display: inline-block;
            font-size: 14px;
            color: #000;
        }
    }
`;
const BotonSesionGoogle = styled.button`
    padding: 5px;
    font-size: 18px;
    font-weight: 300;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 1s ease all;

    img {
        height: 20px;
        width: 20px;
        margin: 5px;
    }

    &:hover {
        background-color: ${theme.grisOscuro};
    }
    
    span {
        display: inline-block;
        font-weight: 300;
    }

    @media (max-width: 1000px) {
        &:hover {
            background-color: ${theme.grisOscuro};
        }
        
        span {
            display: none;
        }
    }
`;
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    background: linear-gradient(#4b6cb7, #182848);
    padding: 20px 40px;
    border-radius: 0 10px 10px 0;
    border-left: 1px dashed #fff;

    h3 {
        text-align: center;
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 30px;
        color: #fff;
    }

    div {
        position: relative;
        color: #fff;
    }

    @media (max-width: 1000px) {
        width: 100%;
        border: none;
    }
`;
const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;

    &:focus ~ label, &:valid ~ label {
        top: -20px;
        left: 0;
        color: #ffff00;
        font-size: 12px;
    } 
`;
const Label = styled.label`
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
`;
const BotonInicio = styled.button`
    width: 200px;
    background-color: transparent;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    cursor: pointer;
    margin: auto;
    transition: 1s all;

    &:hover  {
        background-color: ${theme.azulU};
        opacity: 0.8;
        border: 1px solid #fff;
        transform: scale(1.2);
    }
`;
const FooterForm = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    a {
        color: #fff;
        font-size: 14px;
        transition: 0.5s;
        width: 170px;

        &:hover {
            text-decoration: none;
            color: #000;
        }
    }   
    
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;

        a {
            margin-bottom: 5px;
            width: 100%;
            text-align: center;
        }
    }
`;
const SinRegistrar = styled.p`
    color: #c4c4c4;
    font-size: 14px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 1000px) {
        margin-bottom: 10px;
    }
`;
const SinCuenta = styled.div`
    display: flex;
    align-items: center;

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 300;
        margin-right: 10px;
    }

    button {
        background-color: transparent;
        color: #fff;
        font-size: 14px;
        font-weight: 300;
        padding: 2px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 20px;
    } 
`;
const ContenedorR = styled.div`
    width: 500px;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;

    @media (max-width: 650px) {
        margin: 10px auto;
        width: 100%;
    }
`;
const ContGoogleR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;   
    background-color: #fff;
    border-radius: 10px 10px 0 0; 
    cursor: pointer;
    transition: 1s ease all;

    &:hover {
        background-color: ${theme.grisOscuro};
    }
`;
const BotonSesionGoogleR = styled.button`
    padding: 5px;
    font-size: 18px;
    font-weight: 300;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: baseline;
    cursor: pointer;

    p {
        color: #000;
        font-weight: 300;
        font-size: 16px;
        margin-bottom: 5px;
    }

    img {
        height: 18px;
        width: 18px;
        margin: 5px;
    }
`;
const FormularioR = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    background: linear-gradient(#4b6cb7, #182848);
    padding: 40px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;

    h3 {
        text-align: center;
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 30px;
        color: #fff;
    }

    div {
        position: relative;
        color: #fff;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;
const Boton = styled.a`
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 30px;
    letter-spacing: 4px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #000;
        border-radius: 5px;
        box-shadow: 0 0 5px #fff,
                    0 0 25px #fff,
                    0 0 50px #fff,
                    0 0 100px #fff;
    }

    span {
        position: absolute;
        display: block;
    }

    span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #fff);
        animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }
        50%,100% {
            left: 100%;
        }
    }

    span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #fff);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }
        50%,100% {
            top: 100%;
        }
    }

    span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #fff);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }
        50%,100% {
            right: 100%;
        }
    }

    span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #fff);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
    }

    @keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }
    50%,100% {
        bottom: 100%;
    }
    }
`;
const FooterFormR = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 300;
    }

    div {
        color: #fff;
        font-size: 15px;
        font-weight: 300;
        border-bottom: 1px solid #fff;
        padding: 5px;
        margin-top: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: 1s all;

        svg {
            height: 18px;
            width: 18px;
            margin-right: 5px;
            fill: currentColor !important;
            color: #fff;
            opacity: 0.8;
        }

        &:hover {
            opacity: 0.8;
            border-bottom: 1px solid #000;
        }
    }   
    
    @media (max-width: 470px) {
        flex-direction: column;

        p {
            display: none;
        }
    }
`;
const SinRegistrarR = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #c4c4c4;
    margin: 20px auto;
    margin-bottom: 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export {Contenedor, ContGoogle, BotonSesionGoogle, Formulario, Input, Label, BotonInicio, FooterForm, SinRegistrar, SinCuenta, ContenedorR, ContGoogleR, BotonSesionGoogleR, FormularioR, Boton, FooterFormR, SinRegistrarR}