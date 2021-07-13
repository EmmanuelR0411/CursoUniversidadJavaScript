let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
/* await espera el resultado de una promesa */
// Definimos una funcion que regresara una promesa (async)
async function funcionConPromesaYAwait(){
    // Aqui creamos una promesa y solo manejamos la parte de resolver
    let miPromesa = new Promise( resolver => {
        // Mandamos a llamar el metodo de resolver
        resolver('Promesa con await');
    });

    // Consumimos directamente esta informacion, al utilizar la palabra await
    /* Esto significa que ya no es necesario utilizar la palabra reservada .then
    await manda a llamar la promesa, la procesa y una vez termina de ejecutarse se regresa
    el resultado
    **await solo se puede utilizar dentro de una funcion declarada con async */
    console.log( await miPromesa );
}

funcionConPromesaYAwait();
