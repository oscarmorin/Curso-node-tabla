
const { crearArchivo } = require('./Helpers/multiplicar');
const argv = require('./Config/yargs');     
                

console.clear();

//Como funciona el argv de manera manual sin usar npm yargs
//const [,, arg3 = 'base=5']= process.argv;
//const [, base=5] = arg3.split('=');

//const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


