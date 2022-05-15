import React from "react";
import styled from "styled-components";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { es } from 'date-fns/locale'

function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale:es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale:es });
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

const ContenedorInput = styled.div`
  input {
      font-family: 'Work Sans', sans-serif;       
      box-sizing: border-box;
      background: #fff;
      border: none;
      cursor: pointer;
      border-radius: 0 10px 0 10px; 
      height: 25px; 
      width: 235px;
      padding: 5px 20px; 
      font-size: 16px; 
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 900px) {
        margin-left: 10px;
      }
  }

  div {
    width: 100%;
    font-size: 14px;
  }
`;

const Dates = ({fecha, cambiarFecha}) => {
  return (
    <ContenedorInput>
        <DayPickerInput 
            value={fecha}
            onDayChange={(day) => cambiarFecha(day)}
            format="dd 'de' MMMM 'de' yyyy"
            formatDate={formatDate}
            parseDate={parseDate}

            dayPickerProps={
              {
                months: meses,
                weekdaysShort: dias_semana_cortos
              }
            }
        />
    </ContenedorInput>
  );
}
 
export default Dates;