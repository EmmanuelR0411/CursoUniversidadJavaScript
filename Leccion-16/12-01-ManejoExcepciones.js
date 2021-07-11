'use strict' 
//Ponemos nuestro programa en modo estricto para que arroje los erres si usamos una variable 
//que no ha sido declarada

/* Para manejar errores utilizamos try catch
en catch se captura el error que se arroje(ese error se recibe como parametro de manera automatica)
Al utilizar esto nuestro programa no termina de una manera abrupta y nos permite recuperarnos del
error de no declarar una variable, permite que nuestro programa continue  */
try{
    let x = 10;
    //miFuncion();
}
// Aqui se recibe el error automaticamente 
catch(error){
    console.log(error);
}
/* El bloque finally a diferencia de try y cathc() este siempre se ejecuta, aunaque no exista
un error, sin embargo este bloque es opcional */
finally{
    console.log('termina la revisión de errores');
}

console.log('continuamos...');