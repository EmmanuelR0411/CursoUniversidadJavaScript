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

/* Si utilizamos async antes de un metodo significa que ese metodo esta obligado a 
regresar una promesa */
//async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    // Es como si regresara el valor de resolver
    return 'saludos con promesa y async';
}

// Debido a es una funcion normal y no un objeto de tipo promesa se tienen que utilizar parentesis
miFuncionConPromesa().then(valor => console.log(valor));