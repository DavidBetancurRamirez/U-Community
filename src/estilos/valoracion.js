import styled from "styled-components";
import theme from "../theme";

const Fondo = styled.div`
    background-color: #ccc;
    position: absolute;
    width: 100%;
    height: 100%;
`;
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 50px auto;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;    
    box-shadow: 2px 8px 8px 5px rgba(255,255,255,0.3);

    h3 {
        font-weight: 900;
        font-size: 20px;
        text-align: center;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 550px;
        margin: 30px auto;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            margin-top: 20px;

            h4 {
                margin-bottom: 10px;
            }
        }
    }

    @media (max-width: 1050px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: 30px auto;

        h3 {
            font-size: 16px;
        }
    }
`;
const Rating = styled.form`
    display: block;
    width: 250px;
    padding: 10px 18px 10px 15px;
    box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.1);
    border-radius: 30px;
    position: relative;    

    .rating-counter {
        font-size: 20px;
        color: #fff;
        width: 50px;
        text-align: center;
        background: ${theme.azulU};
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-radius: 0 30px 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &::before { transition: all 0.25s ease 0s; }

    input { display: none; }

    label {
        width: 25px;
        height: 25px;
        display: inline-flex;
        cursor: pointer;
        background-color: #DDDDDD;
        margin: 4px;
        transition: all 1s ease 0s;
        clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
        
        &::before {
            width: 90%;
            height: 90%;
            content: "";
            z-index: -1;
            display: block;
            margin-left: 5%;
            margin-top: 5%;
            clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
            background: linear-gradient(90deg, yellow, orange 30% 50%, #DDDDDD 50%, 70%, #DDDDDD 100%); 
            background-size: 205% 100%;
            background-position: 0 0;

            &:hover { transition: all 0.25s ease 0s; }
        }
    }

    input:checked + label ~ label:before {
        background-position: 100% 0;
        transition: all 0.25s ease 0s;  
    }

    input:checked + label ~ label:hover:before { background-position: 0% 0 }

    #rs1:checked ~ .rating-counter:before { content: "1"; }
    #rs2:checked ~ .rating-counter:before { content: "2"; }
    #rs3:checked ~ .rating-counter:before { content: "3"; }
    #rs4:checked ~ .rating-counter:before { content: "4"; }
    #rs5:checked ~ .rating-counter:before { content: "5"; }

    label + input:checked ~ .rating-counter:before {
        color: #fff !important;
        transition: all 0.25s ease 0s;
    }

    label:hover ~ .rating-counter:before {
        color: #9aacc6 !important;
        transition: all 0.5s ease 0s; 
        animation: pulse 1s ease 0s infinite;
    }

    @keyframes pulse { 50% { font-size: 30px; } }

    label[htmlFor=rs1]:hover .rating-counter:before { content: "1" !important; }
    label[htmlFor=rs2]:hover ~ .rating-counter:before { content: "2" !important; }
    label[htmlFor=rs3]:hover ~ .rating-counter:before { content: "3" !important; }
    label[htmlFor=rs4]:hover ~ .rating-counter:before { content: "4" !important; }
    label[htmlFor=rs5]:hover ~ .rating-counter:before { content: "5" !important; }

    input:checked:hover ~ .rating-counter:before {
        animation: none !important;
        color: #ffab00 !important;
    }
`;
const Formulario = styled.form`
    width: 600px;
    margin: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .tipo {
        display: flex;    
        align-items: center;
        justify-content: space-between;
        
        h5 {
            font-size: 15px;
        }
    }
    .botones {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    textarea {
        width: 100%;
        min-width: 600px;
        max-width: 600px;
        min-height: 150px;
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: #fff;
        opacity: .8;
        border-radius: 10px;
        border: 1px solid #f2f2f2;
        outline: none;
        padding: 5px;
    }
    @media (max-width: 768px) {
        width: 100%;

        textarea {
            min-width: 100%;
            max-width: 100%;
            min-height: 120px;
        }
    }
`;
const ContenedorSelect = styled.div`
    background-color: #fff;
    opacity: .8;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 5px;
    width: 160px;
    min-width: 130px;
    height: 30px;  
    text-align: center;
    display: flex;
    align-items: center;  
    position: relative;
    transition: 1.5s ease all;
    z-index: 5;

    &:hover {
    background: ${theme.grisClaro};
    }

    @media (max-width: 768px) {
    margin-left: 10px;
}
`;
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    z-index: 5;

    svg {
        width: 20px;
        height: 20px;
        fill: currentColor !important;
        color: ${theme.azulU};
    }

    @media (max-width: 1050px) {
        font-size: 15px;
    }
    @media (max-width: 550px) {
        padding-left: 5px;
    }
`;
const Opciones = styled.div`
    background: #fff;
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    border-radius: 10px;
    max-height: 300px;
    overflow-y: auto;
`; 
const Opcion = styled.div`
    padding: 10px;
    display: flex;
    height: 40px;
    text-transform: uppercase;

    &:hover {
        background: ${theme.grisClaro};
    }
`;
const Boton = styled.button`
    background-image: radial-gradient(circle at 7.7% 50%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
    border: none;
    border-radius: 15px;
    margin: auto;
    padding: 8px 15px;
    cursor: pointer;
    font-weight: 300;
    font-size: 20px;
    color: #fff;  
    transition: 1s linear all;

    &:hover {
        color: #000;
        background-image: radial-gradient(circle at 86.64% 71.15%, #0067ff 0, #005fff 12.5%, #0055ff 25%, #4f4afd 37.5%, #783cf2 50%, #9429e6 62.5%, #ab02d8 75%, #bd00ca 87.5%, #cc00ba 100%);
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
`;

export {Fondo, Contenedor, Rating, Formulario, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion, Boton, Regresar}