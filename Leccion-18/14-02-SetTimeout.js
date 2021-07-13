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
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asíncrono después de 3 seg');
}

/* Esta funcion recibe dos parametros:
1.-Una funcion de tipo callback
2.-El tiempo que se quiere que transcurra para que se mande a llamar la funcion callback(en milisegundos)
 En el caso de las funciones callback se pueden tener varios procesos que se ejecuten en paralelo*/
setTimeout(miFuncionCallback, 3000);//después de 3 seg
//Cuando se pasa como referencia una funcion no se tienen que poner parentesis, se pasa como una variable

// Aqui pasamos como referencia directamente la funcion
setTimeout( function(){ console.log('saludo asíncrono 2')}, 4000);

// Pasamos la funcion pero como una funcion flecha
setTimeout( () => console.log('saludo asíncrono 3'), 1000);