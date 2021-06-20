//Declaración de la función
function miFuncion(a, b){
    // arguments sirve para saber cuantos argumentos recibe nuestra funcion
    // Este metodo solo se puede utilizar dentro de la funcion
    console.log(arguments.length);
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);



 /* 
  Una funcion es un tipo de dato function, sin embargo tambien es definida como object
  Los objetos pueden tener metodos y propiedades
 */
console.log(typeof miFuncion);

// Esta es una forma de demostrar que la funcion es un objeto, se esta asignando la funcion pero como si fuera texto
var miFuncionTexto = miFuncion.toString();
// Nos imprime en texto la funcion que se ha definido
console.log(miFuncionTexto);

// Todo lo de este codigo (arguments y la funcion a string) solo es para comprobar que la funcion

// Puede ser considerada como un objeto