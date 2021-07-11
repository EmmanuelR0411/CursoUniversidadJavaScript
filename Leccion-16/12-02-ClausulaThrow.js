'use strict'
let resultado = -1;

try{
    /* la clausula throw sirve para arrojar exepciones (arroja un nuevo error), osea que sirve
    para arrojar nuestros propios errores en caso de que se requiera */
    if(isNaN(resultado)) throw 'No es un número';
    else if( resultado === '') throw 'Es cadena vacía';
    else if( resultado >= 0) throw 'Valor positivo';
    else if( resultado < 0 ) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    /* El error se puede dividir en varias partes, el nombre del error(tipo de error)
    y el mensaje que contiene, si nosostros generamos el error con throw entonces 
    solo arroja el mensaje */
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores');
}