/*
*Una clase es una plantilla, en esta se definen los atributos 
*y metodos que queremos que contengan nuestros objetos.
*Así a partir de esta clase (plantilla) podemos crear una instancia 
*lo que signifca que un objeto es una instancia de una clase
*/

// La sintaxis para definir una clase es class nombre {}
class Persona{
    /* 
    *Una clase debe tener:
    *Nombre
    *Atributos
    *Metodos
    */

    // Sintaxis para un constructor dentro de una clase:
    // constructor (parametros){}
    constructor(nombre, apellido){
        // al usar this.nombre se crea una nueva propiedad y se le asigna a la clase
        this.nombre = nombre; 
        this.apellido = apellido;
    }
}

// Al utilizar la plantilla para crear un nuevo objeto se le conoce como:
// Instancia de clase u instancia de objeto
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );