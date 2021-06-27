//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.nombreCompleto() );

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );

let miObjeto = new Object();
/* Esta es una mejor practica pra crear nuevos objetos
let nombre = {}
es el mismo resultado que usar new 
*/
let miObjeto2 = {};

// De esta forma creas una nueva cadena con new
let miCadena1 = new String('Hola');
// Semejante al new pero es mas recomendable esto
let miCadena2 = 'Hola';

/* Toda la cracion de variables tiene la opcion de utilizar la palabra new
pero lo mas recomendable es hacerlo simple */

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};



