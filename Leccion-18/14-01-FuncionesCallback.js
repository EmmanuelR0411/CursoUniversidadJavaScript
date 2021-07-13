/* Una funcion de tipo callback es una funcion que se pasa como parametro a otra funcion y dentro
de una funcion podremos llamar a otra funcion
Basicamente es mandar a llamar una funcion dentro de otra funcion pero recibiendo como argumento 
a la funcion, su objetivo es que sean utilizadas para procesos que se ejecuten de manera asincrona */
miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
// Se puede hacer como una variable o como una funcion sin mas

/*let imp =*/ function imprimir(mensaje){
    console.log(mensaje);
}

// Se define el nombre de un argumento, esta puede tener cualquier nombre (funcionCallback)
function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    /*Aqui pasamos el parametro a la funcion imp, esta procesa todo y despues regresa el resultado
    en este caso solo imprime en consola la variable res que esta en esta funcion suma 
    En resumen se recibe como argumento una funcion y en cualquier momento puedes mandarla a llamar
    esa funcion que se recibio como argumento*/
    funcionCallback(`Resultado: ${res}`);
}
// Aqui pasamos como parametro la funcion imp a la funcion sumar
sumar(5,3, imp);