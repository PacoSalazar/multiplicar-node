//Imprimir en un archivo
/* requires
const fs = require('fs');

let base = 6;

let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
}); */



//Imprimir en un archivo mandando a llamar a una funcion de otro archivo un archivo
/* const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'abc';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e)); */


//Imprimir en una archivo enviando la base desde consola
/*const { crearArchivo } = require('./multiplicar/multiplicar');

let args = process.argv;
let parametro = args[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/


//Imprimir en un archivo enviando diferentes parametros desde consola con yargs

const colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}