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

// Imprimimos la cantidad de elemntos que tiene el arreglo
console.log(autos.length);

// Otra forma de agregar un elemento al final del arreglo (sin dejar indices vacios)
autos[autos.length] = 'Cadillac';

console.log(autos);

// Se agrego un nuevo elemnto pero se dejo un elemento vacio (el indice 5) (no es recomendable hacerlo)
autos[6] = 'Porshe';
console.log(autos);