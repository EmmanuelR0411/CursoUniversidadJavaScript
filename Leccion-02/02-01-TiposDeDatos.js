/* Ejemplos de tispos de datos en JS */

// Tipo de dato string
let nombre = 'Emmanuel';
console.log(nombre);

// Tipo de dato numero
let numero = 7;
console.log(numero);

// Tipode dato objeto
let objeto = {
    nombre: 'Emmanuel',
    edad: 22,
    ocupacion: 'Estudiante'
}
console.log(objeto);

// Tipo de dato Boolean
let bandera = false;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato funcion, sirve para reutilizar lineas de codigo
const funcion = () => {}
console.log(funcion);
console.log(typeof funcion);

//Tipo de dato Symbol
let simbolo = Symbol('mi simbolo');
console.log(simbolo);
console.log(typeof simbolo);

// Tipo de dato clase (Las clases tambien son funciones)
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);

// Tipo de dato undefined
let x;
console.log(typeof x);

// Tipo de dato null (null=ausencia de valor)
let y = null;
console.log(y);
console.log(typeof y);

// Tipos de datos array (arreglos, son de tipo objec)
let auto = ['BMW','AUDI','VOLVO'];
console.log(auto);
console.log(typeof auto);

// Cadena vacia, valor que se puede asignar
let v ='';
console.log(v);
console.log(typeof v);
  
// Concatenar cadenas, las expresiones en JS las evalua de izq a derecha
let nombre1 = 'Emmanuel';
let apellido1 = 'Reyna';
let nombreCompleto = nombre1 + ' ' + apellido1;
console.log(nombreCompleto); 
