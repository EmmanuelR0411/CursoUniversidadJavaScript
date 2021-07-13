//-------------------------------------------------------------
// Definimos nuestra promesa
//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('inicio función');
    let miPromesa = new Promise(resolver => {
        // Aqui llamamos a la promesa y le damos un tiempo con setTimeout
        setTimeout(()=> resolver('promesa con await y timeout'), 3000);
    });
    /* await solo se puede utilizar dentro de las promesas que estan declaradas con async */
    // Aqui esperamos la respuesta de la proesa con await así que la siguiente linea de codigo no se
    // imprime hasra que obtenemos el resultado de esa promesa
    console.log( await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitTimeout();
