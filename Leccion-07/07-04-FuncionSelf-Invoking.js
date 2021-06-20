//Declaración de la función
function miFuncion(a, b){
     return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);


// Funciones que se mandan a llamar a si mismas (self-invoking)
// Se define pero no se le da nombre ni se le asigna a una variable (puede o no pasarse parametros)
(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4); // Estos parentesis hacen que la funcion se llame a si misma
// Este tipo de funciones no se pueden volver a utilizar, solo se ejecutan en esta parte del codigo