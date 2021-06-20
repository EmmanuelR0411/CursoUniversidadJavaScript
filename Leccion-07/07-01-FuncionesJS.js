// Una funcion es un codigo reutilizable y se puede mandar a llamar las veces que sean necesarias


// Las funciones pueden ser llamadas antes de definirlas o despues de definirlas(Hoisting)
/*
 El hoisting hace que mueve la declaracion de la funcion al inicio del programa para que 
 se pueda utilizar en cualquier parte 
*/
miFuncion(4, 2);

//Declaración de la función
// Los argumentos de una funcion son los parametros con los que esta va a trabajar (es opcional)
function miFuncion(a, b){
    console.log("Suma: " + (a + b));   
}

//Llamando a la función
// Entre parentesis se pasan los valores a la funcion (se envian a lo que se declaro como argumento)
miFuncion(2, 3);

