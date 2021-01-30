const axios = require('axios');
const lugar = require('..//lugar/lugar');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0413b3d803db328681bc0348f200efa8
    &units=metric`)

    return resp.data.main.temp;
}


const getInfo = async ( direccion ) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ direccion } es de ${ temp }.`
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}


module.exports = {
    getClima,
    getInfo
}