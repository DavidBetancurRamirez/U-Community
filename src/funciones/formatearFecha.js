import {format, fromUnixTime} from 'date-fns';

const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd'/'MM'/'yyyy")
}

export default formatearFecha