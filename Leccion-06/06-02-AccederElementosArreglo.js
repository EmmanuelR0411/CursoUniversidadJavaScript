//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

// Accede a elementos especificos de un arreglo, se realiza mediente indices, empezando con 0
console.log(autos[0]);
console.log(autos[2]);

 /* 
  Para recorrer un arreglo por completo, 
  para conocer la cantidad de elementos que teiene se utiliza el .length, de esta forma
  podemos ponerle fin al ciclo for, recorriendo todos los elementos
 */
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}