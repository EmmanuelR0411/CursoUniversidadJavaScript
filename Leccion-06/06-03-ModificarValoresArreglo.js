//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

// Para poder modificar un valor se indica el indice al que se quiere acceder y se le da el nuevo valor
autos[1] = 'MerecedesBenz';
console.log(autos[1]);

// Para agregar nuevos valores a un arreglo se utiliza la funcion push (nombre.push)
// Esto agrega el nuevo elemento al final del arreglo
autos.push('Audi');
console.log(autos);