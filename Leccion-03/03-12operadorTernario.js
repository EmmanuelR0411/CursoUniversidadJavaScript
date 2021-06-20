// Operador ternario, una parte es veradera y otra falsa

/*  
*Se ve el resultado de la expresion booleana(true o false), se pone un signo de ?
*si es verdadero se regresa el primer valor despues del ?
*y si es falso se regresa el sehgundo valor, despues de los :
*/
let resultado = (3 > 2) ? 'verdadero' : 'falso';

// Se pueden regresar diferentes tipos de datos, string, numeros
console.log(resultado);

// Ejercicio numero par
let numero = 9;
resultado = (numero % 2 == 0) ? 'Es un numero par' : 'Es un numero impar';
console.log(resultado);