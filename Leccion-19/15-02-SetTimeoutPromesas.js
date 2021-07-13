let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));


// Definimos nuestra promesa, no es necesario utilizar los dos parametros 
let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    // setTimeout recibe una funcion callback, así que la definimos de tipo flecha, la cual manda a 
    // llamar la funcion resolver en caso de que el codigo sea correcto
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('fin promesa');
});

promesa.then(valor => console.log(valor));