const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

// argv.direccion
clima.getInfo(argv.direccion)
.then(console.log)
.catch(console.log);


