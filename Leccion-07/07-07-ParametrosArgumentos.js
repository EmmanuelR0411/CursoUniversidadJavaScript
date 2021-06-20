//Declaración Función de tipo Expresión
// Las variables que va recibir esta funcion (las que estan dentro de los parentesis) son parametros
let sumar = function (a = 4, b = 5){
    /* 
    arguments es una propiedad que tiene la funcion (el cual es un array), en el estan los valores
    que recibe la funcion
    */
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    // Se pueden acceder a mas argumentos aunque no esten definidos
    console.log(arguments[3]);

    return a + b + arguments[2];
};

// Los valores finales que se van a pasar a la funcion son los argumentos
// Si se le envian valores y ya tiene valores definidos la funcion, estos nuevos sustituyen 
// los que ya estaban previamente
resultado = sumar(3, 6, 7);
/*
No es necesario que coincidad los parametros con los argumentos pero si se quiere acceder a ellos
se debe llamar con arguments ya que no se utilizo un parametro para ese argumento extra
*/
console.log(resultado);