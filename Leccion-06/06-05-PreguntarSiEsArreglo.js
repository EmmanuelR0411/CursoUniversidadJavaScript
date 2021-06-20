//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

// Con typeof nos arroja que es un tipo object
console.log(typeof autos);

// A partir de la version de ecmascript 2015 se agrego la clase array y el metodo isarray
// De esta forma podemos preguntar si es un arreglo (Array.isArray(nombre))
console.log( Array.isArray(autos) );

// Otra forma de preguntar si se trabajo con un arreglo (nombre instanceof array)
// Se pregunta si la variable es una instancia de tipo arreglo
console.log( autos instanceof Array);