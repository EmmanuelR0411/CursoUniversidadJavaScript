//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

// Esteb tipo de funciones (flecha) se declararon en ECMAScript 6
// Se pueden omitir las llaves y el return, al igual que la palabra function
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

console.log(sumarFuncionTipoFlecha(8,9));