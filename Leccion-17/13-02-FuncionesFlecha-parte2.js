let miFuncion = function (){
    console.log('saludos desde mi función');
}

// const miFuncionFlecha = () => {
//     console.log('saludos desde mi función flecha');
// }

//const miFuncionFlecha = () => console.log('saludos desde mi función flecha');

//miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función flecha';
// }

// Si es una sola linea se puede hacer la declaracion sin necesidad de abrir el cuerpo de la funcion
const saludar = () => 'Saludos desde función flecha';

console.log( saludar() );

// Regresamos un objeto desde nuestra funcion flecha, el objeto se encierra entre llaves {}
//y asu vez estas entre parentesis
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log( regresaObjeto());


const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

//const funcionConParametros = (mensaje) => console.log( mensaje );
// Declaramos una funcion flecha que puede recibir parametros y si es un solo parametro se puede
// omitir el uso de parentesis
const funcionConParametros = mensaje => console.log( mensaje );
funcionConParametros('saludos con parametros');


//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log( funcionConVariosParametros(3,5));


