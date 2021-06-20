let miNUmero = '10';

console.log(miNUmero);
console.log(typeof miNUmero);

let edad = Number(miNUmero);
console.log(typeof edad);

if (edad >= 18){
    console.log(`Puede votar`);
}
else{
    console.log(`Muy joven para votar`);
}

let resultado = (edad >= 18) ? `Puede votar` : `Muy joven para votar`;
console.log(resultado);