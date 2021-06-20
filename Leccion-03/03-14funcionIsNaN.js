// NaN significa Not a Number, es decir que no es un numero
let miNUmero = '10x';

console.log(miNUmero);
console.log(typeof miNUmero);

let edad = Number(miNUmero);
console.log(edad);

// Preguntamos si almacena un valor que no es numerico, si no es numero da TRUE
if (isNaN(edad)){
    console.log(`No es un numero`);
}
else {
    if (edad >= 18){
        console.log(`Puede votar`);
    }
    else{
        console.log(`Muy joven para votar`);
    }
}


if (isNaN(edad)){
    console.log(`No es un numero`);
}
else {
    let resultado = (edad >= 18) ? `Puede votar` : `Muy joven para votar`;
console.log(resultado);
}

