/* Una promesa es codigo que tiene varios estados, se lanza una peticion para procesar un codigo
y así surgen dos caminos, uno en el que la promesa se ejecuto correctamente y otro en donde se 
produho un error
Mientras la promesa no ha terminado de ejecutar su codigo se encuentra en estado de pendiente y despues
pasa a dos estados, ya sea resuelto (utilizaremos .then()) o rechazado (utilizaremos .catch())*/

/*Creamos un objeto de tipo promesa, esta recibe dos parametros que seran funciones de tipo
callback, uno sera en caso de que sea resuelta la promesa correctamente y la segunda sera en caso
de que haya algun fallo*/
let miPromesa = new Promise((resolver, rechazar) => {
    // Con esta variable booleana simulamos los dos caminos
    let expresion = false;
    if(expresion)
    // Pasamos como parametro la informacion que queremos que reciba la promesa cuando sea ejecutada
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
/* Con then recibimos dos parametros (dos funciones de tipo flecha) (en caso de no usar catch)
al usar catch ya no se envian dos parametros sino que se pone el .catch(codigo);*/
miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));