//Declaración de la función
function miFuncion(a, b){
     return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Función de tipo Expresión o funciones anonimas
// No se les coloca ningun nombre, sino que la funcion se asigna a una variable
let sumar = function (a, b){return a + b};

// Se llama con el nombre de la variable a la que se le asigno la funcion
resultado = sumar(1, 2);
console.log(resultado);

console.log(sumar (3,4));